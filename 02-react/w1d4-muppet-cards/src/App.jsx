import MuppetCard from "./components/MuppetCard";
import muppets from "./data/muppets.js";

const App = () => {
  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">App</h2>
          {muppets.map((muppet, idx) => (
            <MuppetCard
              name={muppet.name}
              occupation={muppet.occupation}
              age={muppet.age}
              location={muppet.location}
              image={muppet.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default App;
