import { CartProvider } from "@/contexts/CartContext";
import "./globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
