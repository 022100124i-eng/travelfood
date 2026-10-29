const COUNTRIES = [
  { code: "PE", name: "Perú", flag: "🇵🇪", currency: "PEN", currencyName: "Sol peruano", cities: ["Cusco", "Lima", "Arequipa"] },
  { code: "CO", name: "Colombia", flag: "🇨🇴", currency: "COP", currencyName: "Peso colombiano", cities: ["Medellín", "Bogotá", "Cartagena"] },
  { code: "MX", name: "México", flag: "🇲🇽", currency: "MXN", currencyName: "Peso mexicano", cities: ["Ciudad de México", "Cancún", "Oaxaca"] },
  { code: "AR", name: "Argentina", flag: "🇦🇷", currency: "ARS", currencyName: "Peso argentino", cities: ["Buenos Aires", "Mendoza"] },
  { code: "BR", name: "Brasil", flag: "🇧🇷", currency: "BRL", currencyName: "Real brasileño", cities: ["Río de Janeiro", "São Paulo"] },
  { code: "ES", name: "España", flag: "🇪🇸", currency: "EUR", currencyName: "Euro", cities: ["Madrid", "Barcelona"] },
  { code: "FR", name: "Francia", flag: "🇫🇷", currency: "EUR", currencyName: "Euro", cities: ["París", "Lyon"] },
  { code: "IT", name: "Italia", flag: "🇮🇹", currency: "EUR", currencyName: "Euro", cities: ["Roma", "Venecia"] },
  { code: "JP", name: "Japón", flag: "🇯🇵", currency: "JPY", currencyName: "Yen japonés", cities: ["Tokio", "Kioto"] },
  { code: "KR", name: "Corea del Sur", flag: "🇰🇷", currency: "KRW", currencyName: "Won surcoreano", cities: ["Seúl", "Busan"] },
  { code: "US", name: "Estados Unidos", flag: "🇺🇸", currency: "USD", currencyName: "Dólar estadounidense", cities: ["Nueva York", "Miami"] },
  { code: "GB", name: "Reino Unido", flag: "🇬🇧", currency: "GBP", currencyName: "Libra esterlina", cities: ["Londres", "Edimburgo"] },
  { code: "TH", name: "Tailandia", flag: "🇹🇭", currency: "THB", currencyName: "Baht", cities: ["Bangkok", "Phuket"] }
];

const CURRENCIES = [
  { code: "PEN", name: "Sol peruano" },
  { code: "USD", name: "Dólar estadounidense" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "Libra esterlina" },
  { code: "JPY", name: "Yen japonés" },
  { code: "KRW", name: "Won surcoreano" },
  { code: "COP", name: "Peso colombiano" },
  { code: "MXN", name: "Peso mexicano" },
  { code: "ARS", name: "Peso argentino" },
  { code: "BRL", name: "Real brasileño" },
  { code: "THB", name: "Baht tailandés" },
  { code: "CAD", name: "Dólar canadiense" },
  { code: "AUD", name: "Dólar australiano" },
  { code: "CHF", name: "Franco suizo" },
  { code: "CNY", name: "Yuan chino" }
];

const CITY_GUIDES = {
  "PE|Cusco": {
    wikiTitle: "Cuzco",
    dishes: [
      { name: "Chiri uchu", emoji: "🌽", wikiTitle: "Chiri uchu", desc: "Plato festivo cusqueño que combina carnes, maíz, queso y otros productos andinos.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Chiriuchu.jpg", infoUrl: "https://es.wikipedia.org/wiki/Gastronom%C3%ADa_del_Cusco#Chiri_Uchu" },
      { name: "Cuy al horno", emoji: "🍽️", wikiTitle: "Cuy", desc: "Preparación tradicional andina muy asociada a Cusco, servida con papas y hierbas." },
      { name: "Adobo cusqueño", emoji: "🍲", wikiTitle: "Adobo", desc: "Guiso de cerdo marinado con chicha y especias, tradicional en desayunos dominicales." },
      { name: "Chairo", emoji: "🥣", wikiTitle: "Chairo", desc: "Sopa andina consistente preparada con carne, chuño, verduras y hierbas." }
    ],
    attractions: [
      { name: "Machu Picchu", wikiTitle: "Machu Picchu", note: "Ciudadela inca y uno de los principales destinos turísticos del Perú." },
      { name: "Sacsayhuamán", wikiTitle: "Sacsayhuamán", note: "Complejo arqueológico inca ubicado en las alturas de Cusco." },
      { name: "Qorikancha", wikiTitle: "Coricancha", note: "Antiguo templo inca dedicado al Sol, integrado al convento de Santo Domingo." },
      { name: "Plaza de Armas de Cusco", wikiTitle: "Plaza de Armas del Cuzco", note: "Centro histórico de la ciudad, rodeado de arquitectura colonial e iglesias.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/66/PLAZA_DE_ARMAS_DE_CUSCO.jpg", infoUrl: "https://es.wikipedia.org/wiki/Plaza_de_Armas_del_Cuzco" },
      { name: "Montaña de Siete Colores", wikiTitle: "Vinicunca", note: "Montaña de colores naturales ubicada en la región Cusco.", imageUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vinicunca.jpg?width=1400", infoUrl: "https://es.wikipedia.org/wiki/Vinicunca" },
      { name: "Ollantaytambo", wikiTitle: "Ollantaytambo", note: "Pueblo y complejo arqueológico del Valle Sagrado de los Incas." }
    ]
  },
  "PE|Lima": {
    wikiTitle: "Lima",
    dishes: [
      { name: "Ceviche", emoji: "🐟", wikiTitle: "Ceviche", desc: "Pescado fresco marinado con limón, ají y cebolla; uno de los platos más representativos de Lima." },
      { name: "Lomo saltado", emoji: "🥩", wikiTitle: "Lomo saltado", desc: "Salteado de carne, cebolla y tomate con sillao, papas fritas y arroz." },
      { name: "Anticuchos", emoji: "🍢", wikiTitle: "Anticucho", desc: "Brochetas de carne marinada y asada, muy populares en las calles limeñas." },
      { name: "Causa limeña", emoji: "🥔", wikiTitle: "Causa a la limeña", desc: "Preparación fría de papa amarilla sazonada, rellena de pollo, atún u otros ingredientes." }
    ],
    attractions: [
      { name: "Plaza Mayor de Lima", wikiTitle: "Plaza Mayor de Lima", note: "Corazón del centro histórico y punto fundacional de Lima." },
      { name: "Huaca Pucllana", wikiTitle: "Huaca Pucllana", note: "Centro ceremonial prehispánico ubicado en Miraflores." },
      { name: "Museo Larco", wikiTitle: "Museo Arqueológico Rafael Larco Herrera", note: "Museo dedicado al arte y culturas precolombinas del Perú." },
      { name: "Circuito Mágico del Agua", wikiTitle: "Circuito Mágico del Agua", note: "Parque de fuentes ornamentales iluminadas en el Parque de la Reserva." },
      { name: "Parque del Amor", wikiTitle: "Parque del Amor", note: "Mirador costero de Miraflores con vistas al océano Pacífico." }
    ]
  },
  "PE|Arequipa": {
    wikiTitle: "Arequipa",
    dishes: [
      { name: "Rocoto relleno", emoji: "🌶️", wikiTitle: "Rocoto relleno", desc: "Rocoto relleno de carne, especias y queso, horneado hasta gratinar." },
      { name: "Adobo arequipeño", emoji: "🍲", wikiTitle: "Adobo", desc: "Guiso de cerdo preparado con chicha, ají y especias, típico de Arequipa." },
      { name: "Chupe de camarones", emoji: "🦐", wikiTitle: "Chupe de camarones", desc: "Sopa cremosa de camarones con papa, leche, huevo y ají." },
      { name: "Solterito", emoji: "🥗", wikiTitle: "Solterito", desc: "Ensalada fresca con habas, choclo, queso, cebolla y aceitunas." }
    ],
    attractions: [
      { name: "Monasterio de Santa Catalina", wikiTitle: "Monasterio de Santa Catalina de Siena (Arequipa)", note: "Complejo religioso colonial de gran valor histórico y arquitectónico." },
      { name: "Plaza de Armas de Arequipa", wikiTitle: "Plaza de Armas de Arequipa", note: "Plaza principal rodeada de portales y edificios de sillar." },
      { name: "Museo Santuarios Andinos", wikiTitle: "Museo Santuarios Andinos", note: "Museo conocido por conservar a la momia Juanita." },
      { name: "Mirador de Yanahuara", wikiTitle: "Yanahuara", note: "Mirador tradicional con arcos de sillar y vistas a los volcanes." },
      { name: "Volcán Misti", wikiTitle: "Misti", note: "Volcán emblemático que domina el paisaje de Arequipa." }
    ]
  },
  "CO|Medellín": {
    wikiTitle: "Medellín",
    dishes: [
      { name: "Bandeja paisa", emoji: "🍛", wikiTitle: "Bandeja paisa", desc: "Plato abundante con frijoles, arroz, carne, chicharrón, huevo, plátano y aguacate." },
      { name: "Arepa paisa", emoji: "🫓", wikiTitle: "Arepa", desc: "Arepa de maíz sencilla que acompaña numerosas comidas antioqueñas." },
      { name: "Mondongo", emoji: "🥣", wikiTitle: "Mondongo", desc: "Sopa tradicional con callos, papa, verduras y condimentos." },
      { name: "Buñuelos", emoji: "🧀", wikiTitle: "Buñuelo", desc: "Bolas fritas de masa con queso, populares en Antioquia." }
    ],
    attractions: [
      { name: "Plaza Botero", wikiTitle: "Plaza Botero", note: "Espacio urbano con esculturas de Fernando Botero." },
      { name: "Museo de Antioquia", wikiTitle: "Museo de Antioquia", note: "Museo de arte e historia ubicado en el centro de Medellín." },
      { name: "Pueblito Paisa", wikiTitle: "Pueblito Paisa", note: "Representación de un pueblo tradicional antioqueño en el cerro Nutibara." },
      { name: "Parque Arví", wikiTitle: "Parque regional ecoturístico Arví", note: "Reserva natural y ecoturística conectada con Medellín por metrocable." },
      { name: "Comuna 13", wikiTitle: "Comuna 13 (Medellín)", note: "Zona conocida por su transformación urbana, arte callejero y escaleras eléctricas." }
    ]
  },
  "CO|Bogotá": {
    wikiTitle: "Bogotá",
    dishes: [
      { name: "Ajiaco santafereño", emoji: "🥣", wikiTitle: "Ajiaco", desc: "Sopa bogotana de pollo, distintas papas, mazorca y guascas." },
      { name: "Changua", emoji: "🥛", wikiTitle: "Changua", desc: "Sopa de leche y huevo consumida tradicionalmente en el desayuno." },
      { name: "Tamal bogotano", emoji: "🫔", wikiTitle: "Tamal", desc: "Masa de maíz con carnes y verduras envuelta en hoja." },
      { name: "Chocolate con queso", emoji: "☕", wikiTitle: "Chocolate caliente", desc: "Bebida caliente servida de forma tradicional con queso." }
    ],
    attractions: [
      { name: "Monserrate", wikiTitle: "Cerro de Monserrate", note: "Cerro emblemático con santuario y vistas panorámicas de Bogotá." },
      { name: "Museo del Oro", wikiTitle: "Museo del Oro", note: "Museo con una de las colecciones de orfebrería prehispánica más importantes." },
      { name: "La Candelaria", wikiTitle: "La Candelaria", note: "Barrio histórico con calles coloniales, museos y espacios culturales." },
      { name: "Plaza de Bolívar", wikiTitle: "Plaza de Bolívar (Bogotá)", note: "Principal plaza cívica del centro histórico." },
      { name: "Museo Botero", wikiTitle: "Museo Botero", note: "Museo con obras de Fernando Botero y su colección donada." }
    ]
  },
  "CO|Cartagena": {
    wikiTitle: "Cartagena de Indias",
    dishes: [
      { name: "Arroz con coco", emoji: "🥥", wikiTitle: "Arroz con coco", desc: "Arroz caribeño cocido con coco, habitual como acompañamiento de pescados." },
      { name: "Posta cartagenera", emoji: "🥩", wikiTitle: "Posta negra", desc: "Carne de res cocinada en una salsa oscura, dulce y especiada." },
      { name: "Arepa de huevo", emoji: "🫓", wikiTitle: "Arepa de huevo", desc: "Arepa frita rellena con huevo, típica de la costa Caribe colombiana." },
      { name: "Pescado frito", emoji: "🐟", wikiTitle: "Pescado frito", desc: "Pescado entero frito acompañado con arroz con coco y patacones." }
    ],
    attractions: [
      { name: "Ciudad amurallada", wikiTitle: "Centro histórico de Cartagena de Indias", note: "Centro histórico colonial rodeado de murallas." },
      { name: "Castillo San Felipe de Barajas", wikiTitle: "Castillo San Felipe de Barajas", note: "Fortaleza colonial ubicada sobre el cerro de San Lázaro." },
      { name: "Torre del Reloj", wikiTitle: "Torre del Reloj (Cartagena)", note: "Entrada histórica a la ciudad amurallada." },
      { name: "Getsemaní", wikiTitle: "Getsemaní (Cartagena)", note: "Barrio histórico conocido por sus plazas, vida local y arte urbano." },
      { name: "Islas del Rosario", wikiTitle: "Islas del Rosario", note: "Archipiélago caribeño cercano a Cartagena, famoso por sus playas." }
    ]
  },
  "MX|Ciudad de México": {
    wikiTitle: "Ciudad de México",
    dishes: [
      { name: "Tacos al pastor", emoji: "🌮", wikiTitle: "Taco al pastor", desc: "Tacos de cerdo adobado con piña, cebolla y cilantro." },
      { name: "Tlacoyos", emoji: "🫓", wikiTitle: "Tlacoyo", desc: "Masa de maíz rellena, cocida en comal y servida con nopales y salsa." },
      { name: "Torta de tamal", emoji: "🥖", wikiTitle: "Guajolota", desc: "Tamal colocado dentro de un bolillo, desayuno popular de la ciudad." },
      { name: "Churros", emoji: "🥨", wikiTitle: "Churro", desc: "Masa frita espolvoreada con azúcar, habitual con chocolate caliente." }
    ],
    attractions: [
      { name: "Zócalo", wikiTitle: "Plaza de la Constitución (Ciudad de México)", note: "Gran plaza central del centro histórico." },
      { name: "Palacio de Bellas Artes", wikiTitle: "Palacio de Bellas Artes (Ciudad de México)", note: "Uno de los principales recintos culturales y arquitectónicos de México." },
      { name: "Museo Frida Kahlo", wikiTitle: "Museo Frida Kahlo", note: "Casa museo dedicada a Frida Kahlo en Coyoacán." },
      { name: "Bosque de Chapultepec", wikiTitle: "Bosque de Chapultepec", note: "Gran parque urbano con museos, lagos y el Castillo de Chapultepec." },
      { name: "Templo Mayor", wikiTitle: "Templo Mayor", note: "Zona arqueológica mexica situada junto a la catedral." }
    ]
  },
  "MX|Cancún": {
    wikiTitle: "Cancún",
    dishes: [
      { name: "Cochinita pibil", emoji: "🍖", wikiTitle: "Cochinita pibil", desc: "Cerdo marinado con achiote y cítricos, cocinado lentamente." },
      { name: "Panuchos", emoji: "🫓", wikiTitle: "Panucho", desc: "Tortilla rellena de frijol y acompañada con carne y vegetales." },
      { name: "Sopa de lima", emoji: "🥣", wikiTitle: "Sopa de lima", desc: "Sopa yucateca de caldo de pollo con lima y tiras de tortilla." },
      { name: "Pescado tikin xic", emoji: "🐟", wikiTitle: "Tikin xic", desc: "Pescado marinado con achiote y cítricos, tradicional de la península de Yucatán." }
    ],
    attractions: [
      { name: "Playa Delfines", wikiTitle: "Playa Delfines", note: "Una de las playas públicas más conocidas de Cancún." },
      { name: "Museo Maya de Cancún", wikiTitle: "Museo Maya de Cancún", note: "Museo dedicado a la cultura maya y al patrimonio arqueológico regional." },
      { name: "Zona arqueológica El Rey", wikiTitle: "El Rey (zona arqueológica)", note: "Sitio arqueológico maya dentro de la zona hotelera." },
      { name: "Isla Mujeres", wikiTitle: "Isla Mujeres", note: "Isla cercana a Cancún conocida por playas y actividades acuáticas." }
    ]
  },
  "MX|Oaxaca": {
    wikiTitle: "Oaxaca de Juárez",
    dishes: [
      { name: "Tlayudas", emoji: "🫓", wikiTitle: "Tlayuda", desc: "Gran tortilla tostada con frijol, quesillo, verduras y carne." },
      { name: "Mole negro", emoji: "🍗", wikiTitle: "Mole (salsa)", desc: "Salsa compleja de chiles y especias, una de las especialidades de Oaxaca." },
      { name: "Memelas", emoji: "🌽", wikiTitle: "Memela", desc: "Tortillas gruesas con asiento, frijol, queso y salsa." },
      { name: "Tejate", emoji: "🥤", wikiTitle: "Tejate", desc: "Bebida tradicional de maíz y cacao de origen prehispánico." }
    ],
    attractions: [
      { name: "Templo de Santo Domingo", wikiTitle: "Templo de Santo Domingo de Guzmán (Oaxaca)", note: "Complejo religioso barroco emblemático del centro histórico." },
      { name: "Monte Albán", wikiTitle: "Monte Albán", note: "Importante ciudad arqueológica zapoteca en las afueras de Oaxaca." },
      { name: "Zócalo de Oaxaca", wikiTitle: "Oaxaca de Juárez", note: "Centro de la vida urbana y cultural de Oaxaca." },
      { name: "Hierve el Agua", wikiTitle: "Hierve el Agua", note: "Formaciones minerales y cascadas petrificadas en la región de Oaxaca." }
    ]
  },
  "AR|Buenos Aires": {
    wikiTitle: "Buenos Aires",
    dishes: [
      { name: "Parrillada", emoji: "🥩", wikiTitle: "Asado", desc: "Selección de carnes y achuras cocinadas a la parrilla." },
      { name: "Milanesa napolitana", emoji: "🍽️", wikiTitle: "Milanesa a la napolitana", desc: "Milanesa cubierta con salsa de tomate, jamón y queso." },
      { name: "Fugazzeta", emoji: "🍕", wikiTitle: "Fugazza", desc: "Pizza porteña rellena de queso y cubierta con abundante cebolla." },
      { name: "Empanadas", emoji: "🥟", wikiTitle: "Empanada", desc: "Masa rellena de carne, pollo, jamón y queso u otras variantes." }
    ],
    attractions: [
      { name: "Obelisco", wikiTitle: "Obelisco de Buenos Aires", note: "Monumento emblemático ubicado en la avenida 9 de Julio." },
      { name: "Casa Rosada", wikiTitle: "Casa Rosada", note: "Sede del Poder Ejecutivo Nacional en Plaza de Mayo." },
      { name: "Teatro Colón", wikiTitle: "Teatro Colón", note: "Uno de los teatros de ópera más reconocidos del mundo." },
      { name: "Caminito", wikiTitle: "Caminito", note: "Calle museo colorida del barrio de La Boca." },
      { name: "Cementerio de la Recoleta", wikiTitle: "Cementerio de la Recoleta", note: "Cementerio histórico destacado por sus mausoleos y esculturas." }
    ]
  },
  "AR|Mendoza": {
    wikiTitle: "Mendoza (Argentina)",
    dishes: [
      { name: "Empanadas mendocinas", emoji: "🥟", wikiTitle: "Empanada", desc: "Empanadas al horno tradicionalmente rellenas de carne y cebolla." },
      { name: "Asado", emoji: "🥩", wikiTitle: "Asado", desc: "Carnes a la parrilla, acompañadas frecuentemente con vino mendocino." },
      { name: "Chivito", emoji: "🍖", wikiTitle: "Carne de cabra", desc: "Cabrito asado o al horno, consumido en Cuyo." },
      { name: "Tortitas mendocinas", emoji: "🥨", wikiTitle: "Tortita mendocina", desc: "Panecillos salados tradicionales que acompañan el mate." }
    ],
    attractions: [
      { name: "Parque General San Martín", wikiTitle: "Parque General San Martín (Mendoza)", note: "Gran parque urbano y uno de los principales espacios verdes de Mendoza." },
      { name: "Cerro de la Gloria", wikiTitle: "Cerro de la Gloria", note: "Cerro con el monumento al Ejército de los Andes." },
      { name: "Plaza Independencia", wikiTitle: "Plaza Independencia (Mendoza)", note: "Plaza principal ubicada en el centro de Mendoza." },
      { name: "Museo del Área Fundacional", wikiTitle: "Área Fundacional de Mendoza", note: "Zona histórica relacionada con la antigua ciudad de Mendoza." }
    ]
  },
  "BR|Río de Janeiro": {
    wikiTitle: "Río de Janeiro",
    dishes: [
      { name: "Feijoada", emoji: "🍲", wikiTitle: "Feijoada", desc: "Guiso de frijoles negros y carnes, muy ligado a la cocina carioca." },
      { name: "Biscoito Globo", emoji: "🥨", wikiTitle: "Biscoito de polvilho", desc: "Snack ligero de almidón de mandioca popular en las playas de Río." },
      { name: "Filé Oswaldo Aranha", emoji: "🥩", wikiTitle: "Filé à Oswaldo Aranha", desc: "Filete con ajo frito, arroz, farofa y papas portuguesas." },
      { name: "Mate gelado", emoji: "🥤", wikiTitle: "Mate (infusión)", desc: "Bebida fría de mate muy popular en las playas cariocas." }
    ],
    attractions: [
      { name: "Cristo Redentor", wikiTitle: "Cristo Redentor", note: "Monumento en la cima del Corcovado y símbolo de Río de Janeiro." },
      { name: "Pan de Azúcar", wikiTitle: "Pan de Azúcar (Brasil)", note: "Morro con teleférico y vistas panorámicas de la bahía." },
      { name: "Copacabana", wikiTitle: "Copacabana (Río de Janeiro)", note: "Barrio y playa mundialmente conocidos." },
      { name: "Escalera de Selarón", wikiTitle: "Escalera de Selarón", note: "Escalera artística cubierta con azulejos de numerosos países." },
      { name: "Estadio Maracaná", wikiTitle: "Estadio de Maracaná", note: "Estadio histórico del fútbol brasileño." }
    ]
  },
  "BR|São Paulo": {
    wikiTitle: "São Paulo",
    dishes: [
      { name: "Virado à paulista", emoji: "🍛", wikiTitle: "Virado", desc: "Plato con frijoles, arroz, bistec, huevo, couve y otros acompañamientos." },
      { name: "Pastel", emoji: "🥟", wikiTitle: "Pastel (gastronomía)", desc: "Masa frita rellena, muy popular en ferias y mercados paulistas." },
      { name: "Sanduíche de mortadela", emoji: "🥪", wikiTitle: "Mortadela", desc: "Sándwich abundante de mortadela, famoso en el Mercado Municipal." },
      { name: "Coxinha", emoji: "🍗", wikiTitle: "Coxinha", desc: "Masa frita rellena de pollo, uno de los snacks más populares de Brasil." }
    ],
    attractions: [
      { name: "Museo de Arte de São Paulo", wikiTitle: "Museo de Arte de São Paulo", note: "Museo de arte ubicado en la avenida Paulista." },
      { name: "Parque Ibirapuera", wikiTitle: "Parque Ibirapuera", note: "Gran parque urbano con espacios culturales y recreativos." },
      { name: "Mercado Municipal de São Paulo", wikiTitle: "Mercado Municipal de São Paulo", note: "Mercado histórico famoso por su gastronomía." },
      { name: "Catedral Metropolitana de São Paulo", wikiTitle: "Catedral Metropolitana de São Paulo", note: "Catedral neogótica ubicada en la Praça da Sé." },
      { name: "Beco do Batman", wikiTitle: "Beco do Batman", note: "Callejón conocido por sus murales y arte urbano." }
    ]
  },
  "ES|Madrid": {
    wikiTitle: "Madrid",
    dishes: [
      { name: "Cocido madrileño", emoji: "🍲", wikiTitle: "Cocido madrileño", desc: "Guiso de garbanzos, carnes y verduras servido tradicionalmente en varios vuelcos." },
      { name: "Bocadillo de calamares", emoji: "🥖", wikiTitle: "Bocadillo de calamares", desc: "Bocadillo con calamares fritos, muy ligado al centro de Madrid." },
      { name: "Callos a la madrileña", emoji: "🥘", wikiTitle: "Callos a la madrileña", desc: "Guiso intenso de callos con chorizo y pimentón." },
      { name: "Churros con chocolate", emoji: "🍫", wikiTitle: "Churro", desc: "Churros acompañados de chocolate caliente espeso." }
    ],
    attractions: [
      { name: "Museo del Prado", wikiTitle: "Museo del Prado", note: "Uno de los museos de arte más importantes del mundo." },
      { name: "Palacio Real de Madrid", wikiTitle: "Palacio Real de Madrid", note: "Residencia oficial de la monarquía española para actos de Estado." },
      { name: "Parque del Retiro", wikiTitle: "Parque del Retiro de Madrid", note: "Parque histórico con jardines, monumentos y el Palacio de Cristal." },
      { name: "Plaza Mayor", wikiTitle: "Plaza Mayor de Madrid", note: "Plaza porticada histórica en el centro de Madrid." },
      { name: "Gran Vía", wikiTitle: "Gran Vía", note: "Avenida emblemática conocida por arquitectura, teatros y comercios." }
    ]
  },
  "ES|Barcelona": {
    wikiTitle: "Barcelona",
    dishes: [
      { name: "Pa amb tomàquet", emoji: "🍅", wikiTitle: "Pa amb tomàquet", desc: "Pan frotado con tomate, aceite de oliva y sal, clásico de la cocina catalana." },
      { name: "Crema catalana", emoji: "🍮", wikiTitle: "Crema catalana", desc: "Postre de crema aromatizada con una capa de azúcar caramelizado." },
      { name: "Escalivada", emoji: "🫑", wikiTitle: "Escalivada", desc: "Verduras asadas como pimiento, berenjena y cebolla, servidas con aceite de oliva." },
      { name: "Bombas de la Barceloneta", emoji: "🥔", wikiTitle: "Bomba (tapa)", desc: "Bolas de papa rellenas de carne, fritas y servidas con salsas." }
    ],
    attractions: [
      { name: "Sagrada Familia", wikiTitle: "Templo Expiatorio de la Sagrada Familia", note: "Basílica diseñada por Antoni Gaudí y símbolo de Barcelona." },
      { name: "Parque Güell", wikiTitle: "Parque Güell", note: "Parque modernista diseñado por Gaudí." },
      { name: "Casa Batlló", wikiTitle: "Casa Batlló", note: "Edificio modernista de Gaudí en el paseo de Gracia." },
      { name: "Barrio Gótico", wikiTitle: "Barrio Gótico de Barcelona", note: "Núcleo histórico con calles medievales y plazas." },
      { name: "La Rambla", wikiTitle: "La Rambla", note: "Paseo peatonal emblemático del centro de Barcelona." }
    ]
  },
  "FR|París": {
    wikiTitle: "París",
    dishes: [
      { name: "Croque-monsieur", emoji: "🥪", wikiTitle: "Croque-monsieur", desc: "Sándwich caliente de jamón y queso gratinado." },
      { name: "Soupe à l'oignon", emoji: "🧅", wikiTitle: "Sopa de cebolla", desc: "Sopa de cebolla caramelizada gratinada con pan y queso." },
      { name: "Croissant", emoji: "🥐", wikiTitle: "Croissant", desc: "Bollería hojaldrada de mantequilla habitual en desayunos parisinos." },
      { name: "Macaron", emoji: "🍪", wikiTitle: "Macaron", desc: "Pequeño dulce de almendra relleno, muy asociado a la pastelería parisina." }
    ],
    attractions: [
      { name: "Torre Eiffel", wikiTitle: "Torre Eiffel", note: "Monumento de hierro y uno de los símbolos más reconocibles de París." },
      { name: "Museo del Louvre", wikiTitle: "Museo del Louvre", note: "Museo de arte e historia ubicado en un antiguo palacio real." },
      { name: "Catedral de Notre Dame", wikiTitle: "Catedral de Notre Dame (París)", note: "Catedral gótica situada en la Île de la Cité." },
      { name: "Arco de Triunfo", wikiTitle: "Arco de Triunfo de París", note: "Monumento situado en la plaza Charles de Gaulle." },
      { name: "Montmartre", wikiTitle: "Montmartre", note: "Barrio bohemio conocido por sus calles, artistas y la basílica del Sacré-Cœur." }
    ]
  },
  "FR|Lyon": {
    wikiTitle: "Lyon",
    dishes: [
      { name: "Quenelles", emoji: "🍽️", wikiTitle: "Quenelle", desc: "Preparación suave a base de masa y pescado o carne, típica de Lyon." },
      { name: "Salade lyonnaise", emoji: "🥗", wikiTitle: "Ensalada lionesa", desc: "Ensalada con tocino, crutones y huevo escalfado." },
      { name: "Cervelle de canut", emoji: "🧀", wikiTitle: "Cervelle de canut", desc: "Queso fresco sazonado con hierbas, chalota y vinagre." },
      { name: "Tarte aux pralines", emoji: "🥧", wikiTitle: "Praliné", desc: "Tarta dulce preparada con pralinés rosados, especialidad de Lyon." }
    ],
    attractions: [
      { name: "Basílica de Notre-Dame de Fourvière", wikiTitle: "Basílica Notre-Dame de Fourvière", note: "Basílica en una colina con vistas panorámicas de Lyon." },
      { name: "Vieux Lyon", wikiTitle: "Vieux Lyon", note: "Casco histórico renacentista con traboules y calles antiguas." },
      { name: "Parque de la Tête d'Or", wikiTitle: "Parque de la Tête d'Or", note: "Gran parque urbano con lago, jardines y zoológico." },
      { name: "Place Bellecour", wikiTitle: "Place Bellecour", note: "Una de las plazas peatonales más grandes de Europa." }
    ]
  },
  "IT|Roma": {
    wikiTitle: "Roma",
    dishes: [
      { name: "Carbonara", emoji: "🍝", wikiTitle: "Carbonara", desc: "Pasta romana con huevo, pecorino, guanciale y pimienta." },
      { name: "Cacio e pepe", emoji: "🍝", wikiTitle: "Cacio e pepe", desc: "Pasta con queso pecorino y pimienta negra." },
      { name: "Amatriciana", emoji: "🍝", wikiTitle: "Amatriciana", desc: "Pasta con tomate, guanciale y pecorino." },
      { name: "Supplì", emoji: "🍚", wikiTitle: "Supplì", desc: "Croquetas romanas de arroz rellenas, normalmente con mozzarella." }
    ],
    attractions: [
      { name: "Coliseo", wikiTitle: "Coliseo", note: "Anfiteatro romano y uno de los símbolos de la ciudad." },
      { name: "Fontana di Trevi", wikiTitle: "Fontana di Trevi", note: "Fuente barroca monumental en el centro de Roma." },
      { name: "Panteón", wikiTitle: "Panteón de Agripa", note: "Templo romano excepcionalmente conservado." },
      { name: "Foro Romano", wikiTitle: "Foro Romano", note: "Zona arqueológica del antiguo centro político de Roma." },
      { name: "Museos Vaticanos", wikiTitle: "Museos Vaticanos", note: "Colecciones de arte de la Ciudad del Vaticano, junto a Roma." }
    ]
  },
  "IT|Venecia": {
    wikiTitle: "Venecia",
    dishes: [
      { name: "Sarde in saor", emoji: "🐟", wikiTitle: "Sarde in saor", desc: "Sardinas marinadas con cebolla, vinagre, pasas y piñones." },
      { name: "Baccalà mantecato", emoji: "🐟", wikiTitle: "Baccalà mantecato", desc: "Crema de bacalao servida normalmente sobre polenta o pan." },
      { name: "Cicchetti", emoji: "🍢", wikiTitle: "Cicchetti", desc: "Pequeñas tapas venecianas servidas en bares tradicionales." },
      { name: "Risi e bisi", emoji: "🍚", wikiTitle: "Risi e bisi", desc: "Arroz cremoso con guisantes, clásico de la cocina veneciana." }
    ],
    attractions: [
      { name: "Plaza de San Marcos", wikiTitle: "Plaza de San Marcos", note: "Principal plaza de Venecia y centro monumental de la ciudad." },
      { name: "Basílica de San Marcos", wikiTitle: "Basílica de San Marcos", note: "Basílica famosa por sus mosaicos y arquitectura bizantina." },
      { name: "Puente de Rialto", wikiTitle: "Puente de Rialto", note: "Puente histórico sobre el Gran Canal." },
      { name: "Palacio Ducal", wikiTitle: "Palacio Ducal de Venecia", note: "Antigua residencia de los dogos de Venecia." },
      { name: "Gran Canal", wikiTitle: "Gran Canal de Venecia", note: "Principal vía acuática de Venecia." }
    ]
  },
  "JP|Tokio": {
    wikiTitle: "Tokio",
    dishes: [
      { name: "Sushi Edomae", emoji: "🍣", wikiTitle: "Sushi", desc: "Estilo de sushi desarrollado históricamente en Edo, actual Tokio." },
      { name: "Monjayaki", emoji: "🥞", wikiTitle: "Monjayaki", desc: "Masa salada cocinada en plancha, especialidad de Tokio." },
      { name: "Tendon", emoji: "🍤", wikiTitle: "Tendón (gastronomía)", desc: "Tazón de arroz cubierto con tempura y salsa." },
      { name: "Tokyo ramen", emoji: "🍜", wikiTitle: "Ramen", desc: "Ramen estilo Tokio, normalmente con caldo de pollo y soja." }
    ],
    attractions: [
      { name: "Templo Sensō-ji", wikiTitle: "Sensō-ji", note: "Templo budista histórico del barrio de Asakusa." },
      { name: "Santuario Meiji", wikiTitle: "Santuario Meiji", note: "Santuario sintoísta rodeado por un bosque urbano." },
      { name: "Tokyo Skytree", wikiTitle: "Tokyo Skytree", note: "Torre de telecomunicaciones con miradores panorámicos." },
      { name: "Cruce de Shibuya", wikiTitle: "Cruce de Shibuya", note: "Uno de los cruces peatonales más conocidos del mundo." },
      { name: "Torre de Tokio", wikiTitle: "Torre de Tokio", note: "Torre de comunicaciones inspirada en la Torre Eiffel." }
    ]
  },
  "JP|Kioto": {
    wikiTitle: "Kioto",
    dishes: [
      { name: "Kaiseki", emoji: "🍱", wikiTitle: "Kaiseki", desc: "Menú tradicional japonés de múltiples platos, muy ligado a Kioto." },
      { name: "Yudofu", emoji: "🍲", wikiTitle: "Tofu", desc: "Tofu hervido suavemente y servido con condimentos." },
      { name: "Nishin soba", emoji: "🍜", wikiTitle: "Soba", desc: "Fideos soba calientes acompañados con arenque dulce." },
      { name: "Yatsuhashi", emoji: "🍡", wikiTitle: "Yatsuhashi", desc: "Dulce tradicional de Kioto elaborado con arroz y canela." }
    ],
    attractions: [
      { name: "Fushimi Inari-taisha", wikiTitle: "Fushimi Inari-taisha", note: "Santuario famoso por sus miles de torii rojos." },
      { name: "Kiyomizu-dera", wikiTitle: "Kiyomizu-dera", note: "Templo budista conocido por su gran terraza de madera." },
      { name: "Kinkaku-ji", wikiTitle: "Kinkaku-ji", note: "Templo del Pabellón Dorado, uno de los iconos de Kioto." },
      { name: "Arashiyama", wikiTitle: "Arashiyama", note: "Zona escénica conocida por su bosque de bambú." },
      { name: "Gion", wikiTitle: "Gion", note: "Distrito histórico de casas de té y cultura tradicional." }
    ]
  },
  "KR|Seúl": {
    wikiTitle: "Seúl",
    dishes: [
      { name: "Tteokbokki", emoji: "🌶️", wikiTitle: "Tteokbokki", desc: "Pasteles de arroz en salsa picante y dulce, muy populares como comida callejera." },
      { name: "Samgyeopsal", emoji: "🥓", wikiTitle: "Samgyeopsal", desc: "Panceta de cerdo asada en mesa y acompañada con vegetales." },
      { name: "Gimbap", emoji: "🍙", wikiTitle: "Gimbap", desc: "Rollos de arroz y diversos ingredientes envueltos en alga." },
      { name: "Seolleongtang", emoji: "🥣", wikiTitle: "Seolleongtang", desc: "Sopa blanca de huesos de res, tradicional de Seúl." }
    ],
    attractions: [
      { name: "Palacio Gyeongbokgung", wikiTitle: "Gyeongbokgung", note: "Principal palacio de la dinastía Joseon en Seúl." },
      { name: "N Seoul Tower", wikiTitle: "N Seoul Tower", note: "Torre de observación situada en la montaña Namsan." },
      { name: "Bukchon Hanok Village", wikiTitle: "Bukchon Hanok Village", note: "Barrio de casas tradicionales coreanas." },
      { name: "Palacio Changdeokgung", wikiTitle: "Changdeokgung", note: "Palacio real reconocido por sus jardines." },
      { name: "Myeong-dong", wikiTitle: "Myeong-dong", note: "Distrito comercial y gastronómico muy concurrido." }
    ]
  },
  "KR|Busan": {
    wikiTitle: "Busan",
    dishes: [
      { name: "Dwaeji gukbap", emoji: "🥣", wikiTitle: "Gukbap", desc: "Sopa de cerdo con arroz, considerada una especialidad de Busan." },
      { name: "Milmyeon", emoji: "🍜", wikiTitle: "Milmyeon", desc: "Fideos de trigo servidos fríos, originarios de Busan." },
      { name: "Eomuk", emoji: "🍢", wikiTitle: "Eomuk", desc: "Pastel de pescado, muy popular en los mercados de Busan." },
      { name: "Ssiat hotteok", emoji: "🥞", wikiTitle: "Hotteok", desc: "Panqueque dulce relleno con semillas, versión típica de Busan." }
    ],
    attractions: [
      { name: "Playa Haeundae", wikiTitle: "Haeundae", note: "Una de las playas urbanas más famosas de Corea del Sur." },
      { name: "Gamcheon Culture Village", wikiTitle: "Gamcheon Culture Village", note: "Barrio colorido en las laderas de Busan." },
      { name: "Templo Haedong Yonggungsa", wikiTitle: "Haedong Yonggungsa", note: "Templo budista costero frente al mar." },
      { name: "Mercado Jagalchi", wikiTitle: "Mercado de Jagalchi", note: "Gran mercado especializado en pescados y mariscos." },
      { name: "Playa Gwangalli", wikiTitle: "Gwangalli Beach", note: "Playa conocida por sus vistas al puente Gwangan." }
    ]
  },
  "US|Nueva York": {
    wikiTitle: "Nueva York",
    dishes: [
      { name: "Pizza estilo Nueva York", emoji: "🍕", wikiTitle: "Pizza estilo Nueva York", desc: "Pizza de masa fina con porciones grandes y flexibles." },
      { name: "Bagel", emoji: "🥯", wikiTitle: "Bagel", desc: "Pan en forma de anillo, muy asociado a los desayunos neoyorquinos." },
      { name: "New York cheesecake", emoji: "🍰", wikiTitle: "Tarta de queso", desc: "Tarta de queso densa y cremosa, emblemática de la ciudad." },
      { name: "Pastrami sandwich", emoji: "🥪", wikiTitle: "Pastrami", desc: "Sándwich abundante de pastrami, clásico de los delicatessen." }
    ],
    attractions: [
      { name: "Estatua de la Libertad", wikiTitle: "Estatua de la Libertad", note: "Monumento símbolo de Nueva York y de Estados Unidos." },
      { name: "Central Park", wikiTitle: "Central Park", note: "Gran parque urbano en Manhattan." },
      { name: "Times Square", wikiTitle: "Times Square", note: "Intersección famosa por sus pantallas luminosas y teatros." },
      { name: "Empire State Building", wikiTitle: "Empire State Building", note: "Rascacielos art déco con observatorios panorámicos." },
      { name: "Puente de Brooklyn", wikiTitle: "Puente de Brooklyn", note: "Puente histórico que conecta Manhattan y Brooklyn." }
    ]
  },
  "US|Miami": {
    wikiTitle: "Miami",
    dishes: [
      { name: "Cuban sandwich", emoji: "🥪", wikiTitle: "Sándwich cubano", desc: "Sándwich prensado de cerdo, jamón, queso, pepinillos y mostaza." },
      { name: "Stone crab", emoji: "🦀", wikiTitle: "Cangrejo de piedra", desc: "Pinzas de cangrejo de piedra, especialidad clásica del sur de Florida." },
      { name: "Croquetas", emoji: "🥟", wikiTitle: "Croqueta", desc: "Bocados fritos muy presentes en la gastronomía cubano-miamense." },
      { name: "Key lime pie", emoji: "🥧", wikiTitle: "Key lime pie", desc: "Tarta cítrica del sur de Florida, muy popular en Miami." }
    ],
    attractions: [
      { name: "South Beach", wikiTitle: "South Beach", note: "Zona de playa famosa por su ambiente y arquitectura art déco." },
      { name: "Distrito histórico Art Déco", wikiTitle: "Miami Beach Architectural District", note: "Conjunto de edificios art déco en Miami Beach." },
      { name: "Wynwood Walls", wikiTitle: "Wynwood", note: "Distrito conocido por murales, galerías y arte urbano." },
      { name: "Vizcaya Museum and Gardens", wikiTitle: "Villa Vizcaya", note: "Mansión histórica con jardines frente a la bahía." },
      { name: "Little Havana", wikiTitle: "Little Havana", note: "Barrio de fuerte identidad cubana y vida cultural." }
    ]
  },
  "GB|Londres": {
    wikiTitle: "Londres",
    dishes: [
      { name: "Fish and chips", emoji: "🐟", wikiTitle: "Fish and chips", desc: "Pescado rebozado y papas fritas, uno de los platos británicos más conocidos." },
      { name: "Pie and mash", emoji: "🥧", wikiTitle: "Pie and mash", desc: "Pastel de carne con puré, plato tradicional del este de Londres." },
      { name: "Full English breakfast", emoji: "🍳", wikiTitle: "Desayuno inglés", desc: "Desayuno abundante con huevo, salchicha, frijoles y otros acompañamientos." },
      { name: "Sunday roast", emoji: "🍖", wikiTitle: "Sunday roast", desc: "Asado servido con papas, verduras y gravy." }
    ],
    attractions: [
      { name: "Big Ben", wikiTitle: "Big Ben", note: "Torre del reloj del Palacio de Westminster." },
      { name: "Torre de Londres", wikiTitle: "Torre de Londres", note: "Fortaleza histórica junto al río Támesis." },
      { name: "Museo Británico", wikiTitle: "Museo Británico", note: "Museo con colecciones de historia, arte y arqueología." },
      { name: "Palacio de Buckingham", wikiTitle: "Palacio de Buckingham", note: "Residencia oficial del monarca británico en Londres." },
      { name: "London Eye", wikiTitle: "London Eye", note: "Gran noria de observación junto al Támesis." }
    ]
  },
  "GB|Edimburgo": {
    wikiTitle: "Edimburgo",
    dishes: [
      { name: "Haggis", emoji: "🍽️", wikiTitle: "Haggis", desc: "Plato escocés elaborado con vísceras, avena y especias." },
      { name: "Cullen skink", emoji: "🥣", wikiTitle: "Cullen skink", desc: "Sopa cremosa escocesa de pescado ahumado, papa y cebolla." },
      { name: "Scotch pie", emoji: "🥧", wikiTitle: "Scotch pie", desc: "Pastel individual de carne dentro de una masa firme." },
      { name: "Cranachan", emoji: "🍓", wikiTitle: "Cranachan", desc: "Postre escocés con crema, avena, frambuesas y whisky." }
    ],
    attractions: [
      { name: "Castillo de Edimburgo", wikiTitle: "Castillo de Edimburgo", note: "Fortaleza histórica situada sobre Castle Rock." },
      { name: "Royal Mile", wikiTitle: "Royal Mile", note: "Eje histórico que conecta el castillo con Holyroodhouse." },
      { name: "Arthur's Seat", wikiTitle: "Arthur's Seat", note: "Antiguo volcán y mirador natural sobre Edimburgo." },
      { name: "Palacio de Holyrood", wikiTitle: "Palacio de Holyrood", note: "Residencia real al final de la Royal Mile." }
    ]
  },
  "TH|Bangkok": {
    wikiTitle: "Bangkok",
    dishes: [
      { name: "Pad thai", emoji: "🍜", wikiTitle: "Pad thai", desc: "Fideos de arroz salteados con tamarindo, huevo y distintos acompañamientos." },
      { name: "Tom yum goong", emoji: "🥣", wikiTitle: "Tom yum", desc: "Sopa picante y ácida con hierbas aromáticas y camarones." },
      { name: "Boat noodles", emoji: "🍜", wikiTitle: "Boat noodles", desc: "Tazón de fideos de sabor intenso, asociado a los canales de Bangkok." },
      { name: "Mango sticky rice", emoji: "🥭", wikiTitle: "Mango sticky rice", desc: "Arroz glutinoso dulce con leche de coco y mango." }
    ],
    attractions: [
      { name: "Gran Palacio", wikiTitle: "Gran Palacio de Bangkok", note: "Complejo real y uno de los principales monumentos de Bangkok." },
      { name: "Wat Arun", wikiTitle: "Wat Arun", note: "Templo budista junto al río Chao Phraya." },
      { name: "Wat Pho", wikiTitle: "Wat Pho", note: "Templo famoso por su gran Buda reclinado." },
      { name: "Mercado de Chatuchak", wikiTitle: "Mercado de Chatuchak", note: "Gran mercado de fin de semana con miles de puestos." },
      { name: "Casa de Jim Thompson", wikiTitle: "Casa de Jim Thompson", note: "Museo dedicado al arte y la arquitectura tradicional tailandesa." }
    ]
  },
  "TH|Phuket": {
    wikiTitle: "Phuket",
    dishes: [
      { name: "Hokkien mee de Phuket", emoji: "🍜", wikiTitle: "Hokkien mee", desc: "Fideos salteados con mariscos y carne, influenciados por la cocina china hokkien." },
      { name: "Moo hong", emoji: "🍖", wikiTitle: "Moo hong", desc: "Cerdo estofado con especias y salsa de soja, típico de Phuket." },
      { name: "Oh tao", emoji: "🦪", wikiTitle: "Oyster omelette", desc: "Tortilla de ostras y almidón, popular en la cocina local de Phuket." },
      { name: "Kanom jeen", emoji: "🍜", wikiTitle: "Khanom chin", desc: "Fideos de arroz fermentados servidos con curry y vegetales." }
    ],
    attractions: [
      { name: "Gran Buda de Phuket", wikiTitle: "Gran Buda de Phuket", note: "Gran estatua de Buda situada en una colina con vistas panorámicas." },
      { name: "Old Phuket Town", wikiTitle: "Phuket", note: "Centro histórico con arquitectura sino-portuguesa." },
      { name: "Wat Chalong", wikiTitle: "Wat Chalong", note: "Uno de los templos budistas más importantes de Phuket." },
      { name: "Cabo Promthep", wikiTitle: "Phromthep Cape", note: "Mirador costero famoso por sus puestas de sol." },
      { name: "Patong Beach", wikiTitle: "Patong", note: "Playa conocida por su actividad turística y vida nocturna." }
    ]
  }
};

module.exports = { COUNTRIES, CURRENCIES, CITY_GUIDES };
