import Navbar from "@/components/Navbar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";


export const HomePage = () => {
  const productos = useSelector((state: RootState) => state.carrito.productos);
  const navigate = useNavigate();


  const Navigate = () => {
    navigate("/registrar");
  }

  const date = new Date().toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour:"2-digit",
    minute:"2-digit",
  });

  const total = productos.reduce(
    (sum, product) => sum + product.price * product.cantidad,
    0
  );

  return (
    <Navbar>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 space-y-8">
        <div className="w-full max-w-4xl border border-gray-300 p-6 rounded-lg shadow-md bg-white">
          <Button onClick={Navigate}
          >
            Agregar Producto
          </Button>
          <h2 className="text-xl font-bold text-center mb-4">Carrito de Compras - {date}</h2>
          <div className="overflow-y-auto max-h-[420px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Cantidad</TableHead>
                  <TableHead className="w-[150px]">Nombre</TableHead>
                  <TableHead className="w-[100px]">Categoría</TableHead>
                  <TableHead className="w-[100px]">Precio</TableHead>
                  <TableHead className="w-[100px]">Foto</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productos.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center">
                      No hay productos disponibles.
                    </TableCell>
                  </TableRow>
                ) : (
                  productos.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.cantidad}</TableCell>
                      <TableCell>{product.title}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>${product.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-[50px] h-[50px] object-cover rounded"
                        />
                      </TableCell>
                    </TableRow>
                  ))
                )}
                </TableBody>
            </Table>
          </div>
          <Separator className="my-4"/>
          <div className="flex justify-center text-lg font-semibold">
            Total del carrito a pagar: ${total.toFixed(2)}
          </div>
        </div>
      </div>
    </Navbar>
  );
};
