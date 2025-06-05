import React from 'react';
import '../styles/components/SidebarLeft.css'; // Assuming you have a CSS file for styles

const SidebarLeft = () => {
  return (
<aside className="sidebar-left">
  <div className="sidebar-header">Menu</div>
  <nav className="sidebar-menu">
    <a href="/" className="sidebar-link">Accueil</a>
    <a href="/appointments" className="sidebar-link">Rendez-vous</a>
    <a href="/services" className="sidebar-link">Nos Services</a>
    <a href="/contact" className="sidebar-link">Contact</a>
  </nav>
</aside>

  );
};

export default SidebarLeft;
