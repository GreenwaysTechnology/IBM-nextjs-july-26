import NavBar from "@/app/components/NavBar";

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"

        >
            <body>
                {/* nav bar
     */}
                <NavBar />
                {children}

                <div>
                    <p>Footer</p>
                </div>
            </body>
        </html>
    );
}
