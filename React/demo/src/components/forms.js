import React from "react";
import { useState } from "react";

function Forms() {
  let [formData, setFormData] = useState({});
  let [imagelink, setImageLink] = useState(null);

  //   function formsubmit(event) {
  //     event.preventDefault();
  //     let { names, values } = event.target;
  //     setFormData({ ...formData, [names]: values });
  //     console.log(formData);
  //   }

  let formsubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  let imagefile;
  function imagerender(e) {
    imagefile = e.target.files[0];
    setImageLink(URL.createObjectURL(imagefile));
    console.log(imagefile);
    
  }
  return (
    <div>
      <form>
        <label>First Name:</label>
        <input type="text" name="fname" onChange={formsubmit} />
        <br />
        <label>Last name:</label>
        <input type="text" name="lname" onChange={formsubmit} />
        <br />
        <label>Email:</label>
        <input type="email" name="email" onChange={formsubmit} />
        <br />
        <input type="file" accept="image/*" onChange={imagerender} />
        <input type="submit" onClick={formsubmit} />
      </form>

      <img src={imagelink} alt="Varun" height={"300px"} /> <button onClick={imagerender}>Change</button>
    </div>
  );
}

export default Forms;
