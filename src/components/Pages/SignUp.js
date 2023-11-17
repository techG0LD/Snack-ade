
import { useState, useEffect } from "react";

function SignUpForm() {



    const [usersEmails,setUsersEmails] = useState([])
    let [msg,setMsg] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('https://snack-ade.onrender.com/api/users/emails')
            // const response = await fetch('http://localhost:4005/api/users/emails')
            const json = await response.json()
            setUsersEmails(json)
        }
        fetchData()
    }, [])

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });


  // async function handleSubmit(e) {
  //    e.preventDefault();
  
  //   // Get the email from the user state
  //   const { email } = user;
  
  //   // Check if the email is already in the users array
  //   if (usersEmails.includes(email)) {
  //     // If yes, set an error message in the state
  //     setUser({ ...user, email:''  });
  //     setMsg({error:"An Account has already been created with this email, Please sign in"})
  //   } else {
  //     // If no, proceed with the fetch request
  //     // await fetch(`http://localhost:4005/api/users/`, {
  //       await fetch(`https://snack-ade.onrender.com/api/users/`, {
  //       method: "POST",
  //       body: JSON.stringify(user),
  //     });
  //     setMsg({error:`Account Created, Please Sign in .`})
  //     // navigate("/");  take to home page
  //   }
  // }
  
  



  return (
    <main>
      <h1>Sign Up</h1>
      {msg.error && <p>{msg.error}</p>}
      
      

      {/* <form onSubmit={handleSubmit} method="POST" action='https://snack-ade.onrender.com/api/users'> */}
      <form  method="POST" action='https://snack-ade.onrender.com/api/users'>
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
              title="Email must be at least 10 characters long"
              pattern=".{10,}"
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
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
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
        <input className="btn navbar-custom" type="submit" value="Sign Up" />
      </form>
    </main>
  );
}

export default SignUpForm;