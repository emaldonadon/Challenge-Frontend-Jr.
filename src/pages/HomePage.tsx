import Navbar from "@/components/Navbar";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";


export const HomePage = () => {
  const productos = useSelector((state: RootState) => state.carrito.productos);
  const navigate = useNavigate();


  const Navigate = () => {
    navigate("/registrar");
  }

  return (
    <Navbar>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 space-y-8">
        <div className="w-full max-w-4xl border border-gray-300 p-6 rounded-lg shadow-md bg-white">
          <Button onClick={Navigate}
          >
            Agregar Producto
          </Button>
          <h2 className="text-xl font-bold text-center mb-4">Carrito de Compras</h2>
            <div className="overflow-y-auto max-h-[420px]">
              <Table>
                <TableCaption>Productos disponibles en el carrito</TableCaption>
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
        </div>
      </div>
    </Navbar>
  );
};
