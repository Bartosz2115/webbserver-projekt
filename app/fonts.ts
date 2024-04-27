import { Inter, Galada } from "next/font/google";

const galada = Galada({ subsets: ["latin"], weight: ['400'] });
const inter = Inter({ subsets: ["latin"] });

export { galada, inter };