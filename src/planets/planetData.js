import * as BABYLON from "@babylonjs/core";


export const planetData = [
  {
    name: "Mercury",
    image: "/images/Mercury.png",

    size: 1,

    distance: 15,

    speed: 0.015,

    color: new BABYLON.Color3(0.7, 0.7, 0.7),

    description: "Mercurio es el planeta más cercano al Sol.",
  },

  {
    name: "Venus",
    image: "/images/Venus.png",

    size: 1.5,

    distance: 22,

    speed: 0.012,

    color: new BABYLON.Color3(1, 0.5, 0),

    description: "Venus es conocido por su calor extremo.",
  },

  {
    name: "Earth",
    image: "/images/Earth.png",

    size: 1.8,

    distance: 30,

    speed: 0.01,

    color: new BABYLON.Color3(0, 0, 1),

    description: "La Tierra alberga vida.",
  },

  {
    name: "Mars",
    image: "/images/Mars.png",

    size: 1.4,

    distance: 38,

    speed: 0.009,

    color: new BABYLON.Color3(1, 0, 0),

    description: "Marte es el planeta rojo.",
  },

  {
    name: "Jupiter",
    image: "/images/Jupiter.png",

    size: 4,

    distance: 50,

    speed: 0.006,

    color: new BABYLON.Color3(1, 0.8, 0.2),

    description: "Júpiter es el planeta más grande.",
  },

  {
    name: "Saturn",
    image: "/images/Saturn.png",

    size: 3.5,

    distance: 65,

    speed: 0.005,

    color: new BABYLON.Color3(0.9, 0.7, 0.4),

    description: "Saturno es famoso por sus anillos.",
  },

  {
    name: "Uranus",
    image: "/images/Uranus.png",

    size: 3,

    distance: 80,

    speed: 0.003,

    color: new BABYLON.Color3(0.4, 0.8, 1),

    description: "Urano rota inclinado.",
  },

  {
    name: "Neptune",
    image: "/images/Neptune.png",

    size: 2.8,

    distance: 95,

    speed: 0.002,

    color: new BABYLON.Color3(0.2, 0.4, 1),

    description: "Neptuno es el planeta más lejano.",
  },
];
