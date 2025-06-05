import React from "react";
import Layout from "../componants/Layout";

function Home() {
    return (
        <Layout>
        <div
            style={{
                maxWidth: "800px",
                margin: "64px auto 0 auto",
                textAlign: "center",
                backgroundImage: "url('./images/hopital-blur.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding: "32px",
                borderRadius: "16px"
            }}
        >
            <div>
                <h1 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
                    Bienvenue au Cabinet Médical
                </h1>
                <h2 style={{ color: "#666", fontWeight: "normal", marginBottom: "16px", fontSize: "1.5rem" }}>
                    Votre santé, notre priorité. Prenez rendez-vous en ligne ou découvrez nos services.
                </h2>
                <div style={{ marginTop: "32px" }}>
                    <a
                        href="/appointments"
                        style={{
                            display: "inline-block",
                            padding: "12px 32px",
                            marginRight: "16px",
                            backgroundColor: "#1976d2",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            fontSize: "1rem",
                            textDecoration: "none",
                            cursor: "pointer"
                        }}
                    >
                        Prendre Rendez-vous
                    </a>
                    <a
                        href="/services"
                        style={{
                            display: "inline-block",
                            padding: "12px 32px",
                            backgroundColor: "#fff",
                            color: "#1976d2",
                            border: "2px solid #1976d2",
                            borderRadius: "4px",
                            fontSize: "1rem",
                            textDecoration: "none",
                            cursor: "pointer"
                        }}
                    >
                        Nos Services
                    </a>
                </div>
            </div>
        </div>
        </Layout>
    );
};

export default Home;