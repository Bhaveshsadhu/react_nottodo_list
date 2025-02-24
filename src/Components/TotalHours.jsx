export const TotalHours = ({ totalhours, badHours }) => {
  //   console.log(totalhours);
  return (
    <>
      <div className="ttlhrs bg-secondary text-center m-auto">
        TotalHours = {totalhours}
      </div>
      <div className="ttlhrs bg-secondary text-center m-auto">
        You could saved = {badHours} hours
      </div>
    </>
  );
};
