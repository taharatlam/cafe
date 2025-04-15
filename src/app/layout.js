

import "@/styles/main.scss";
import Navbar from "@/components/Navbar";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from "@/components/Footer";
import "@/styles/res.scss";
export const metadata = {
  title: "Banh Mi",
  description: "Banh Mi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
