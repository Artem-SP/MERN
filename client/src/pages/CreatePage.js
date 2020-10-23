import React, { useState, useEffect } from "react";
import {useHttp} from '../hooks/http.hook'
import { useHistory } from "react-router-dom";

export const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const {request} = useHttp()
  useEffect( effect: () => {
    window.M.updateTextFields()
  }, deps: [])

  const [link, setLink] = useState((initialState: ""));
  const pressHandler = async event => {
    if (event.key === 'Enter') {
      try {
        const data = await request( 'api/link/generate', 'POST', {from: link}, {Authorization: `Bearer ${auth.token}`})
        history.push(`/detail/${data.link._id}`)
      } catch (e) {}
    }
  }
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
            onKeyPress={pressHandler}
          />
          <label htmlFor="link">Input link</label>
        </div>
      </div>
    </div>
  );
};
