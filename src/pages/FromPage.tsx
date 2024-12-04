import Navbar from "@/components/Navbar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/Input";

export const FromPage = () => {
  const [cantidad, setCantidad] = useState("");
  const [producto, setProducto] = useState("");
  const navigate = useNavigate();

  const Navigate = () => {
    navigate("/");
  };

  return (
    <Navbar>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-lg border border-gray-300 p-6 rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Agregar Productos
          </h2>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Cantidad"
              value={cantidad}
              onChange={(value) => setCantidad(value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
            <Input
              type="text"
              placeholder="Producto"
              value={producto}
              onChange={(value) => setProducto(value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <Button>
              Agregar
            </Button>
            <Button variant="secondary" onClick={Navigate}>
              Regresar
            </Button>
          </div>
        </div>
      </div>
    </Navbar>
  );
};
