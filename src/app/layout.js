import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./component/NavBar/NavigationBar";
import { ThemeProvider } from "./component/Theme";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ordvel shop",
  description: "Negotiate on the item you when to buy..",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
