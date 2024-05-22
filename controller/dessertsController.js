const desserts = [
  {
    name: "New-York-Cheesecake",
    description: "Creamy and rich cheesecake topped with fresh strawberries and whipped cream.",
    price: 8.99
  },
  {
    name: "Molten-Chocolate-Lava-Cake",
    description: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
    price: 9.99
  },
  {
    name: "Key-Lime-Pie",
    description: "Tangy key lime filling in a graham cracker crust, topped with whipped cream.",
    price: 7.99
  },
  {
    name: "Crème-Brûlée",
    description: "Creamy vanilla custard with a caramelized sugar crust, served with fresh berries.",
    price: 10.99
  },
  {
    name: "Warm Apple Crisp",
    description: "Baked apple slices with a cinnamon oat topping, served with vanilla bean ice cream.",
    price: 8.99
  }
]

const getDesserts = (req, res) => {
  res.send(desserts)
}

const getDessert = (req, res) => {
  res.send(desserts[req.params.id])
}

module.exports = {
  getDesserts,
  getDessert
}