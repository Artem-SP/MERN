import React from "react";

export const Loader = () => (
  <div
    style={{ display: "flex", justyfycontant: "center", paddingTop: "2rem" }}
  >
    <div class="spinner-layer spinner-red">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="gap-patch">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
);
