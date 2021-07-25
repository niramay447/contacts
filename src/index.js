import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App 
    name = "Sid Border"
    imgSrc="https://avatars.githubusercontent.com/u/54456279?v=4"
    phone="+919426944582"
    email="sb943@gmail.com"
/>, document.getElementById("root"));


//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
