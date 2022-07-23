import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import { CartProvider } from "./context/CartContext";
import Mainpage from "./pages/Mainpage";
import CartPage from "./pages/CartPage";
import SingleProductPage from "./pages/SingleProductPage";

import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import { SidebarProvider } from "./context/SidebarContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <SidebarProvider>
          <Navigation />
          <Container>
            <Routes>
              <Route path="*" element={<Mainpage />} />
              <Route
                path="/product/:productId"
                element={<SingleProductPage />}
              />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </Container>
          <Sidebar />
        </SidebarProvider>
      </CartProvider>
    </div>
  );
}

export default App;
