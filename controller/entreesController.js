const entrees = [
  {
    name: "Filet-Mignon",
    description: "A tender and juicy 8 oz. filet mignon cooked to your preference and served with your choice of side.",
    price: 29.99,
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/delish-filet-mignon-horizontal-1541189043.jpeg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*"
  },
  {
    name: "New-York-Strip-Steak",
    description: "A hearty New York strip steak grilled to perfection and served with roasted vegetables.",
    price: 32.99,
    imageUrl: "https://www.grillseeker.com/wp-content/uploads/2021/05/How-to-Grill-the-Perfect-New-York-Strip-Steak-Feature-Image.jpg"
  },
  {
    name: "Cowboy-Ribeye-Steak",
    description: "A flavorful cowboy ribeye steak seasoned with our signature blend of spices and served with mashed potatoes.",
    price: 50.99,
    imageUrl: "https://thecozyapron.com/wp-content/uploads/2022/05/cowboy-ribeye_thecozyapron_01.jpg"
  },
  {
    name: "Grilled-Salmon",
    description: "Fresh Atlantic salmon fillet grilled to perfection and served with a lemon butter sauce and rice pilaf.",
    price: 26.99,
    imageUrl: "https://www.dinneratthezoo.com/wp-content/uploads/2019/05/grilled-salmon-final-2-500x375.jpg"
  }
]

const getEntrees = (req, res) => {
  res.send(entrees)
}

const getEntree = (req, res) => {
  res.send(entrees[req.params.id])
}

module.exports = {
  getEntrees,
  getEntree
}
