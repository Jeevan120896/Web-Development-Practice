import React, { useEffect } from "react";
import axios from "axios";

const App = () => {

  const getData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const postData = async () => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/todos", {
        userId: 1,
        title: "NYB Infotech",
        completed: false
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const putData = async () => {
    try {
      const response = await axios.put("https://jsonplaceholder.typicode.com/todos/1", {
        userId: 1,
        title: "Vankayalapati Jeevan Kumar",
        completed: true
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const patchData = async () => {
    try {
      const response = await axios.patch("https://jsonplaceholder.typicode.com/todos/1", {
        title: "Vankayalapati Jeevan"
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Axios in React</h2>
      <button onClick={getData}>GET</button>
      <button onClick={postData}>POST</button>
      <button onClick={putData}>PUT</button>
      <button onClick={patchData}>PATCH</button>
    </div>
  );
};

export default App;