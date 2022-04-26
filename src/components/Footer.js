import React from "react"

export default function Footer(props){
    return (
        <footer className={props.darkMode ? "dark" : ""}>
            <small> Website developed by Timothy Wang </small>   
             
        </footer>
    )
}