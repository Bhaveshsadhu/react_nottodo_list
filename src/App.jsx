import { useState } from "react";
import "./App.css";
import { Form } from "./Components/Form";
import { Tables } from "./Components/Tables";
import { TotalHours } from "./Components/TotalHours";

function App() {
  const [entryyTaskList, setEntryTaskList] = useState([]);
  const [badtaskList, setBadTaskList] = useState([]);
  const [totalhours, setTotalHours] = useState(0);
  const [badHours, setBadHours] = useState(0);

  const countTotalHours = (taskList) => {
    const total = taskList.reduce(
      (acc, item) => acc + parseInt(item.hours, 10),
      0
    );
    setTotalHours(total);
  };

  const countBadHours = (taskList) => {
    const total = taskList.reduce(
      (acc, item) => acc + parseInt(item.hours, 10),
      0
    );
    setBadHours(total);
  };

  const formDataList = (data) => {
    const newTotalHours =
      entryyTaskList.reduce((acc, item) => acc + parseInt(item.hours, 10), 0) +
      parseInt(data.hours, 10);

    if (parseInt(data.hours, 10) > 168 || newTotalHours > 168) {
      alert("Total hours cannot exceed 168!");
      return;
    }

    setEntryTaskList((prevList) => {
      const updatedList = [...prevList, data];
      countTotalHours(updatedList);
      return updatedList;
    });
  };

  const setTaskList = (item, type) => {
    if (type === "entry") {
      setEntryTaskList((prevList) => {
        const updatedList = [...prevList, item];
        countTotalHours(updatedList);
        return updatedList;
      });

      setBadTaskList((prevList) => {
        const updatedList = prevList.filter((a) => a.id !== item.id);
        countBadHours(updatedList);
        return updatedList;
      });
    } else if (type === "bad") {
      setBadTaskList((prevList) => {
        const updatedList = [...prevList, item];
        countBadHours(updatedList);
        return updatedList;
      });

      setEntryTaskList((prevList) => {
        const updatedList = prevList.filter((a) => a.id !== item.id);
        countTotalHours(updatedList);
        return updatedList;
      });
    }
  };

  const deleteTask = (id) => {
    setEntryTaskList((prevList) => {
      const updatedList = prevList.filter((task) => task.id !== id);
      countTotalHours(updatedList);
      return updatedList;
    });

    setBadTaskList((prevList) => {
      const updatedList = prevList.filter((task) => task.id !== id);
      countBadHours(updatedList);
      return updatedList;
    });
  };

  return (
    <div className="wrapper">
      <Form formDataList={formDataList} />
      <Tables
        entryyTaskList={entryyTaskList}
        badtaskList={badtaskList}
        setTaskList={setTaskList}
        deleteTask={deleteTask}
      />
      <TotalHours totalhours={totalhours} badHours={badHours} />
    </div>
  );
}

export default App;
