
const express = require("express");
const cors = require("cors");
const path = require("path");
const { COUNTRIES, CURRENCIES, CITY_GUIDES } = require("./data");

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());

const cache = new Map();

const weatherLabels = {
  0: "Cielo despejado",
  1: "Mayormente despejado",
  2: "Parcialmente nublado",
  3: "Nublado",
  45: "Niebla",
  48: "Niebla con escarcha",
  51: "Llovizna ligera",
  53: "Llovizna moderada",
  55: "Llovizna intensa",
  61: "Lluvia ligera",
  63: "Lluvia moderada",
  65: "Lluvia intensa",
  71: "Nieve ligera",
  73: "Nieve moderada",
  75: "Nieve intensa",
  80: "Chubascos ligeros",
  81: "Chubascos moderados",
  82: "Chubascos intensos",
  95: "Tormenta",
  96: "Tormenta con granizo",
  99: "Tormenta fuerte"
};

const aliases = {
  "Río de Janeiro": "Rio de Janeiro",
  "París": "Paris",
  "Roma": "Rome",
  "Venecia": "Venice",
  "Tokio": "Tokyo",
  "Kioto": "Kyoto",
  "Seúl": "Seoul",
  "Nueva York": "New York",
  "Londres": "London",
  "Edimburgo": "Edinburgh"
};

function countryByCode(code) {
  return COUNTRIES.find((item) => item.code === String(code || "").toUpperCase());
}

function guideFor(code, city) {
  return CITY_GUIDES[`${code}|${city}`] || null;
}

async function fetchJson(url, options = {}, timeout = 15000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        "User-Agent": "TRAVELFOOD-University-Project/3.0",
        ...(options.headers || {})
      }
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

async function geocodeCity(city, countryCode) {
  const name = aliases[city] || city;
  const params = new URLSearchParams({
    name,
    count: "20",
    language: "es",
    format: "json",
    countryCode
  });

  const data = await fetchJson(`https://geocoding-api.open-meteo.com/v1/search?${params}`);
  const valid = (data.results || [])
    .filter((item) => item.country_code?.toUpperCase() === countryCode.toUpperCase())
    .sort((a, b) => (b.population || 0) - (a.population || 0))[0];

  if (!valid) throw new Error("CITY_NOT_FOUND");

  return {
    name: city,
    latitude: valid.latitude,
    longitude: valid.longitude,
    timezone: valid.timezone,
    elevation: valid.elevation ?? null,
    admin1: valid.admin1 || null
  };
}

async function getCurrentWeather(lat, lon) {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current: "temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,precipitation",
    timezone: "auto"
  });

  const data = await fetchJson(`https://api.open-meteo.com/v1/forecast?${params}`);
  const current = data.current || {};

  return {
    temperature: current.temperature_2m,
    apparent: current.apparent_temperature,
    humidity: current.relative_humidity_2m,
    wind: current.wind_speed_10m,
    precipitation: current.precipitation,
    code: current.weather_code,
    label: weatherLabels[current.weather_code] || "Condición variable",
    updatedAt: current.time || null
  };
}

async function wikiPageByTitle(title, lang = "es") {
  const key = `title:${lang}:${title}`;
  if (cache.has(key)) return cache.get(key);

  try {
    const params = new URLSearchParams({
      action: "query",
      format: "json",
      origin: "*",
      redirects: "1",
      titles: title,
      prop: "pageimages|extracts|info",
      piprop: "thumbnail",
      pithumbsize: "1100",
      exintro: "1",
      explaintext: "1",
      exsentences: "2",
      inprop: "url"
    });

    const data = await fetchJson(`https://${lang}.wikipedia.org/w/api.php?${params}`);
    const page = Object.values(data.query?.pages || {})[0];

    if (!page || page.missing !== undefined) {
      cache.set(key, null);
      return null;
    }

    const result = {
      title: page.title,
      image: page.thumbnail?.source || null,
      extract: page.extract || null,
      url: page.fullurl || null
    };

    cache.set(key, result);
    return result;
  } catch {
    cache.set(key, null);
    return null;
  }
}

async function wikiSearch(query, lang = "es") {
  const key = `search:${lang}:${query}`;
  if (cache.has(key)) return cache.get(key);

  try {
    const params = new URLSearchParams({
      action: "query",
      format: "json",
      origin: "*",
      generator: "search",
      gsrsearch: query,
      gsrnamespace: "0",
      gsrlimit: "8",
      prop: "pageimages|extracts|info",
      piprop: "thumbnail",
      pithumbsize: "1100",
      exintro: "1",
      explaintext: "1",
      exsentences: "2",
      inprop: "url"
    });

    const data = await fetchJson(`https://${lang}.wikipedia.org/w/api.php?${params}`);
    const pages = Object.values(data.query?.pages || {});
    const withImage = pages.find((p) => p.thumbnail?.source);
    const page = withImage || pages[0];

    if (!page) {
      cache.set(key, null);
      return null;
    }

    const result = {
      title: page.title,
      image: page.thumbnail?.source || null,
      extract: page.extract || null,
      url: page.fullurl || null
    };

    cache.set(key, result);
    return result;
  } catch {
    cache.set(key, null);
    return null;
  }
}

async function commonsImage(query) {
  const key = `commons:${query}`;
  if (cache.has(key)) return cache.get(key);

  try {
    const params = new URLSearchParams({
      action: "query",
      format: "json",
      origin: "*",
      generator: "search",
      gsrsearch: query,
      gsrnamespace: "6",
      gsrlimit: "10",
      prop: "imageinfo",
      iiprop: "url",
      iiurlwidth: "1100"
    });

    const data = await fetchJson(`https://commons.wikimedia.org/w/api.php?${params}`);
    const pages = Object.values(data.query?.pages || {});
    const image = pages
      .map((page) => page.imageinfo?.[0]?.thumburl || page.imageinfo?.[0]?.url)
      .find(Boolean) || null;

    cache.set(key, image);
    return image;
  } catch {
    cache.set(key, null);
    return null;
  }
}

async function bestWikiContent(title, query) {
  const exactEs = await wikiPageByTitle(title, "es");
  if (exactEs?.image) return exactEs;

  const searchEs = await wikiSearch(query || title, "es");
  if (searchEs?.image) {
    return {
      ...searchEs,
      extract: exactEs?.extract || searchEs.extract,
      url: exactEs?.url || searchEs.url
    };
  }

  const exactEn = await wikiPageByTitle(title, "en");
  if (exactEn?.image) {
    return {
      ...exactEn,
      extract: exactEs?.extract || exactEn.extract,
      url: exactEs?.url || exactEn.url
    };
  }

  const searchEn = await wikiSearch(query || title, "en");
  if (searchEn?.image) {
    return {
      ...searchEn,
      extract: exactEs?.extract || searchEn.extract,
      url: exactEs?.url || searchEn.url
    };
  }

  const commons = await commonsImage(query || title);

  return {
    title: exactEs?.title || searchEs?.title || exactEn?.title || searchEn?.title || title,
    image: commons,
    extract: exactEs?.extract || searchEs?.extract || exactEn?.extract || searchEn?.extract || null,
    url: exactEs?.url || searchEs?.url || exactEn?.url || searchEn?.url || null
  };
}

async function enrichGuide(guide, city, country) {
  const heroPromise = bestWikiContent(
    guide.wikiTitle,
    `${city} ${country.name} ciudad turismo`
  );

  const dishPromises = guide.dishes.map(async (dish) => {
    const wiki = await bestWikiContent(
      dish.wikiTitle,
      `${dish.name} ${city} ${country.name} gastronomía plato`
    );

    return {
      ...dish,
      image: dish.imageUrl || wiki?.image || null,
      url: dish.infoUrl || wiki?.url || `https://es.wikipedia.org/w/index.php?search=${encodeURIComponent(dish.name)}`
    };
  });

  const attractionPromises = guide.attractions.map(async (place) => {
    const wiki = await bestWikiContent(
      place.wikiTitle,
      `${place.name} ${city} ${country.name} turismo`
    );

    const mapQuery = encodeURIComponent(`${place.name}, ${city}, ${country.name}`);

    return {
      ...place,
      image: place.imageUrl || wiki?.image || null,
      extract: wiki?.extract || place.note,
      url: place.infoUrl || wiki?.url || `https://es.wikipedia.org/w/index.php?search=${encodeURIComponent(place.name)}`,
      mapsUrl: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`
    };
  });

  const [hero, dishes, attractions] = await Promise.all([
    heroPromise,
    Promise.all(dishPromises),
    Promise.all(attractionPromises)
  ]);

  return {
    hero: {
      image: hero?.image || null,
      description: hero?.extract || `${city} es uno de los destinos seleccionados en TRAVELFOOD.`,
      url: hero?.url || null
    },
    dishes,
    attractions
  };
}

app.get("/api/health", (req, res) => {
  res.json({ ok: true, project: "TRAVELFOOD" });
});

app.get("/api/countries", (req, res) => {
  res.json(COUNTRIES);
});

app.get("/api/currencies", (req, res) => {
  res.json(CURRENCIES);
});

app.get("/api/explore", async (req, res) => {
  try {
    const { country: code, city } = req.query;
    const country = countryByCode(code);
    const guide = guideFor(code, city);

    if (!country || !guide) {
      return res.status(400).json({ error: "Selecciona un país y una ciudad disponibles." });
    }

    const location = await geocodeCity(city, code);

    const [weatherResult, guideResult] = await Promise.allSettled([
      getCurrentWeather(location.latitude, location.longitude),
      enrichGuide(guide, city, country)
    ]);

    const weather = weatherResult.status === "fulfilled" ? weatherResult.value : null;
    const content = guideResult.status === "fulfilled"
      ? guideResult.value
      : {
          hero: { image: null, description: `${city}, ${country.name}`, url: null },
          dishes: guide.dishes.map((d) => ({ ...d, image: null, url: null })),
          attractions: guide.attractions.map((p) => ({
            ...p,
            image: null,
            extract: p.note,
            url: null,
            mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${p.name}, ${city}, ${country.name}`)}`
          }))
        };

    res.json({
      country,
      location,
      hero: content.hero,
      weather,
      dishes: content.dishes,
      attractions: content.attractions
    });
  } catch (error) {
    console.error(error);
    res.status(error.message === "CITY_NOT_FOUND" ? 404 : 500).json({
      error: error.message === "CITY_NOT_FOUND"
        ? "No se pudo ubicar correctamente la ciudad."
        : "No se pudo cargar el destino."
    });
  }
});

app.post("/api/convert", async (req, res) => {
  try {
    const { from, to, amount } = req.body;
    const numeric = Number(amount);

    if (!from || !to || !Number.isFinite(numeric) || numeric <= 0) {
      return res.status(400).json({ error: "Completa correctamente la conversión." });
    }

    if (from === to) {
      return res.json({ from, to, amount: numeric, rate: 1, result: numeric });
    }

    const data = await fetchJson(`https://open.er-api.com/v6/latest/${from}`);
    const rate = data.rates?.[to];

    if (!rate) return res.status(400).json({ error: "Tipo de moneda no disponible." });

    res.json({
      from,
      to,
      amount: numeric,
      rate,
      result: numeric * rate,
      updatedAt: data.time_last_update_utc || null
    });
  } catch (error) {
    console.error(error);
    res.status(502).json({ error: "No se pudo consultar el tipo de cambio." });
  }
});

// Mostrar la aplicación React y mantener las rutas /api funcionando.
const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath));

// Mostrar React para las rutas de la página.
app.get("/{*ruta}", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`TRAVELFOOD Backend: http://localhost:${PORT}`);
});
