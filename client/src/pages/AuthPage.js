import React, {useContext, useEffect,useState} from "react";
import {useHttp} from '../hooks/http.hook'
import {useMassage} from '../hooks/massage.hook'
import {AuthContext} from '../auth/AuthContext'


export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const massage = useMassage()
  const {loading, request, error, clearError} = useHttp();
  const [form, setForm] = useState(initialState: {
  email: '', passwopd: ''
})

useEffect(effect: () => {
  massage(error)
  clearError()
}, depts: [error, massage, clearError])

const chsngeHandler = event => {
  setForm({...form, [event.trget.name]: event.target.value})
}

const registreHandler = async => {
  try {
    const data = await request('/apiauth/register', 'POST', {...form}) 
    auth.login(data.token, data.userId)
  } catch (e) {}

}

const loginHandler = async => {
  try {
    const data = await request('/apiauth/login', 'POST', {...form}) 
    massage(data.massage)
  } catch (e) {}

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
            <button 
            className="btn yellow darken-4"
            style={{ marginRight: 10 }}
            disabled={loading}
           onClick={loginHandler} 
            >
              LogIn
            </button>
            <button 
            className="btn grey lighttn-1 black-texr"
            onClick={registreHandler}
            disabled={loading}
            >
              SignIn
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
