import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/Input";
import { useAppDispatch } from "@/hooks/redux";
import { agregarProducto } from "@/store/carritoSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

interface Producto {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export const FromPage = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [cantidad, setCantidad] = useState("");
  const [productoSeleccionado, setProductoSeleccionado] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const fetchProductos = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data: Producto[] = await response.json();
    setProductos(data);
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const handleAgregarProducto = () => {
    const cantidadNum = parseInt(cantidad, 10);
    if (!productoSeleccionado || isNaN(cantidadNum) || cantidadNum <= 0) {
      Swal.fire({
        icon: "error",
        title: "Por favor ingresa datos válidos",
      });
      return;
    }

    const producto = productos.find((p) => p.id.toString() === productoSeleccionado);
    if (producto) {
      dispatch(
        agregarProducto({
          ...producto,
          cantidad: cantidadNum,
        })
      );
      Swal.fire({
        icon: "success",
        title: "Producto agregado con éxito",
      }).then(() => {
        navigate("/");
      });
    }
  };

  return (
    <Navbar>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-lg border border-gray-300 p-6 rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Agregar Productos
          </h2>
          <div className="space-y-4">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              value={productoSeleccionado}
              onChange={(e) => setProductoSeleccionado(e.target.value)}
            >
              <option value="">Selecciona un producto</option>
              {productos.map((producto) => (
                <option key={producto.id} value={producto.id}>
                  {producto.title}
                </option>
              ))}
            </select>
            <Input
              type="text"
              placeholder="Cantidad"
              value={cantidad}
              onChange={(value) => setCantidad(value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <Button onClick={handleAgregarProducto}>Agregar</Button>
          </div>
        </div>
      </div>
    </Navbar>
  );
};
