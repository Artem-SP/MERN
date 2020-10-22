import React, { useState } from "react";

export const CreatePage = () => {
  const [link, setLink] = useState((initialState: ""));
  return (
    <div ClassName="row">
      <div className="col s8 offset-s2" style={{ paddingTop: "2rem" }}>
        <div class="input-field">
          <input
            placeholder="Input link"
            id="link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.targetvalue)}
          />
          <label htmlFor="email">Email</label>
        </div>
      </div>
    </div>
  );
};
