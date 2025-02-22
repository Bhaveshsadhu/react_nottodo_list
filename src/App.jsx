import { useState } from "react";
import "./App.css";
import { EntryTable } from "./Components/EntryTable";
import { Form } from "./Components/Form";
import { TotalHours } from "./Components/TotalHours";

function App() {
  const [entrylist, setEntryList] = useState([]);
  const objEntry = (data) => {
    setEntryList([...entrylist, data]); //object inside array
    // console.log(entrylist);
  };
  return (
    <>
      <div className="wrapper">
        <h1 style={{ textAlign: "center" }}>Not TODO List</h1>
        <Form objEntry={objEntry}></Form>
        {/* tables */}

        <EntryTable entrylist={entrylist}></EntryTable>

        <TotalHours></TotalHours>
      </div>
    </>
  );
}

export default App;
