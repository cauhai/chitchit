import React from 'react';
import useFetch from "./useFetch";

const ExampleMyHook = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div className="example" style={{ maxHeight: '10rem', overflow: 'auto' }}>
      <h3>Using my hook!</h3>
      <h3>Data from https://jsonplaceholder</h3>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
};

export default ExampleMyHook;
