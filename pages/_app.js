import "@/styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-poppins",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={poppins.variable}>
      <Component {...pageProps} />
    </div>
  );
}