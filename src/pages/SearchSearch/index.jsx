import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Text, Button } from "../../components";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SearchSearchPage() {
  const navigate = useNavigate();

  const [searchedContent, setSearchedContent] = useState(() => {
    const storedContent = localStorage.getItem("searchedContent");
    return storedContent ? JSON.parse(storedContent) : [];
  });

  const suggestions = [
    "Giorgio De Chirico",
    "Salvador Dalì",
    "Andy Warhol",
    "Gennaro Guttuso",
    "cars",
    "nature",
    "people",
  ];

  const [showSuggestions, setShowSuggestions] = useState(false);

  const [searchKeyword, setSearchKeyword] = useState("");

  const handleAddKeywordToHistory = () => {
    if (searchKeyword) {
      let newContent = [searchKeyword, ...searchedContent.slice(0, 4)]; // Keep only the latest 5 items
      setSearchedContent(newContent);
      localStorage.setItem("searchedContent", JSON.stringify(newContent));
      setSearchKeyword("");
    }
  };

  const handleInputChange = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
    setShowSuggestions(keyword !== "");
  };

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddKeywordToHistory();
      navigate(`/?keyword=${searchKeyword}`);
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const storedContent = localStorage.getItem("searchedContent");
      setSearchedContent(storedContent ? JSON.parse(storedContent) : []);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Task</title>
        <meta name="description" content="Web site " />
      </Helmet>
      <div className="flex flex-col items-center gap-3 sm:gap-8 bg-white py-4 px-2 sm:p-5 mx-1 sm:mx-5 relative">
        <Link to="/" className="absolute top-2 right-0 h-4 w-4 cursor-pointer">
          <img
            src="images/img_close.svg"
            alt="close"
            className=" h-4 w-4 cursor-pointer"
          />
        </Link>
        <div className="border-b w-full py-2 border-gray-300 block md:hidden"></div>

        <div className="flex justify-between items-center w-full">
          <TextField
            variant="standard"
            placeholder="Cerca"
            className={`tracking-wide text-gray-900 ${
              window.innerWidth < 600
                ? "text-xs sm:text-xl"
                : "text-xl sm:text-4xl"
            }`}
            onChange={handleInputChange}
            value={searchKeyword}
            onKeyDown={handleEnterKeyPress}
            fullWidth
            InputProps={{
              style: { fontSize: window.innerWidth < 600 ? "1.5rem" : "3rem" },
            }}
          />
          {searchKeyword && (
            <button
              onClick={() => setSearchKeyword("")}
              className="absolute right-0 mr-2 sm:mr-5"
            >
              <img
                src="images/img_close.svg"
                alt="close"
                className="h-4 w-4 cursor-pointer"
              />
            </button>
          )}
        </div>
        <div className="w-full flex flex-col">
          <div className="mb-4 sm:mb-8 mt-2 sm:mt-5 flex flex-col items-start">
            <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-4 flex-wrap">
              {searchedContent.map((content, index) => (
                <Button
                  key={index}
                  variant="outline"
                  shape="round"
                  color="undefined_undefined"
                  className=" hover:bg-black hover:text-white border-2 font-semibold uppercase text-sm sm:text-base px-2.5 py-0.5 sm:px-8 sm:py-2"
                  onClick={() => setSearchKeyword(content)}
                >
                  {content}
                </Button>
              ))}
            </div>
            <div className="mt-8 sm:mt-16 flex flex-col items-start">
              <div className="uppercase text-xl sm:text-3xl">Suggerimenti</div>
              {showSuggestions &&
                filteredSuggestions.map((suggestion, index) => (
                  <Text
                    key={index}
                    size={window.innerWidth < 600 ? "sm" : "lg"}
                    as="p"
                    className="mt-8 tracking-wide text-gray-400 cursor-pointer hover:text-gray-900 border-b-2 border-gray-400/20 w-max mb-3"
                    onClick={() => {
                      setSearchKeyword(suggestion);
                      setShowSuggestions(false);
                    }}
                  >
                    {suggestion}
                  </Text>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
