import React, { useEffect, useMemo, useState } from "react";
import "./styles.css";

const API = "http://localhost:3000/api";

function weatherIcon(code) {
  if (code === 0) return "☀️";
  if ([1, 2].includes(code)) return "🌤️";
  if (code === 3) return "☁️";
  if ([45, 48].includes(code)) return "🌫️";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "🌧️";
  if ([71, 73, 75].includes(code)) return "❄️";
  if ([95, 96, 99].includes(code)) return "⛈️";
  return "🌡️";
}


function VisualIcon({ type }) {
  const common = { viewBox: "0 0 64 64", "aria-hidden": true };
  if (type === "weather") return (
    <svg {...common} className="decorative-svg">
      <circle cx="23" cy="22" r="10" className="svg-fill" />
      <path d="M19 44h27c7 0 12-4 12-10s-5-10-12-10c-2-8-8-13-17-13-10 0-17 6-19 15-6 1-10 5-10 10 0 5 4 8 10 8h9Z" className="svg-stroke" />
    </svg>
  );
  if (type === "food") return (
    <svg {...common} className="decorative-svg">
      <circle cx="32" cy="33" r="18" className="svg-stroke" />
      <circle cx="32" cy="33" r="10" className="svg-stroke" />
      <path d="M9 10v44M5 10v16M13 10v16M55 10c-7 7-7 18 0 23v21" className="svg-stroke" />
    </svg>
  );
  if (type === "place") return (
    <svg {...common} className="decorative-svg">
      <path d="M8 50 24 28l10 12 9-11 14 21H8Z" className="svg-stroke" />
      <circle cx="48" cy="16" r="6" className="svg-fill" />
      <path d="M32 10c8 0 14 6 14 14 0 11-14 25-14 25S18 35 18 24c0-8 6-14 14-14Z" className="svg-stroke" />
      <circle cx="32" cy="24" r="4" className="svg-stroke" />
    </svg>
  );
  return (
    <svg {...common} className="decorative-svg">
      <rect x="9" y="16" width="46" height="32" rx="7" className="svg-stroke" />
      <path d="M9 26h46M18 38h12M36 38h10" className="svg-stroke" />
      <circle cx="48" cy="18" r="8" className="svg-fill" />
    </svg>
  );
}

function QuickCard({ type, label, value, detail }) {
  return (
    <div className={`quick-card ${type}`}>
      <div className="quick-icon"><VisualIcon type={type} /></div>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{detail}</small>
      </div>
    </div>
  );
}

function FoodFallback({ name }) {
  return (
    <div className="visual-fallback food-fallback" aria-label={`Imagen no disponible de ${name}`}>
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="61" r="30" />
        <circle cx="60" cy="61" r="18" />
        <path d="M22 25v68M15 25v28M29 25v28M98 25c-11 10-11 28 0 35v33" />
      </svg>
      <span>{name}</span>
    </div>
  );
}

function PlaceFallback({ name }) {
  return (
    <div className="visual-fallback place-fallback" aria-label={`Imagen no disponible de ${name}`}>
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <path d="M14 91 43 51l17 20 15-18 31 38H14Z" />
        <circle cx="84" cy="30" r="11" />
      </svg>
      <span>{name}</span>
    </div>
  );
}

export default function App() {
  const [countries, setCountries] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [countryCode, setCountryCode] = useState("PE");
  const [city, setCity] = useState("Cusco");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [amount, setAmount] = useState("100");
  const [fromCurrency, setFromCurrency] = useState("PEN");
  const [toCurrency, setToCurrency] = useState("USD");
  const [conversion, setConversion] = useState(null);
  const [conversionError, setConversionError] = useState("");
  const [converting, setConverting] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch(`${API}/countries`).then((r) => r.json()),
      fetch(`${API}/currencies`).then((r) => r.json())
    ])
      .then(([countryList, currencyList]) => {
        setCountries(countryList);
        setCurrencies(currencyList);
      })
      .catch(() => setError("No se pudo conectar con el backend."));
  }, []);

  useEffect(() => {
    explore("PE", "Cusco");
  }, []);

  const selectedCountry = useMemo(
    () => countries.find((item) => item.code === countryCode),
    [countries, countryCode]
  );

  function changeCountry(event) {
    const code = event.target.value;
    const country = countries.find((item) => item.code === code);
    setCountryCode(code);
    setCity(country?.cities?.[0] || "");
  }

  async function explore(code, cityName) {
    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams({ country: code, city: cityName });
      const response = await fetch(`${API}/explore?${params}`);
      const result = await response.json();

      if (!response.ok) throw new Error(result.error);

      setData(result);
      setConversion(null);
    } catch (e) {
      setError(e.message || "No se pudo cargar el destino.");
    } finally {
      setLoading(false);
    }
  }

  function submitSearch(event) {
    event.preventDefault();
    explore(countryCode, city);
  }

  async function convert(event) {
    event.preventDefault();
    setConverting(true);
    setConversionError("");

    try {
      const response = await fetch(`${API}/convert`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: fromCurrency,
          to: toCurrency,
          amount: Number(amount)
        })
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error);

      setConversion(result);
    } catch (e) {
      setConversion(null);
      setConversionError(e.message || "No se pudo realizar la conversión.");
    } finally {
      setConverting(false);
    }
  }

  function swapCurrencies() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConversion(null);
    setConversionError("");
  }

  const heroStyle = data?.hero?.image
    ? {
        backgroundImage: `linear-gradient(90deg, rgba(20,22,48,.92), rgba(20,22,48,.64)), url("${data.hero.image}")`
      }
    : undefined;

  return (
    <div className="app">
      <header className="topbar">
        <a href="#inicio" className="brand">
          <span className="logo">TF</span>
          <span>
            <strong>TRAVELFOOD</strong>
            <small>viaja · prueba · descubre</small>
          </span>
        </a>

        <nav>
          <a href="#clima">Clima</a>
          <a href="#gastronomia">Gastronomía</a>
          <a href="#lugares">Lugares</a>
          <a href="#moneda">Moneda</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero" style={heroStyle}>
          <div className="hero-copy">
            <span className="eyebrow">DESCUBRE TU PRÓXIMO DESTINO</span>
            <h1>Viaja con más contexto. Disfruta cada ciudad.</h1>
            <p>
              Elige un país y una ciudad para conocer su clima actual, sabores locales,
              lugares imprescindibles y convertir tu dinero antes de viajar.
            </p>

            <div className="hero-tags">
              <span>Clima en tiempo real</span>
              <span>Sabores locales</span>
              <span>Lugares imperdibles</span>
              <span>Cambio de moneda</span>
            </div>
          </div>

          <form className="search-card" onSubmit={submitSearch}>
            <div className="search-heading">
              <span className="search-icon">✈</span>
              <div>
                <small>ELIGE TU DESTINO</small>
                <strong>¿A dónde quieres ir?</strong>
              </div>
            </div>

            <label>País</label>
            <select value={countryCode} onChange={changeCountry}>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.name}
                </option>
              ))}
            </select>

            <label>Ciudad</label>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              {(selectedCountry?.cities || []).map((name) => (
                <option value={name} key={name}>{name}</option>
              ))}
            </select>

            <button disabled={loading}>
              {loading ? "Preparando destino..." : "Explorar ciudad"}
            </button>
          </form>
        </section>

        <section className="experience-nav" aria-label="Explora por categoría">
          <a href="#clima" className="experience-item weather-exp">
            <span className="experience-icon"><VisualIcon type="weather" /></span>
            <strong>Clima</strong>
            <small>Prepárate para el día</small>
          </a>
          <a href="#gastronomia" className="experience-item food-exp">
            <span className="experience-icon"><VisualIcon type="food" /></span>
            <strong>Gastronomía</strong>
            <small>Descubre sabores locales</small>
          </a>
          <a href="#lugares" className="experience-item place-exp">
            <span className="experience-icon"><VisualIcon type="place" /></span>
            <strong>Lugares</strong>
            <small>Encuentra imperdibles</small>
          </a>
          <a href="#moneda" className="experience-item money-exp">
            <span className="experience-icon"><VisualIcon type="money" /></span>
            <strong>Moneda</strong>
            <small>Calcula tu presupuesto</small>
          </a>
        </section>

        <div className="content">
          {error && <div className="alert">{error}</div>}

          {loading ? (
            <section className="loading">
              <div className="spinner"></div>
              <h2>Preparando tu destino...</h2>
            </section>
          ) : data && (
            <>
              <section className="destination">
                <div className="destination-main">
                  <span className="country-chip">
                    {data.country.flag} {data.country.name}
                  </span>
                  <h2>{data.location.name}</h2>
                  <p>{data.location.admin1 || data.country.name}</p>
                </div>

                <div className="quick-grid">
                  <QuickCard
                    type="weather"
                    label="Clima actual"
                    value={data.weather ? `${Math.round(data.weather.temperature)}°C` : "—"}
                    detail={data.weather?.label || "Dato no disponible"}
                  />
                  <QuickCard
                    type="food"
                    label="Gastronomía"
                    value={`${data.dishes.length} platos`}
                    detail="Sabores representativos"
                  />
                  <QuickCard
                    type="place"
                    label="Lugares"
                    value={`${data.attractions.length} destinos`}
                    detail="Selección turística"
                  />
                  <QuickCard
                    type="money"
                    label="Moneda local"
                    value={data.country.currency}
                    detail={data.country.currencyName}
                  />
                </div>
              </section>

              <section id="clima" className="section">
                <SectionTitle
                  eyebrow="CLIMA ACTUAL"
                  title={`Así está ${data.location.name} ahora`}
                  text="Condiciones meteorológicas actuales para ayudarte a organizar mejor tu visita."
                  type="weather"
                />

                {data.weather ? (
                  <div className="weather-card">
                    <div className="weather-main">
                      <span className="weather-icon">{weatherIcon(data.weather.code)}</span>
                      <div>
                        <small>Ahora</small>
                        <strong>{Math.round(data.weather.temperature)}°C</strong>
                        <p>{data.weather.label}</p>
                      </div>
                    </div>

                    <div className="weather-details">
                      <Info label="Sensación" value={`${Math.round(data.weather.apparent)}°C`} />
                      <Info label="Humedad" value={`${data.weather.humidity}%`} />
                      <Info label="Viento" value={`${data.weather.wind} km/h`} />
                      <Info label="Precipitación" value={`${data.weather.precipitation} mm`} />
                    </div>
                  </div>
                ) : (
                  <Empty text="No se pudo obtener el clima en este momento." />
                )}
              </section>

              <section id="gastronomia" className="section food-zone">
                <SectionTitle
                  eyebrow="GASTRONOMÍA LOCAL"
                  title={`Sabores que tienes que probar en ${data.location.name}`}
                  text={`Una selección de platos representativos de ${data.location.name} y su tradición regional.`}
                  type="food"
                />

                <div className="food-grid">
                  {data.dishes.map((dish, index) => (
                    <article className="food-card" key={dish.name}>
                      <div className="food-visual">
                        <b className="media-index">{String(index + 1).padStart(2, "0")}</b>
                        {dish.image ? (
                          <>
                            <img
                              src={dish.image}
                              alt={dish.name}
                              onError={(event) => {
                                event.currentTarget.style.display = "none";
                                event.currentTarget.nextElementSibling.style.display = "grid";
                              }}
                            />
                            <div className="fallback-hidden">
                              <FoodFallback name={dish.name} />
                            </div>
                          </>
                        ) : (
                          <FoodFallback name={dish.name} />
                        )}
                      </div>

                      <div className="food-body">
                        <span>SABOR LOCAL · RECOMENDADO</span>
                        <h3>{dish.name}</h3>
                        <p>{dish.desc}</p>

                        {dish.url && (
                          <a href={dish.url} target="_blank" rel="noreferrer">
                            Descubrir este plato ↗
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section id="lugares" className="section">
                <SectionTitle
                  eyebrow="LUGARES IMPERDIBLES"
                  title={`Lo mejor que puedes visitar en ${data.location.name}`}
                  text="Atractivos seleccionados por su importancia turística y cultural."
                  type="place"
                />

                <div className="places-grid">
                  {data.attractions.map((place, index) => (
                    <article className="place-card" key={place.name}>
                      <div className="place-image">
                        {place.image ? (
                          <>
                            <img
                              src={place.image}
                              alt={place.name}
                              onError={(event) => {
                                event.currentTarget.style.display = "none";
                                event.currentTarget.nextElementSibling.style.display = "grid";
                              }}
                            />
                            <div className="fallback-hidden">
                              <PlaceFallback name={place.name} />
                            </div>
                          </>
                        ) : (
                          <PlaceFallback name={place.name} />
                        )}
                        <b>{String(index + 1).padStart(2, "0")}</b>
                      </div>

                      <div className="place-body">
                        <small>RECOMENDADO</small>
                        <h3>{place.name}</h3>
                        <p>{place.extract || place.note}</p>

                        <div className="place-actions">
                          {place.url && (
                            <a href={place.url} target="_blank" rel="noreferrer">
                              Información
                            </a>
                          )}
                          <a
                            className="map-button"
                            href={place.mapsUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Ver ubicación ↗
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section id="moneda" className="section currency-section">
                <div className="currency-copy">
                  <div className="currency-heading-row">
                    <div>
                      <span className="section-eyebrow">CONVERSOR DE MONEDAS</span>
                      <h2>Convierte tu dinero antes de viajar</h2>
                    </div>
                    <div className="section-art money-art"><VisualIcon type="money" /></div>
                  </div>
                  <p>
                    Elige libremente la moneda de origen, la moneda de destino y el monto.
                    Puedes intercambiarlas en un solo clic.
                  </p>
                </div>

                <form className="converter" onSubmit={convert}>
                  <label>Monto</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />

                  <div className="currency-selects">
                    <div>
                      <label>De</label>
                      <select
                        value={fromCurrency}
                        onChange={(e) => {
                          setFromCurrency(e.target.value);
                          setConversion(null);
                        }}
                      >
                        {currencies.map((currency) => (
                          <option key={currency.code} value={currency.code}>
                            {currency.code} — {currency.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="button"
                      className="swap"
                      onClick={swapCurrencies}
                      title="Intercambiar monedas"
                    >
                      ⇄
                    </button>

                    <div>
                      <label>A</label>
                      <select
                        value={toCurrency}
                        onChange={(e) => {
                          setToCurrency(e.target.value);
                          setConversion(null);
                        }}
                      >
                        {currencies.map((currency) => (
                          <option key={currency.code} value={currency.code}>
                            {currency.code} — {currency.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button className="convert-button" disabled={converting}>
                    {converting ? "Calculando..." : "Convertir moneda"}
                  </button>

                  {conversionError && (
                    <p className="conversion-error">{conversionError}</p>
                  )}

                  {conversion && (
                    <div className="result">
                      <span>Resultado aproximado</span>
                      <strong>
                        {Number(conversion.result).toLocaleString("es-PE", {
                          maximumFractionDigits: 2
                        })}{" "}
                        {conversion.to}
                      </strong>
                      <p>
                        1 {conversion.from} = {Number(conversion.rate).toFixed(4)}{" "}
                        {conversion.to}
                      </p>
                    </div>
                  )}

                  <a
                    className="credit"
                    href="https://www.exchangerate-api.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Rates By Exchange Rate API
                  </a>
                </form>
              </section>
            </>
          )}
        </div>
      </main>

      <footer>
        <div className="footer">
          <strong>TRAVELFOOD</strong>
          <span>Clima, gastronomía, turismo y moneda en una sola experiencia.</span>
        </div>
        <p>Explora · saborea · descubre · viaja mejor informado</p>
      </footer>
    </div>
  );
}

function SectionTitle({ eyebrow, title, text, type }) {
  return (
    <div className="section-title">
      <div className="section-heading-copy">
        <span className="section-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={`section-art ${type || "place"}-art`}>
        <VisualIcon type={type || "place"} />
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="info">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Empty({ text }) {
  return <div className="empty">{text}</div>;
}
