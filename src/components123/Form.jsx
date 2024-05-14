import { useState } from "react";
import "./Form.css";
function Form() {
  const [FormData, setFormData] = useState({
    userName: "",
    fullName: "",
    passWord: "",
  });
  function onHandleInputChange(event) {
    let fieldName = event.target.name;
    let newVal = event.target.value;
    // console.log(fieldName)
    // console.log(newVal)
    setFormData((currentData) => {
    //   console.log(currentData);
    //   console.log(FormData);
      return { ...currentData, [fieldName]: newVal };
    });
  }
  function onHandleSubmit(event) {
     event.preventDefault();
     console.log(FormData);
     setFormData({
        userName: "",
        fullName: "",
        passWord: "",
      })
  }
  return (
    <>
      <form action="" onSubmit={onHandleSubmit}>
        <div className="container">
          <label htmlFor="username">User Name</label>
          &nbsp; &nbsp;
          <input
            type="text"
            id="username"
            value={FormData.userName}
            onChange={onHandleInputChange}
            name="userName"></input>
          &nbsp; &nbsp;
          <br></br>
          <br></br>
          <label htmlFor="fullname">Full Name</label>
          &nbsp; &nbsp;
          <input
            type="text"
            id="fullname"
            value={FormData.fullName}
            onChange={onHandleInputChange}
            name="fullName"></input>
          &nbsp; &nbsp;
          <br></br>
          <br></br>
          <label htmlFor="password">Password</label>
          &nbsp; &nbsp;
          <input
            type="text"
            id="password"
            value={FormData.passWord}
            onChange={onHandleInputChange}
            name="passWord"></input>
          <br></br>
          <br></br>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}
export default Form;
