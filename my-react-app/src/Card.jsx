
import React from "react";
import profilepic from "./assets/pfp.jpg"

export default function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilepic} alt="profile picture"/>
            <h2 className="card-title">Dany banany</h2>
            <p className="card-text">WE LEARNING REACTJS LES GO, AND I LOVE VIDEO GAMES</p>
        </div>
    );
}

