
import Header from "@/components/header";
import "../styles/globals.css";
import Footer from "@/components/footer";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
