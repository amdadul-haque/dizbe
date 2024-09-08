import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "dizzbe",
  description: "Experience the ultimate shopping experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
