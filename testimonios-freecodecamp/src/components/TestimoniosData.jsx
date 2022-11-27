// const testimonioData = {
//   nombre: "Shawn Wang ",
//   pais: "Singapore",
//   imagen: "shawn",
//   cargo: "Software Engineer",
//   empresa: "Amazon",
//   testimonio:
//     "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.",

//   nombreDos: "Sarah Chima",
//   paisDos: "Singapore",
//   imagenDos: "shawn",
//   cargoDos: "Software Engineer",
//   empresaDos: "Amazon",
//   testimonioDos:
//     "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.",
// };

function testimonioData(nombre, pais, imagen, cargo, empresa, testimonio) {
  this.nombre = nombre;
  this.pais = pais;
  this.imagen = imagen;
  this.cargo = cargo;
  this.empresa = empresa;
  this.testimonio = testimonio;
}

const testimonioDataOne = new testimonioData(
  "Shawn Wang",
  "Singapore",
  "shawn",
  "Software Engineer",
  "Amazon",
  "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
);

const testimonioDataTwo = new testimonioData(
  "Sarah Chima",
  "Nigeria",
  "sarah",
  "Software Engineer",
  "ChatDesk",
  "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
);

const testimonioDataThree = new testimonioData(
  "Emma Bostian",
  "Sweden",
  "emma",
  "Software Engineer",
  "Spotify",
  "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
);

export { testimonioDataOne, testimonioDataTwo, testimonioDataThree };
