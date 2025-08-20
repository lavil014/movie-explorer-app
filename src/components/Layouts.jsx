import React from "react";

import '../Stylesheets/Layouts.css'

export const Layout = ({children})=>{
    return (  

      <div className="MainContainer">
        <aside className="Sidebar">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Movies</a></li>
            <li><a href="">About</a></li>
          </ul>
        </aside>
        <main className="Layouts">
          {children}
        </main>

      </div>
    )
}

export default Layout;