import "./globals.css";

export const metadata = {
  title: "Global Fashion",
  description: "Luxury fashion for the modern",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen h-screen overflow-hidden">
      <body className="w-full h-full overflow-x-hidden overflow-y-scroll scrollbar-hidden relative">
        {children}
      </body>
    </html>
  );
}
