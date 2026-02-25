import "./globals.css";
import BackgroundMusic from "./components/BackgroundMusic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <BackgroundMusic />
      </body>
    </html>
  );
}
