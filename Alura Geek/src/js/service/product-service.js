const productList = async () => {
    try {
      const res = await fetch(
        "https://mocki.io/v1/782f223f-5b48-4acc-9e68-d4238d4ad782"
      );
      return await res.json();
    } catch (err) {
      return console.log(err);
    }
  };
  
  const crearProducto = async (nombre, precio, imagen) => {
    try {
      const res = await fetch(
        "https://mocki.io/v1/782f223f-5b48-4acc-9e68-d4238d4ad782",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre,
            precio,
            imagen,
          }),
        }
      );
      return await res.json();
    } catch (err) {
      return console.log(err);
    }
  };
  
  const borrarProducto = async (id) => {
    try {
      const res = await fetch(
        `https://mocki.io/v1/782f223f-5b48-4acc-9e68-d4238d4ad782/${id}`,
        {
          method: "DELETE",
        }
      );
      return await res.json();
    } catch (err) {
      return console.log(err);
    }
  };
  
  //* Exporta las funciones
  export const servicesProducts = {
    productList,
    crearProducto,
    borrarProducto,
  };