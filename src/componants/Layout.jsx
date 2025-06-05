import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col text-gray-900 bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <SidebarLeft />
        <main className="flex-1 p-6 bg-gray-50">{children}</main>
        <SidebarRight />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
