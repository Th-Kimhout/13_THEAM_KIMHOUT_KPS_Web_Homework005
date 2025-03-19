import "./globals.css";

export const metadata = {
  title: "Homework 005",
  description: "Practice Next.js lesson about app router and data fetching",
  icons: { icon: "/HRD Logo.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {children}
    </html>
  );
}
