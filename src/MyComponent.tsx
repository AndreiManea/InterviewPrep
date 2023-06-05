import React from "react";

interface MyComponentProps {
  name: string;
}

const MyComponent: React.FC<MyComponentProps> = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

export default MyComponent;
