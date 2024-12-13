import React from "react";

function Contact() {
  let place = [
    "Chennai",
    "Thiruvanmyur",
    "Palavakkam",
    "kottivakkam",
    "Adayar",
  ];

  place.pop()
  place.shift()
  place[5]= "Kerala"
  place[6] = "Banglore"

  console.log(place);
  
  return (
    <div>
      <h1>Contact Us</h1>
      <ol>
        {place.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default Contact;
