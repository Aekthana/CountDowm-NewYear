import "./App.css";
import useCountdown from "./useCountdown";

function App() {
  const { daysDiff, hoursDiff, minsDiff, secsDiff } = useCountdown();
  return (
    <div className="App">
      <div className="card">
        <div className="box-logo">
          <p className="logo-text">CountDown<img src="/icon/flower.png" alt="" /></p>
        </div>
        <div className="box-text">
          <p className="text">
            {" "}
            <img src="/icon/chip-card.png" alt=""></img>{" "}
            <span>
              {daysDiff} วัน {hoursDiff} ชั่วโมง {minsDiff} นาที {secsDiff}{" "}
              วินาที
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
