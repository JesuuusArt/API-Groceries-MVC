import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { Navbar } from "./components/Navbar";
import { Table } from "./components/Table";
import api from "./services/api";
import { Product } from "./types";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // <- Nuevo estado

  const fetchProducts = async () => {
    try {
      const response = await api.get<{ data: Product[] }>("/groceries/products/getAll");
      setProducts(response.data.data);
    } catch (error) {
      alert("Error cargando productos");
    }
  };

  // Cargar productos al inicio
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="row mt-4">
        <div className="col-lg-5">
          {/* Pasa el producto seleccionado al formulario */}
          <Form 
            selectedProduct={selectedProduct} 
            onSuccess={() => {
              fetchProducts();
              setSelectedProduct(null); // Limpia la selección después de guardar
            }} 
          />
        </div>
        <div className="col-lg-7">
          {/* Pasa la función para seleccionar producto */}
          <Table 
            products={products} 
            onDelete={fetchProducts}
            onEdit={(product) => setSelectedProduct(product)} // <- Nuevo
          />
        </div>
      </div>
    </div>
  );
}

export default App;