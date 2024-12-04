import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductFormProps {
    onSubmit: (cantidad: string, idProducto: string) => void;
}

export const ProductForm = ({ onSubmit }: ProductFormProps) => {
    const [cantidad, setCantidad] = useState("");
    const [idProducto, setIdProducto] = useState("");

    const Submit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(cantidad, idProducto);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-50 space-x-4">
            <div className="w-full max-w-4xl border border-black p-6 rounded-lg shadow-lg bg-white">
                <form onSubmit={Submit} className="flex space-x-4">
                    <input
                        placeholder="Cantidad"
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />

                    <input
                        placeholder="Id del producto"
                        value={idProducto}
                        onChange={(e) => setIdProducto(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                    <div className="flex justify-center">
                        <Button variant="default" type="submit">Agregar</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
