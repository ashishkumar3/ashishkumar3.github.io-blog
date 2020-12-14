import { Link } from "gatsby"
import React from "react"

const Sidebar = ({ links }) => {

    const getLinks = () => {
        return <div style={{display: "flex", flexDirection: "column"}}>{
            links.map(link => {
                return <Link to={link.url} className="sidebar-link" style={{color: "#26466f"}}>{link.title}</Link>
            })
        }</div>
    }

    return (
        <div style={{
            position: "fixed",
            left: 0,
            display: "flex",
            flexDirection: "column",
            width: "20%",
            overflowX: "hidden",
            // overflowY: "scroll"
        }}>
            {getLinks()}
        </div>
      )
}

export default Sidebar
