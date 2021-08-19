import React, { useState, useEffect } from "react";
import MemoComponent from "./MemoComponent";

const ParentComponent = () => {
  const [name, setName] = useState("Vishwas");

  useEffect(() => {
    console.log("parent component called");
    const interval = () => {
      setInterval(() => {
        setName("Irfan");
      }, 2000);
    };
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <MemoComponent name={name} />
    </div>
  );
};

export default ParentComponent;
