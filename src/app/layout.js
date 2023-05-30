import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Dhruvkumar's Personal Site",
    description: "Personal Website of Dhruvkumar Rakeshbhai Patel.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <script src="/global.js"></script>
            </head>
            <body
                className={`${inter.className} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
                // style="--fixation-edge-opacity: 80%; --br-line-height: 1; --br-boldness: 600;"
            >
                <div className="group/spotlight relative">{children}</div>
            </body>
        </html>
    );
}
