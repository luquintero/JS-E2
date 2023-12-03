const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//a)  Las pizzas que tengan un id impar.

for (let i = 0; i < pizzas.length; i++) {
  if (pizzas[i].id % 2 !== 0) {
    console.log(`La ${pizzas[i].nombre} tiene ${pizzas[i].ingredientes} y sale $${pizzas[i].precio}`);
  }
}

console.log("_________________________________________________"); // Separador 

//b) Responder: ¿Hay alguna pizza que valga menos de $600?

const pizzaMenos600 = pizzas.some(pizza => pizza.precio < 600);

if (pizzaMenos600) {
  console.log('Sí, hay al menos una pizza que vale menos de $600.');
} else {
  console.log('No, todas las pizzas tienen un precio mayor $600.');
}

console.log("_________________________________________________"); // Separador 

//c) El nombre de cada pizza con su respectivo precio.

pizzas.forEach(pizzas => {
  console.log(`La ${pizzas.nombre} sale $${pizzas.precio}`);
});

console.log("_________________________________________________"); // Separador 

//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

pizzas.forEach(pizzas => {
  console.log(`Ingredientes de la ${pizzas.nombre}:`);
  pizzas.ingredientes.forEach(ingredientes => {
    console.log(ingredientes);
  });
  console.log("--------------------------------------------"); // Separador entre pizzas
});
