// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Jafen Designs",
  description: "Interactive Interior Design App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
