import { useState } from "react";
import React from "react";

export default function Textform(props) {
  return (
    <>
      <h1>{props.heading}</h1>
      <div>
        <div class="mb-3">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="20"
          ></textarea>
        </div>
        <button className="btn*primary-btn">Convert text in uppercase</button>
      </div>
    </>
  );
}
