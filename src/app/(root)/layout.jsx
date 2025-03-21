import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SearchBarComponent from "./_component/SearchbarComponent";
import { AppSidebar } from "./_component/SidebarComponent";
import HeaderWrapperComponent from "./_component/HeaderWrapperComponent";
import { Noto_Sans_Georgian } from "next/font/google";
import { Suspense } from "react";
const notoSansGeorgian = Noto_Sans_Georgian({
  variable: "--font-noto-sans-georgian",
  subsets: ["latin", "georgian"],
});
export default function RootLayout({ children }) {
  return (
    <body className={`${notoSansGeorgian.variable} antialiased `}>
      <SidebarProvider
        style={{
          "--sidebar-width": "20rem",
          "--sidebar-width-mobile": "20rem",
        }}
      >
        <AppSidebar />
        <SidebarTrigger className="!border-l-0" />
        <main className="flex-1 flex flex-col gap-6 pt-6 px-12 !bg-base-background">
          <SearchBarComponent />
          <section className="h-full bg-white pt-14 px-10 flex flex-col flex-1 rounded-tr-4xl rounded-tl-4xl">
            <div>
              <Suspense fallback={<p>loading....</p>}>
                <HeaderWrapperComponent />
              </Suspense>
            </div>
            {children}
          </section>
        </main>
      </SidebarProvider>
    </body>
  );
}
