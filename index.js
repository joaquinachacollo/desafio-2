import ProductosManager from "./manager/productosManager.js";

const manager = new ProductosManager();

const env = async () => {
  let producto = {
    titulo: "",
    descripcion: "dadwedw",
    precio: 500,
    thumbnail: "efdse",
    code: 3150,
    stock: 263,
  };

  let productoN = await manager.addProducts(producto);

  console.log(productoN);
};

env();
