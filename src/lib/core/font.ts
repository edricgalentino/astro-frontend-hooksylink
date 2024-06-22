import { Quicksand } from "next/font/google";

const fontQuicksand = Quicksand({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export { fontQuicksand };
