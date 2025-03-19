import { Noto_Sans_Georgian } from "next/font/google";

const notoSansGeorgian = Noto_Sans_Georgian({
  variable: "--font-noto-sans-georgian",
  subsets: ["latin", "georgian"],
});
export default function RootLayout({ children }) {
  return (
    <body className={`${notoSansGeorgian.variable} antialiased !bg-gray-200`}>
      <main className="container mx-auto  text-dark-blue">{children}</main>
    </body>
  );
}
