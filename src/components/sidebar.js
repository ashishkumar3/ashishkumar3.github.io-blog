import { Link } from "gatsby"
import React from "react"

const Sidebar = ({ links }) => {

    const getLinks = () => {
        return <>{
            links.map(link => {
                return <Link to={link.url} style={{fontSize: "18px"}}>{link.title}</Link>
            })
        }</>
    }

    return (
        <div style={{display: "flex", flexDirection: "column", padding: "45px"}}>
            {getLinks()}
        </div>
      )
}

export default Sidebar
