import React from "react";

import OutputItem from "./OutputItem";

const OutputItemList = (props) => {
  console.log(props);
  const onDelete=(id)=>{
    props.onDeleteHandler(id)
  }
  return (
    <div>
      {props.data.map((el) => {
        return (
          <OutputItem
            key={el.id}
            username={el.username}
            age={el.age}
            id={el.id}
            delete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default OutputItemList;
