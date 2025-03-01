import { useState, useEffect } from "react";
import api from "../services/api";
import { Product } from "../types";

interface FormProps {
    selectedProduct: Product | null;
    onSuccess: () => void;
}

export const Form = ({ selectedProduct, onSuccess }: FormProps) => {
    const [formData, setFormData] = useState<Product>({
        barcode: "",
        description: "",
        brand: "",
        price: 0,
        cost: 0,
        expire_date: "",
        stock: 0
    });

    useEffect(() => {
        if (selectedProduct) {
            setFormData(selectedProduct);
        } else {
            setFormData({
                barcode: "",
                description: "",
                brand: "",
                price: 0,
                cost: 0,
                expire_date: "",
                stock: 0
            });
        }
    }, [selectedProduct]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const endpoint = selectedProduct
                ? `/groceries/products/updateOne/${selectedProduct.barcode}`
                : "/groceries/products/insert";

            const method = selectedProduct ? "put" : "post";

            await api[method](endpoint, formData);
            onSuccess();
        } catch (error) {
            alert(`Error: ${error instanceof Error ? error.message : "Error desconocido"}`);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="card">
            <div className="card-header">
                <h3>{selectedProduct ? "Editar Producto" : "Nuevo Producto"}</h3>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        {/* Código de Barras */}
                        <div className="col-md-6">
                            <label className="form-label">Código de Barras</label>
                            <input
                                type="text"
                                className="form-control"
                                name="barcode"
                                value={formData.barcode}
                                onChange={handleChange}
                                required
                                disabled={!!selectedProduct}
                            />
                        </div>

                        {/* Descripción */}
                        <div className="col-md-6">
                            <label className="form-label">Descripción</label>
                            <input
                                type="text"
                                className="form-control"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Marca */}
                        <div className="col-md-6">
                            <label className="form-label">Marca</label>
                            <input
                                type="text"
                                className="form-control"
                                name="brand"
                                value={formData.brand}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Precio */}
                        <div className="col-md-6">
                            <label className="form-label">Precio de Venta</label>
                            <input
                                type="number"
                                className="form-control"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                step="0.01"
                                required
                            />
                        </div>

                        {/* Costo */}
                        <div className="col-md-6">
                            <label className="form-label">Costo</label>
                            <input
                                type="number"
                                className="form-control"
                                name="cost"
                                value={formData.cost}
                                onChange={handleChange}
                                step="0.01"
                                required
                            />
                        </div>

                        {/* Fecha de Expiración */}
                        <div className="col-md-6">
                            <label className="form-label">Fecha de Expiración</label>
                            <input
                                type="date"
                                className="form-control"
                                name="expire_date"
                                value={formData.expire_date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Stock */}
                        <div className="col-md-6">
                            <label className="form-label">Existencias</label>
                            <input
                                type="number"
                                className="form-control"
                                name="stock"
                                value={formData.stock}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="mt-4 text-center">
                        <button type="submit" className="btn btn-primary px-5">
                            {selectedProduct ? "Actualizar" : "Guardar"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};