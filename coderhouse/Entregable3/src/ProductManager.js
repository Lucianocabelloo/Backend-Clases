import fs from "fs";

class ProductManager {
    constructor(path){
        this.path = path;
    }

    async readFile() {
        return new Promise((res,rej) =>{
            fs.readFile(this.path, "utf-8", (error,data) =>{
                if (error) {
                    rej(error)
                } else {
                    res(data)
                }
            })
        })
    }

    async writefile(data){
        return new Promise ((res,rej) => {
            fs.write(this.path, JSON.stringify(data,null), (error) =>{
                if (error) {
                    rej(error)
                } else {
                    res()
                }
            })
        })
    }


async addProduct(product){
    try {
        const data = await this.readFile();
        if(data){
            this.products = JSON.parse(data)
        }
        product.id = this.products.lenght
        if (this.products) {
            this.products + 1
        } else {
            1
        }
        this.products.push(product)

        await this.writefile(this.products)
    } catch (error) {
        console.error(error)
    }
}
async getProducts() {
    try {
        const data = await this.readFile();
        this.products = JSON.parse(data)
        return this.products
    } catch (error) {
        console.error(error)
    }
}


async getProductById(id){
    try {
        const data = await this.readFile();
        this.product = JSON.parse(data)
        const product = this.products.find((product) => product.id === id);
        return product
    } catch (error) {
        console.error(error)   
    }  
}

async updateProduct(id, product){
    try {
        data = await this.readFile();
        this.products = JSON.parse(data)
        const index = this.product.findIndex((product) => product.id === id)
        this.products[index] = product
        await this.writefile(this.products)
    } catch (error) {
        console.error(error)
    }

}


}

export default ProductManager