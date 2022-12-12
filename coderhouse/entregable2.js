const fs = require("fs");
const path = require("path");

class ProductManager {
    constructor(){
        this.products = []
        this.file = path.join(__dirname, "products.json");
    }
    fileExists(){
        return fs.existsSync(this.file)
    }
    addProducts(product){
        return new Promise((resolve, reject) => {
            if (this.fileExists()){
                console.info("El Archivo Existe");
                fs.readFile("./products.json", (error,data) => {
                    if (error){
                        reject(error)
                    }
                    this.products = JSON.parse(data);
                    this.products.push(product);
                    fs.writeFile("./products.json"), JSON.stringify(this.products, (error) => {
                        if(error) {
                            return console.error("Error al escribir el archivo");
                        }
                        resolve();
                    })
                });
            } else{
                this.products.push(product);
                fs.writeFileSync(this.file, JSON.stringify(this.product), "utf-8");
                resolve();
            }
        })
    }
    getProductById(id){
        return new Promise((resolve,reject) =>{
            fs.readFile(this.file, "utf-8", (error,data)=>{
                if (error) {
                    reject(error)
                } else {
                    this.products = JSON.parse(data);
                    const product = this.products.find((product) => product.id === id);
                    resolve(product);
                }
            })
        })
    }
    getProducts(){
        return new Promise((resolve,reject) =>{
            fs.readFile(this.file, "utf-8", (error,data)=>{
                if (error) {
                    reject(error)
                } else {
                    this.products = JSON.parse(data);
                    resolve(this.products)
                }
            })
        })
    }
    deleteProductById(id){
        return new Promise((resolve,reject) => {
            fs.readFile(this.file, "utf-8", (error,data) =>{
                if (error) {
                    reject(error)
                } else {
                    this.products = JSON.parse(data);
                    this.products = this.products.filter((product) => product.id !== id)
                    
                    resolve(fs.writeFile)
                }
            })
        })
    }

    updateProductById(id,nuevoValor){
        return new Promise ((resolve,reject) =>{
            fs.readFile(this.file, "utf-8", (error,data)=> {
                if (error) {
                    reject(error)
                } else {
                    this.products = JSON.parse(data);                    
                    const productIndex = this.products.findIndex((product) => product.id === id)
                    this.products[productIndex][title] = nuevoValor;
                    resolve()
                }
            })
        })
    }
        }

        module.exports = ProductManager;