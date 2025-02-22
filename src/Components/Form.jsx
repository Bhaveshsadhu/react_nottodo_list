import { useState } from "react";

export const Form = ({ objEntry }) => {
  const [data, setData] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
      type: "entry",
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
    objEntry(data); //passing object
  };
  return (
    <div className="form d-flex justify-content-center mt-3">
      <form action="javascript:void(0)" onSubmit={handleOnSubmit}>
        <div className="row g-3">
          <div className="col-md-7">
            <input
              type="text"
              className="form-control"
              placeholder="task"
              aria-label="task"
              id="task"
              name="task"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="hours"
              aria-label="hours"
              id="hours"
              name="hours"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="col-md-3 d-grid">
            <button className="btn btn-primary">Add New Task</button>
          </div>
        </div>
      </form>
    </div>
  );
};
