import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function App(){

    const [dark, setDark] = React.useState(false)
    
    
    function toggleDarkMode(){
        setDark(prevState => !prevState)
    }

    return (
        <body>
            
            <Navbar
                darkMode = {dark}
                toggleDarkMode = {toggleDarkMode}
            />
            <Main 
                darkMode = {dark}
            />
            <Footer
                darkMode = {dark}
            />
        
        </body>
    )
}