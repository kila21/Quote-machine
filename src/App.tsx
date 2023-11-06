import { useEffect, useState } from "react";
import "./App.css";
import { twiterIcon } from "./assets/icons/icons";
import axios from "axios";
import { ApiResponse, ResponseData } from "./types/ApiResponse";
import { StateData } from "./types/stateData";

function App() {
  const _API = "https://quotes15.p.rapidapi.com/quotes/random/";
  const _APIKEY = "a46de942a5msh87af6bca438e4d4p1e6cadjsn5903f4c6f6cd";
  const [data, setData] = useState<StateData | null>(null);

  useEffect(() => {
    getNewQuote();
  }, []);

  const getNewQuote = () => {
    axios
      .get(_API, {
        params: {
          category: "all",
          count: "1",
        },
        headers: {
          "X-RapidAPI-Key": _APIKEY,
          "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
        },
      })
      .then((res: ApiResponse<ResponseData>) => {
        const newData: StateData = {
          name: res.data.originator.name,
          quote: res.data.content,
        };
        setData(newData);
      });
  };

  return (
    <>
      <div className="container">
        <div id="quote-box">
          {/*text and author */}
          <div className="quote-box__text">
            <h1 id="text">{data?.quote}</h1>
            <p id="author">
              <span>- </span> {data?.name}
            </p>
          </div>
          {/* buttons for new qutes*/}
          <div className="button-container">
            <a target="_top" href="twitter.com/intent/tweet" id="tweet-quote">
              {twiterIcon}
            </a>
            <button onClick={getNewQuote} id="new-quote">
              New quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
