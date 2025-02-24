import { useState } from "react";

export const Form = ({ formDataList }) => {
  const [formdata, setFromData] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFromData({
      ...formdata,
      [name]: value,
      type: "entry",
      id: generateRandomId(),
    });
  };

  function generateRandomId(length = 10) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";
    for (let i = 0; i < length; i++) {
      randomId += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return randomId;
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(formdata);
    formDataList(formdata);
  };

  return (
    <div className="mt-5 p-5 ">
      <form onSubmit={handleOnSubmit}>
        <div className="row g-2">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Task"
              aria-label="Task"
              name="task"
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Hours"
              aria-label="Hours"
              name="hours"
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};
