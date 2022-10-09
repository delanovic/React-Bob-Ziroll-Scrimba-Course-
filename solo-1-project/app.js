import React from "react"
import Info from "./components/info"
import About from "./components/about"
import Interests from "./components/interests"
import Footer from "./components/footer"

export default function Page() {
    return (
        <div className="container">
            <Info/>
            <div className="main">
            <About />
            <Interests />
            </div>
            <Footer />
        </div>
    )
}