export const BadList = ({ badentry, updatedEntryList }) => {
  const handleOnClick = (item) => {
    item.type = "entry";
    // console.log(item);
    updatedEntryList(item);
  };
  return (
    <div>
      <h2>Bad List</h2>
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
          {badentry.map((item, i) => {
            return item.type === "bad" ? (
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
                    <i className="fa-solid fa-arrow-left"></i>
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
  );
};
