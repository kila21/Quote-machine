import "./App.css";
import { twiterIcon } from "./assets/icons/icons";

function App() {
  return (
    <>
      <div className="container">
        <div id="quote-box">
          {/*text and author */}
          <div className="quote-box__text">
            <h1 id="text">
              I attribute my success to this: I never gave or took any excuse.
            </h1>
            <p id="author">
              <span>- </span>Florence Nightingale
            </p>
          </div>
          {/* buttons for new qutes*/}
          <div className="button-container">
            <a target="_top" href="twitter.com/intent/tweet" id="tweet-quote">
              {twiterIcon}
            </a>
            <button id="new-quote">New quote</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
