import './globals.css';
import 'swiper/css';
import Header from '@/layout/Header/Header';
import AppContextProvider from "@/context/AppContext";

export const metadata = {
  title: 'Kids Area',
  description: 'Kids Area website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body>
          <Header />
          {children}
        </body>
      </AppContextProvider>
    </html>
  )
}
