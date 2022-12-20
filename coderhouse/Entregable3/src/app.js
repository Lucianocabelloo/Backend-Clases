import express from "express";
import path from "path";
import ProductManager from "./ProductManager.js";

const app = express();
const Puerto = 8080

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(express.static("public"));

const productManager = new ProductManager(path.resolve(process.cwd(), "public", "products.json"))

app.get("/productos", async(req,res) =>{
    try {
        const products = await productManager.getProducts();
        const limit = req.query.limit;
        let limitedProducts;
        if (limit) {
            limitedProducts = products.splice(0,limit)
        }
        res.send(limitedProducts || products) 
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get("/productos/:pid", async(req,res) =>{
    try {
        let products = await productManager.getProducts()
        let id = req.params.products;
        let product = products.find((product) => product.id === id)
        if(!product){
            res.status(404).send("producto no encontrado")
        }
        res.send(product)
    } catch (error) {
        res.status(404).send(error)
    }
})

app.post("/productos", async(req,res) =>{
    try {
        const products = await productManager.getProducts();
        const productoNuevo = req.body;
        await productManager.addProduct(products,productoNuevo)
        res.send(newProduct);
    } catch (error) {
        res.status(500).send(error)
    }
})


app.listen(Puerto, () =>{
    console.log(`Servidor Online en puerto ${Puerto}`)
});



