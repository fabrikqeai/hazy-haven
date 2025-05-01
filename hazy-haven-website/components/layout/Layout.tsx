import React, { ReactNode } from "react";
import Header from "./Header"; 
import Footer from "./Footer"; 
import Container from "./Container"; 

// Explicitly define the type of `children`
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
