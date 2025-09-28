import React from "react";

function Footer() {
  // Shared link style
  const linkStyle: React.CSSProperties = {
    color: "white",
    textDecoration: "none",
    margin: "0 10px",
  };

  return (
    <footer
      style={{
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(to right, #220202 0%, #000000 100%);",
        color: "white",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Company Info */}
        <div style={{ marginBottom: "20px" }}>
          <p style={{ margin: "5px 0" }}>
            &copy; 2025 Plex Visuals. All rights reserved.
          </p>
          <p style={{ margin: "5px 0" }}>
            Phone: <a href="tel:6386863310" style={linkStyle}>+91-6386863310</a> | 
            Email: <a href="mailto:info@company.com" style={linkStyle}>plex@gmail.com</a>
          </p>
        </div>

        {/* Social Media Links */}
        <div style={{ marginBottom: "20px" }}>
          <a href="#" style={linkStyle}>Facebook</a>
          <a href="#" style={linkStyle}>Twitter</a>
          <a href="#" style={linkStyle}>Instagram</a>
          <a href="#" style={linkStyle}>LinkedIn</a>
        </div>

        {/* Navigation Links */}
        <div>
          <a href="#" style={linkStyle}>Home</a> | 
          <a href="#" style={linkStyle}>About</a> | 
          <a href="#" style={linkStyle}>Projects</a> | 
          <a href="#" style={linkStyle}>FAQs</a> | 
          <a href="#" style={linkStyle}>Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
