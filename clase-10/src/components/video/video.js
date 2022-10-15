import React, { Component } from "react";

/*
import video from '../../assets/video/background_video.mp4';

export default class Video extends Component {
    render() {
        return (
            <div>
                <h2>Video</h2>
                <video width="auto" height="auto" controls autoPlay={true} muted loop>
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }
}
*/

export default function Video(props) {
    return (
        <div>
            <h2>Video</h2>
              <video width="auto" height="auto" controls autoplay="true" muted loop>
                <source src={props.fuente} type="video/mp4" />
                Your browser does not support the video element.
            </video>
        </div>
    );
}


