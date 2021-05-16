import React, { useState } from "react";

import classes from "./app.module.scss";

import OutputItemList from "./component/OutputItemList";
import Form from "./component/Form";

function App() {
  const [data, setData] = useState([
    { username: "aditiya", age: "21", id: 1 },
    { username: "saket", age: "22", id: 2 },
    { username: "buddha", age: "23", id: 3 },
  ]);

  const addHandler = (inputData) => {
    setData((prevData) => {
      return [inputData, ...prevData];
    });
  };
  console.log(data);

  const deleteHandler = (id) => {
    const updatedData = data.filter((el) => el.id !== id);
    console.log(updatedData);
    setData(updatedData);
  };

  return (
    <>
      <div className={classes.mainContainer}>
        <Form addHandler={addHandler} />
        <div className={classes.outputContainer}>
          <OutputItemList data={data} onDeleteHandler={deleteHandler} />
        </div>
      </div>
    </>
  );
}

export default App;
