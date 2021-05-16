import React, { useState } from "react";

import classes from "../app.module.scss";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      age: age,
      id: +new Date().getSeconds().toString(),
    };
    props.addHandler(userData);
    setUsername("");
    setAge("");
  };

  return (
    <form className={classes.inputForm} onSubmit={submitHandler}>
      <div className={classes.input}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Name here..."
          onChange={usernameHandler}
          value={username}
          required
        />
      </div>
      <div className={classes.input}>
        <label>Age (Years)</label>
        <input
          type="number"
          placeholder="Enter Age here..."
          onChange={ageHandler}
          value={age}
          required
        />
      </div>
      <button type="submit" className={classes.addBtn}>
        Add Button
      </button>
    </form>
  );
};

export default Form;
