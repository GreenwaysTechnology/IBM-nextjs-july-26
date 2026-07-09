'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import '@/app/links.css'

export default function NavBar() {
    const pathname = usePathname()
    console.log('pathname', pathname)

    //inline style
    const linkStyle = (path) => {
        return {
            padding: '8px 12px',
            borderRadius: '6px',
            textDecoration: 'none',
            color: pathname == path ? "white" : "black",
            background: pathname == path ? "#2563eb" : "transparent"

        }
    }
    return <nav style={{ display: "flex", gap: "12px" }}>
        <ul>
            {/* <li>
                <Link className={`${pathname === '/' ? 'active' : ''}`} href={{ pathname: "/" }}>Home</Link>
            </li>
            <li>
                <Link className={`${pathname === '/about' ? 'active' : ''}`} href={{ pathname: "/about" }}>About</Link>
            </li>
            <li>
                <Link className={`${pathname === '/services' ? 'active' : ''}`} href={{ pathname: "/services" }}>Services</Link>
            </li> */}
            <li>
                <Link style={linkStyle("/")} href={{ pathname: "/" }}>Home</Link>
            </li>
            <li>
                <Link style={linkStyle("/about")} href={{ pathname: "/about" }}>About</Link>
            </li>
            <li>
                <Link style={linkStyle("/services")} href={{ pathname: "/services" }}>Services</Link>
            </li>
        </ul>
    </nav>
}