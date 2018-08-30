import * as React from "react";

import '../styles/Intro.css';

export default class Intro extends React.Component {
  render() {

    return (
      <div className="Intro">
        <p className="description">
          I'm a Master's student at the <b>University of Washington</b>, studying Computer Science & Engineering.<br/>
          There, I am a member of the <b>Interactive Data Lab</b>, directed by Prof. Jeffrey Heer.<br/>
          My interests lie in <em>Data Visualization</em>, <em>Data Science</em>, and <em>User Experience Design</em>.
        </p>
      </div>
    )
  }
}