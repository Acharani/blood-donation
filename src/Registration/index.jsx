import axios from "axios";
import { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    bloodGroup: "",
    location: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log("Button clicked");
    const res = await axios.post("http://localhost:5000/donors", form);
    alert(res.data);
  };

  return (
    <>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="bloodGroup" onChange={handleChange} placeholder="Blood Group" />
      <input name="location" onChange={handleChange} placeholder="Location" />
      <input name="phone" onChange={handleChange} placeholder="Phone" />

      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Register;