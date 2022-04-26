import React from "react"

export default function Main(props){
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1 className="main--title"> Fun facts about React </h1>
            <ul className="main--facts">
                <li> Was first released in 2013 </li>
                <li> Was originally created by Jordan Walke </li>
                <li> Has well over 100k stars on GitHub </li>
                <li> Is maintained by Facebook </li>
                <li> Powers thousands of enterprise apps, including mobile apps </li>
                <li> 
                    <a href ="https://create-react-app.dev/docs/getting-started/" target="_blank" >
                        Create React App
                    </a> is an "easy" way of starting your first React Applications.  </li>
                <li> 
                    Trying to simply copy and paste the React App folder created from the "create react app" quick start guide into
                    a GitHub repository doesn't work as you may have thought. 
                </li>
                <li> 
                    You will also need to do some further <a href="https://github.com/gitname/react-gh-pages" target="_blank"> installation</a>. 
                    These extra steps will also allow you to deploy your website to a GitHub Page! This way you can show off your deployed website to future
                    employers without having to use npm start on your local environment. 
                </li>

            </ul>
        </main>
    )
}