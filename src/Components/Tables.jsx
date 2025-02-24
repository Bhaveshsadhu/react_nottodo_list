export const Tables = ({
  entryyTaskList,
  badtaskList,
  setTaskList,
  deleteTask,
}) => {
  function SwitchTask(item, type) {
    setTaskList(item, type);
  }

  return (
    <div className="tables d-flex justify-content-center g-2 row p-4">
      <div className="entryTable me-2 col-md-6">
        <h2>Entry Table</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task</th>
              <th scope="col">Hours</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {entryyTaskList.map((item, i) => (
              <tr key={item.id}>
                <th scope="row">{i + 1}</th>
                <td>{item.task}</td>
                <td>{item.hours}</td>
                <td className="text-end">
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => deleteTask(item.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => SwitchTask(item, "bad")}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="badlisttable col-md-6">
        <h2>BadList Table</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task</th>
              <th scope="col">Hours</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {badtaskList.map((item, i) => (
              <tr key={item.id}>
                <th scope="row">{i + 1}</th>
                <td>{item.task}</td>
                <td>{item.hours}</td>
                <td className="text-end">
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => deleteTask(item.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => SwitchTask(item, "entry")}
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
