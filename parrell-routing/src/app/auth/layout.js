export default function AuthLayout({ children, admin, guest }) {
    const isAdmin = false
    return <div id="AuthLayout">
        {children}
        {isAdmin ? admin : guest}
    </div>
}