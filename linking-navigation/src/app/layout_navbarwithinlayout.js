import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"

    >
      <body>
        {/* nav bar
     */}
        <nav>
          <h1>Site Header</h1>
          <ul>
            <li>
              <Link href={{ pathname: "/" }}>Home</Link>
            </li>
            <li>
              <Link href={{ pathname: "/about" }}>About</Link>
            </li>
            <li>
              <Link href={{ pathname: "/services" }}>Services</Link>
            </li>
          </ul>
        </nav>

        {children}

        <div>
          <p>Footer</p>
        </div>
      </body>
    </html>
  );
}
