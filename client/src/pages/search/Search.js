import React, { useState } from "react";
import SearchForm from "./SearchForm";
import DisplayTweets from "./DisplayTweets";
import "./Search.css";
import axios from "axios";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [tweets, setTweets] = useState([]);
  const [inputSelected, setInputSelected] = useState();
  const [messageStyle, setMessageStyle] = useState();

  function getInputValue(e) {
    setInputValue(e.target.value);
  }

  function handleSearchClick(e) {
    e.preventDefault();

    if (e.target.id === "username") {
      axios
        .get(`api/username/?string=${inputValue}`, {})
        .then((res) => {
          renderInputMessage(inputValue, "success");
          setTweets(res.data);
        })
        .catch((err) => {
          inputValue
            ? renderInputMessage(`No results for "${inputValue}"`, "warning")
            : renderInputMessage("Cant have an empty search", "error");

          console.log("error username response client side", err);
        });
    } else {
      axios
        .get(`api/content/?string=${inputValue}`, {})
        .then((res) => {
          if (inputValue && res.data.statuses.length > 0) {
            renderInputMessage(inputValue, "success");
            setTweets(res.data.statuses);
          } else if (inputValue) {
            renderInputMessage(`No results for "${inputValue}"`, "warning");
          }
        })
        .catch((err) => {
          if (inputValue) {
            renderInputMessage("Cant have an empty search", "error");
          }
          console.log("error content response client side", err);
        });
    }
    setInputValue("");
  }

  function renderInputMessage(message, messageStatus) {
    setInputSelected(message);
    setMessageStyle(messageStatus);
  }

  return (
    <div id="search-container">
      <SearchForm
        handleSearchClick={handleSearchClick}
        getInputValue={getInputValue}
        inputValue={inputValue}
        inputSelected={inputSelected}
        messageStyle={messageStyle}
      />
      <div id="tweets">
        {tweets.map((tweet) => (
          <DisplayTweets tweet={tweet} key={tweet.id} />
        ))}
      </div>
    </div>
  );
}

export default Search;
