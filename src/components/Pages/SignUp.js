
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useNavigate } from "react-router-dom";

function SignUpForm() {



    const [usersEmails,setUsersEmails] = useState([])
    let [msg,setMsg] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/users/emails')
            const json = await response.json()
            setUsersEmails(json)
        }
        fetchData()
    }, [])


  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });


  async function handleSubmit(e) {
     e.preventDefault();
  
    // Get the email from the user state
    const { email } = user;
  
    // Check if the email is already in the users array
    if (usersEmails.includes(email)) {
      // If yes, set an error message in the state
      setUser({ ...user, email:''  });
      setMsg({error:"This email already exists"})
    } else {
      // If no, proceed with the fetch request
      await fetch(`http://localhost:4005/api/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      navigate("/");
    }
  }
  
  



  return (
    <main>
      <h1>Sign Up</h1>
      {msg.error && <p>{msg.error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              required
              defaultValue={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              className="form-control"
              id="firstName"
            />
          </div>
          <div className="col-sm-6 form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              required
              defaultValue={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              className="form-control"
              id="lastName"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              defaultValue={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="form-control"
              id="email"
            />
          </div>
          <div className="col-sm-6 form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              defaultValue={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="form-control"
              id="password"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label htmlFor="role">Account Type </label>
            <select
              id="role"
              required
              value={user.role} // set the value of the select to user.role
              onChange={(e) => setUser({ ...user, role: e.target.value })} // update the user.role state when the select changes
              className="form-control"
            >
              <option selected="selected" value='buyer'>Buyer</option>
              <option value='seller'>Seller</option>
            </select>
          </div>
        </div>
        <input className="btn btn-primary" type="submit" value="Sign Up" />
      </form>
    </main>
  );
}

export default SignUpForm;