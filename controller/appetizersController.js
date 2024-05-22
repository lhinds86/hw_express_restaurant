const appetizers = [
  {
    name: "Shrimp-Cocktail",
    description: "Chilled jumbo shrimp served with cocktail sauce.",
    type: "seafood",
    price: 12.99,
    imageUrl: "https://recipes.net/wp-content/uploads/2023/05/flemings-steakhouse-shrimp-cocktail_a5d7a7c3553ad6eb981692d4469ba19e.jpeg"
  },
  {
    name: "Loaded-Potato-Skins",
    description: "Crispy potato skins filled with melted cheddar cheese, bacon bits, and green onions. Served with sour cream.",
    type: "vegetables",
    price: 8.99,
    imageUrl: "https://www.fodmapeveryday.com/wp-content/uploads/2020/04/close-image-of-low-FODMAP-stuffed-potato-skins-with-melted-cheese-500x500.jpg"
  },
  {
    name: "Fried-Calamari",
    description: "Lightly breaded and fried calamari rings served with marinara sauce.",
    type: "seafood",
    price: 18.99,
    imageUrl: "https://recipes.net/wp-content/uploads/2021/03/calamari-rings-with-dipping-sauce-and-lemon-wedges.jpg"
  },
  {
    name: "Caesar-Salad",
    description: "Crisp romaine lettuce tossed with garlic croutons, Parmesan cheese, and Caesar dressing.",
    type: "Vegetables",
    price: 10.99,
    imageUrl: "https://www.feastingathome.com/wp-content/uploads/2021/10/Caesar-salad_-4-800x800.jpg"
  }
]

const getAppetizers = (req, res) => {
  res.send(appetizers)
}

const getAppetizer = (req, res) => {
  res.send(appetizers[req.params.id])
}

module.exports = {
  getAppetizers,
  getAppetizer,
}