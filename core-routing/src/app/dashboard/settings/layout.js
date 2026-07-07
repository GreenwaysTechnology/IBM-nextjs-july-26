
export default function SettingsLayout({ children }) {
    return <div>
        <h1>Settings</h1>
        <div style={{
            display: "flex",
            gap: "20px"
        }}>
            <aside style={{
                width: "180px",
                background: "#ecf0f1",
                padding: "10px"
            }}>
                <p>Profile</p>
                <p>Security</p>
                <p>Notifications</p>
            </aside>
            <section style={{ flex: 1 }}>
                {children}
            </section>

        </div>
    </div>
}