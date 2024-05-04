import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Form = ({ titleButton, onSubmit, initialValue }) => {
    const navigate = useNavigate()
  const [user, setUser] = useState({
    name: initialValue?.name || "",
    city: initialValue?.city || "",
    email: initialValue?.email || "",
    username: initialValue?.username || "",
    website: initialValue?.website || "",
  });
const handleChange = (e)=>{
const {name, value} = e.target
setUser({
    ...user,
    [name]: value
})
}
const handleUser = () =>{
    onSubmit(user)
    navigate("/tableUsersPage")
}

  return (
    <div className="container">
      <div className="container-form">
        <div className="form-element">
          <form onChange={handleChange}>
            <input type="text" placeholder="Name" value={user.name} name="name" />
            <input type="email" placeholder="email"  value={user.email} name="email"/>
            <input type="text" placeholder="Gender"  value={user.city} name="city"/>
            <input type="text" placeholder="Username"  value={user.username} name="username" />
            <input type="text" placeholder="Website"  value={user.website} name="website" />
            <button onClick={handleUser}>{titleButton}</button>
          </form>
        </div>
      </div>
    </div>
  );
};
