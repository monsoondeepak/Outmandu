import { Nunito } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";
import { AuthProvider } from "./Provider";

const outfit = Nunito({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata = {
  title: "Outmandu - Your Travel Patner",
  description: "Outmandu- Find the best tourist place. ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700`} >
          <Toaster />
          <AppContextProvider>
            <AuthProvider>{children}</AuthProvider>
          </AppContextProvider>
        
        </body>
      </html>
      </ClerkProvider>
  );
}
