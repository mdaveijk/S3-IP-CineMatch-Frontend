// This is a single match component.
import React from "react";
import placeholderimg from "../assets/placeholder.jpg";


function PotentialMatchCard(props) {
    return (
            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src={placeholderimg} alt="Card" />
                        <span className="card-title">{props.username}</span>
                    </div>
                    <div className="card-content">
                        <p>{props.userlocation}</p>
                    </div>
                    <div className="card-action">
                        <button> Show interest </button>
                    </div>
                </div>
            </div>
    );
}


export default PotentialMatchCard;