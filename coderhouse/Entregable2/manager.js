const ProductManager = require("./productManager");

const idChange = (() => (id = 0, () => id++))();
const product = {
  id: idChange(),
  title: "Leche",
  description: "Leche 100% deslactosada ",
  price: 250,
  thumbnail: "Sin imagen",
  code: "1234",
  stock: 2,
};
const product2 = {
  id: idChange(),
  title: "Producto 2",
  description: "Este es un producto 2",
  price: 200,
  thumbnail: "Sin imagen 2",
  code: "12345",
  stock: 25,
};
const productManager = new ProductManager([], "products.json");

const runAwait = async () => {
  console.info("Funcion AddProducts")
  await productManager.addProduct(product);
  await productManager.addProduct(product2);

//console.info("Funcion GetPrudcts")

  const products = await productManager.getproducts();
  console.log("getproducts", products);

  console.info("Funcion FilterProducts")

  const productFilter = await productManager.getProductById(1);
  console.log("filterProducts", productFilter);

  console.info("Funcion Delete Product")
  await productManager.deleteProductById(0);
  console.info("Funcion Update Product")
  await productManager.updateProduct(2);
  
  const products2 = await productManager.getproducts();
  console.log("ProductosTraigos", products2);
};

runAwait();