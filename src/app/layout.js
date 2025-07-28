import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FitGenie Home Page",
  description: "Your personal fitness companion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body>
        <nav>
          <Navbar />
        </nav>
        <main className="min-h-screen w-11/12 mx-auto p-4 sm:p-8">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
