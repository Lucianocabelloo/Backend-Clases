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
        const producto = this.products.find((producto) => producto.id === id)
        producto.productoAAgregar.push(nombre)
    }
}

const ProductManager = new productManager(100);
ProductManager.agregarProducto("Manteca","Hecho con base de leche",100,"#",1234,10)