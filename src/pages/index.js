import React from "react";
import Link from "gatsby-link";

export default () => 
  <div style={{ color: `pink`, margin: '3rem auto', maxWidth: 600}}>
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <div>
      <p>From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
            You and Your Research
          </a>”.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <blockquote>
        <p>
          There is indeed an element of luck, and no, there isn’t. The prepared
          mind sooner or later finds something important and does it. So yes, it
          is luck.{" "}
          <em>
            The particular thing you do is luck, but that you do something is
            not.
          </em>
        </p>
      </blockquote>
      <p>Posted April 09, 2011</p>
    </div>
    <br />
    <div>
      <Link to="/page-2/">Link</Link>
      <Link to="/page-3/">Link 3</Link>
    </div>
    <div>
      <Link to="/counter/">Counter</Link>
    </div>
  </div>
