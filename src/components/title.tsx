import React from "react";

interface Props {
  name: string;
}

const title: React.FC<Props> = ({ name }) => {
  return <h2>{name}'s todo list</h2>;
};

export default title;
