import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import './Navigation.css'

function Navigation() {
    useEffect(() => {
        console.log("useEffect - Navigation")
    })
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navigation
