import React from "react";
import "./Layout.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import SideNav from "../SideNav/SideNav";

const Layout = (props) => (
  <div className="layout">
   
    <Nav user={props.user} />
  
    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
