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
                <meta property="og:title" content="Dhruvkumar's Portfolio" />
                <meta property="og:site_name" content="stack-dhruv" />
                <meta property="og:url" content="stack-dhruv.tech" />
                <meta
                    property="og:description"
                    content="Dhruvkumar Patel is a final year IT engineer with a passion for using technology to solve real-world problems. His website portfolio showcases his skills in web development, software development, and data science. Visit his website today to learn more about his work!"
                />
                <meta property="og:type" content="article" />
                <meta
                    property="og:image"
                    content="https://images.unsplash.com/photo-1685452221648-9b5b870b9195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                />
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
