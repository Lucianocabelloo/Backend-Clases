class productManager{
    constructor(){
        this.products = [];
    }
    agregarProducto(
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    ) {
        const producto ={
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(producto)
    }

    getProducts(){
        return this.products;
    }
    getProductById(id, nombre){
        if (producto.id == id) {
            const producto = this.products.find((producto) => producto.id === id)
            producto.productoAAgregar.push(nombre)
            
        } else {
            console.log("No se puede encontrar este producto")
        }
    }
}

const ProductManager = new productManager(100);
ProductManager.agregarProducto("Manteca","Hecho con base de leche",100,"#",1234,10)
ProductManager.agregarProducto("pollo","natural",1009,"#",12345,11)
ProductManager.agregarProducto("Carne","Vacuna",1005,"#",12345,102)

console.log(ProductManager.getProducts())