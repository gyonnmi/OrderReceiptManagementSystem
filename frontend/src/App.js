import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("/hello")
        .then((response) => {
          return response.json();
        })
        .then(function (data) {
          setMessage(data);
        });
  }, []);

  return (
      <div className="App">
        <Sidebar />

      </div>
  );
}

export default App;
