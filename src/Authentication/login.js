
import React, {useState} from "react";
export default function () {
const [useremail, setEmailname] = useState("");
const [password, setPassword] = useState("");

const submitForm = e => {
e.preventDefault();

PostData({
  "email":useremail,
  "password":password
  }).then(result => {
  console.log(result);
});
console.log("username", useremail);
console.log("password", password);
};
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submitForm}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={e => setEmailname(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}
export function PostData(userData) {
  let BaseUrl = "http://localhost:5000/login";
  console.log('check...');
  console.log("userData", userData);
  return new Promise((resolve, reject) => {
  fetch(BaseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
     body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(responseJson => {
      resolve(responseJson);
    })
    .catch(error => {
      reject(error);
    });
  })
}