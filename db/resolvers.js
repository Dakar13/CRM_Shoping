const cursos = [
  {
    titulo: "JavaScript Moderno Guía Definitiva Construye +10 Proyectos",
    tecnologia: "JavaScript ES6",
  },
  {
    titulo: "React La Guía Completa: Hooks Context Redux MERN +15 Apps",
    tecnologia: "React",
  },
  {
    titulo: "Node.js Bootcamp Desarrollo Web inc. MVC y Rest API´s",
    tecnologia: "Node.js",
  },
  {
    titulo: "ReactJS Avanzado FullStack React GraphQl y Apollo",
    tecnologia: "React",
  },
];

// Resolvers
const resolvers = {
  Query: {
    obtenerCursos: () => cursos,
    /* obtenerCursos: () => cursos[0]  Retorna la informacion de la posicion 1 */
    obtenerTecnologia: () => cursos,
  },
};

module.exports = resolvers;
