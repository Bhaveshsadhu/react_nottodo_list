import { useState } from "react";
import { BadList } from "./BadList";

export const EntryTable = ({ entrylist }) => {
  const [badentry, setBadEntry] = useState([]);

  const handleOnClick = (item) => {
    item.type = "bad";
    console.log(item);
    setBadEntry([...badentry, item]);
  };
  const updatedEntryList = (item) => {
    // entrylist.push(item);
  };
  return (
    <div className="tables p-5">
      <div className="row d-flex justify-content-center mt-3 p-2 border border-primary">
        <div className="col-md-6">
          <h2>Entry Table</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Task</th>
                <th scope="col">Hours</th>
                <th scope="col" className="text-end me-2">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {entry.map((item, i) => {
                return item.type === "entry" ? (
                  <tr key={i + 1}>
                    <th scope="row">{i + 1}</th>
                    <td>{item.task}</td>
                    <td>{item.hours}</td>
                    <td className="text-end">
                      <button className="btn btn-danger me-2">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleOnClick(item)}
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </td>
                  </tr>
                ) : (
                  ""
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <BadList
            badentry={badentry}
            updatedEntryList={updatedEntryList}
          ></BadList>
        </div>
      </div>
    </div>
  );
};
