import "./FormStyles.css";

import React from "react";

const Form = () => {
  return <div className="form">
    <form method="POST" data-netlify="true">
      <label>Нэрээ оруулна уу.</label>
      <input type='text'></input>
      <label>И-Мэйл хаягаа оруулна уу.</label>
      <input type="email"></input>
      <label>Ямар шалтгаанаар холбогдож байгаа вэ?</label>
      <input type='text'></input>
      <label>Дэлгэрэнгүй мэдээлэл бичнэ үү.</label>
      <textarea rows='6' placeholder="Type your message here" />
      <button className="btn">Илгээх</button>
      
    </form>
  </div>;
};

export default Form;
