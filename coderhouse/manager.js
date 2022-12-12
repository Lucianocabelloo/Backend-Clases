const ProductManager = require("./productManager");

const product1 = {
    id: 1,
    tittle: "Manteca",
    description: "Hecha 100% natural",
    price: 30,
    code: "123",
    thumbnail: "sin Imagen",
    stock: 30
  };
  const product2 = {
    id: 2,
    tittle: "Leche",
    description: "De vaca",
    price: 33,
    code: "123",
    thumbnail: "sin Imagen",
    stock: 30
  };

  const productManager = new ProductManager([], "products.json");

  const runAwait = async () => {
    await productManager.addProducts(product1);
    await productManager.addProducts(product2)
  }
    runAwait();