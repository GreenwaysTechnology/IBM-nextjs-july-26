export default function DashboardLayout({ children }) {

    return <div id="DashboardLayout" style={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        <aside style={{
            width: "220px",
            background: "#2c3e50",
            color: "white",
            padding: "20px"

        }}>
            <h1>Dashboard</h1>
            <p>Home</p>
            <p>Users</p>
            <p>Settings</p>
        </aside>
        <div style={{ flex: 1 }}>
            {/* Top navigation */}
            <nav style={{
                background: "#3498db",
                color: "white",
                padding: "15px"
            }}>
                Welcome,Admin
            </nav>
            <main style={{ padding: "20px" }}>
                {children}
            </main>

        </div>
    </div>
}