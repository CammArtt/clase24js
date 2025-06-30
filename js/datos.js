const peliculasMCU = [
  {
    id: 0,
    nombre: "Iron Man",
    portada: "imgs/ironman.png",
    fechaEstreno: 2008,
    descripcion: "Tony Stark se convierte en Iron Man tras ser secuestrado y crear su armadura para escapar.",
    director: "Jon Favreau",
    elenco: ["Robert Downey Jr.", "Gwyneth Paltrow", "Jeff Bridges", "Terrence Howard"],
    criticas: [
      { medio: "Rotten Tomatoes", puntaje: 94, comentario: "Un sólido inicio para el MCU." },
      { medio: "IMDb", puntaje: 7.9, comentario: "Entretenida y bien actuada." }
    ],
    fase: "Fase 1"
  },
  {
    id: 1,
    nombre: "The Incredible Hulk",
    portada: "imgs/incrediblehulk.png",
    fechaEstreno: 2008,
    descripcion: "Bruce Banner busca una cura para su condición y lucha contra el monstruo Hulk.",
    director: "Louis Leterrier",
    elenco: ["Edward Norton", "Liv Tyler", "Tim Roth", "William Hurt"],
    criticas: [
      { medio: "Rotten Tomatoes", puntaje: 67, comentario: "No tan memorable, pero cumple." },
      { medio: "IMDb", puntaje: 6.7, comentario: "Acción correcta pero poco destacable." }
    ],
    fase: "Fase 1"
  },
  {
    id: 2,
    nombre: "Iron Man 2",
    portada: "imgs/ironman2.png",
    fechaEstreno: 2010,
    descripcion: "Tony Stark enfrenta presiones del gobierno y nuevos enemigos.",
    director: "Jon Favreau",
    elenco: ["Robert Downey Jr.", "Gwyneth Paltrow", "Don Cheadle", "Scarlett Johansson"],
    criticas: [
      { medio: "Rotten Tomatoes", puntaje: 72, comentario: "Secuela con más espectáculo, pero menos impacto." },
      { medio: "IMDb", puntaje: 7.0, comentario: "Sólida pero no sobresaliente." }
    ],
    fase: "Fase 1"
  },
  {
    id: 3,
    nombre: "Thor",
    portada: "imgs/thor.png",
    fechaEstreno: 2011,
    descripcion: "El dios del trueno es desterrado a la Tierra y aprende humildad.",
    director: "Kenneth Branagh",
    elenco: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston", "Anthony Hopkins"],
    criticas: [
      { medio: "Rotten Tomatoes", puntaje: 77, comentario: "Un toque shakesperiano en el MCU." },
      { medio: "IMDb", puntaje: 7.0, comentario: "Épica y emocional." }
    ],
    fase: "Fase 1"
  },
  {
    id: 4,
    nombre: "Captain America: The First Avenger",
    portada: "imgs/cap1.png",
    fechaEstreno: 2011,
    descripcion: "Steve Rogers se convierte en el Capitán América para luchar en la Segunda Guerra Mundial.",
    director: "Joe Johnston",
    elenco: ["Chris Evans", "Hayley Atwell", "Sebastian Stan", "Hugo Weaving"],
    criticas: [
      { medio: "Rotten Tomatoes", puntaje: 80, comentario: "Aventura clásica con corazón." },
      { medio: "IMDb", puntaje: 6.9, comentario: "Honesta y patriótica." }
    ],
    fase: "Fase 1"
  },
  {
    id: 5,
    nombre: "The Avengers",
    portada: "imgs/avengers.png",
    fechaEstreno: 2012,
    descripcion: "Los héroes se unen para enfrentar una amenaza global liderada por Loki.",
    director: "Joss Whedon",
    elenco: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson", "Mark Ruffalo", "Chris Hemsworth", "Jeremy Renner"],
    criticas: [
      { medio: "Rotten Tomatoes", puntaje: 91, comentario: "Reunión épica que redefinió el género." },
      { medio: "IMDb", puntaje: 8.0, comentario: "Una superproducción histórica." }
    ],
    fase: "Fase 1"
  },
  {
    id: 6,
    nombre: "Iron Man 3",
    portada: "imgs/ironman3.png",
    fechaEstreno: 2013,
    descripcion: "Tony Stark lucha con el trauma post-Avengers mientras enfrenta una nueva amenaza.",
    director: "Shane Black",
    elenco: ["Robert Downey Jr.", "Gwyneth Paltrow", "Don Cheadle", "Ben Kingsley"],
    criticas: [
      { medio: "Rotten Tomatoes", puntaje: 79, comentario: "Un enfoque más humano del héroe." },
      { medio: "IMDb", puntaje: 7.1, comentario: "Reflexiva y explosiva." }
    ],
    fase: "Fase 2"
  },
  {
    id: 7,
    nombre: "Thor: The Dark World",
    portada: "imgs/thordark.png",
    fechaEstreno: 2013,
    descripcion: "Thor lucha por salvar los Nueve Reinos de una antigua oscuridad.",
    director: "Alan Taylor",
    elenco: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston", "Christopher Eccleston"],
    criticas: [
      { medio: "Rotten Tomatoes", puntaje: 66, comentario: "Oscura pero con momentos fuertes." },
      { medio: "IMDb", puntaje: 6.8, comentario: "Cumple con la acción esperada." }
    ],
    fase: "Fase 2"
  },
  {
    id: 8,
    nombre: "Captain America: The Winter Soldier",
    portada: "imgs/cap2.png",
    fechaEstreno: 2014,
    descripcion: "Steve Rogers descubre una conspiración dentro de S.H.I.E.L.D. mientras enfrenta a un viejo amigo.",
    director: "Anthony y Joe Russo",
    elenco: ["Chris Evans", "Scarlett Johansson", "Sebastian Stan", "Samuel L. Jackson"],
    criticas: [
      { medio: "Rotten Tomatoes", puntaje: 90, comentario: "Thriller político disfrazado de superhéroes." },
      { medio: "IMDb", puntaje: 7.7, comentario: "Intensa y bien dirigida." }
    ],
    fase: "Fase 2"
  },
  {
    id: 9,
    nombre: "Guardians of the Galaxy",
    portada: "imgs/guardians.png",
    fechaEstreno: 2014,
    descripcion: "Un grupo de inadaptados se une para salvar la galaxia.",
    director: "James Gunn",
    elenco: ["Chris Pratt", "Zoe Saldana", "Dave Bautista", "Vin Diesel", "Bradley Cooper"],
    criticas: [
      { medio: "Rotten Tomatoes", puntaje: 92, comentario: "Divertida y con corazón." },
      { medio: "IMDb", puntaje: 8.0, comentario: "Única y refrescante." }
    ],
    fase: "Fase 2"
  },
  {
    id: 10,
    nombre: "Avengers: Age of Ultron",
    portada: "imgs/ultron.png",
    fechaEstreno: 2015,
    descripcion: "Los Vengadores enfrentan a una IA peligrosa creada por Tony Stark.",
    director: "Joss Whedon",
    elenco: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson", "Jeremy Renner"],
    criticas: [
      { medio: "Rotten Tomatoes", puntaje: 76, comentario: "Visualmente ambiciosa." },
      { medio: "IMDb", puntaje: 7.3, comentario: "No supera a la primera, pero cumple." }
    ],
    fase: "Fase 2"
  },
  {
    id: 11,
    nombre: "Ant-Man",
    portada: "imgs/antman.png",
    fechaEstreno: 2015,
    descripcion: "Un ladrón reformado obtiene un traje que le permite encogerse y comunicarse con insectos.",
    director: "Peyton Reed",
    elenco: ["Paul Rudd", "Evangeline Lilly", "Michael Douglas", "Corey Stoll"],
    criticas: [
      { medio: "Rotten Tomatoes", puntaje: 83, comentario: "Pequeña escala, gran diversión." },
      { medio: "IMDb", puntaje: 7.3, comentario: "Sorprendentemente entretenida." }
    ],
    fase: "Fase 2"
  },
  {
    id: 12,
    nombre: "Captain America: Civil War",
    portada: "imgs/civilwar.png",
    fechaEstreno: 2016,
    descripcion: "Los héroes del MCU se enfrentan tras una disputa sobre regulación y responsabilidad.",
    director: "Anthony y Joe Russo",
    elenco: ["Chris Evans", "Robert Downey Jr.", "Scarlett Johansson", "Sebastian Stan"],
    criticas: [
      { medio: "Rotten Tomatoes", puntaje: 91, comentario: "Compleja y emocional." },
      { medio: "IMDb", puntaje: 7.8, comentario: "Una entrega con peso moral." }
    ],
    fase: "Fase 3"
  },
  {
    id: 13,
    nombre: "Doctor Strange",
    portada: "imgs/strange.png",
    fechaEstreno: 2016,
    descripcion: "Un cirujano arrogante encuentra un nuevo propósito en las artes místicas.",
    director: "Scott Derrickson",
    elenco: ["Benedict Cumberbatch", "Tilda Swinton", "Chiwetel Ejiofor", "Mads Mikkelsen"],
    criticas: [
      { medio: "Rotten Tomatoes", puntaje: 89, comentario: "Visualmente deslumbrante." },
      { medio: "IMDb", puntaje: 7.5, comentario: "Creativa y mística." }
    ],
    fase: "Fase 3"
  },
  {
    id: 14,
    nombre: "Guardians of the Galaxy Vol. 2",
    portada: "imgs/guardians2.png",
    fechaEstreno: 2017,
    descripcion: "Los Guardianes exploran la historia de Peter Quill y su padre celestial.",
    director: "James Gunn",
    elenco: ["Chris Pratt", "Zoe Saldana", "Dave Bautista", "Vin Diesel", "Bradley Cooper", "Kurt Russell"],
    criticas: [
      { medio: "Rotten Tomatoes", puntaje: 85, comentario: "Más emocional, aunque menos fresca." },
      { medio: "IMDb", puntaje: 7.6, comentario: "Una secuela con corazón." }
    ],
    fase: "Fase 3"
  }
];

