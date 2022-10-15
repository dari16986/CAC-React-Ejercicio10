import React from "react";

export default function Audio(props) {
    return (
        <div>
            <h2>Audio</h2>
            <audio controls>
                <source src={props.fuente} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}




