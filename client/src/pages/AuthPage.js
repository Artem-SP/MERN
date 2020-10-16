import React from "react";

export const AuthPage = () => {
const [form, setForm] = useState(initialState{
  email: '', passwopd: ''
})

const chsngeHandler = event => {
  setForm({...form, [event.trget.name]: event.target.value})
}



  return (
    <div className="row">
      <div className="col s6 ofset-s3">
        <h1>Cut link</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Autorisation</span>
            <div>
              <div class="input-field">
                <input
                  placeholder="Input email"
                  id="email"
                  type="text"
                  name="email"
                  className="yellow-input"
                  onChange={chsngeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div class="input-field">
                <input
                  placeholder="Input password"
                  id="password"
                  type="password"
                  name="passwopd"
                  className="yellow-input"
                  onChange={chsngeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button className="btn yellow darken-4" style={{ marginRight: 10 }}>
              LogIn
            </button>
            <button className="btn grey lighttn-1 black-texr">SignIn</button>
          </div>
        </div>
      </div>
    </div>
  );
};
