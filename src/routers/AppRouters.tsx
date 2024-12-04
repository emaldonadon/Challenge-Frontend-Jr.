import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { FromPage } from "@/pages/FromPage"

export const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/registrar" element={<FromPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
