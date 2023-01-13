const boxStyles = {
  border: "1px solid black",
  backgroundColor: "red",
  width: `100px`,
  height: `100px`,
};

const Display = ({ boxes }) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Here are the boxes:</h5>
        <div className="d-flex flex-wrap gap-2">
          {boxes.length > 0 &&
            boxes.map((box, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    ...boxStyles,
                    backgroundColor: box.color,
                    width: `${box.dimensions}px`,
                    height: `${box.dimensions}px`,
                  }}
                ></div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Display;
