import {
  FC,
  ChangeEvent,
  useState,
  useRef,
  useEffect,
  KeyboardEvent
} from "react";
import { useNavigate } from "react-router-dom";
import { Button, Image, Input } from "@nextui-org/react";

import { CategoryType } from "@features/catalog/lib";
import { getSuggestions } from "@shared/api";

import SearchButtonIcon from "@assets/svg/search-btn-icon.svg";
import "./Search.scss";

const Search: FC = () => {
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length >= 2) {
      const response = await getSuggestions(value);
      setSuggestions(response.suggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleEnterClick = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (query) {
      const encodedQuery = encodeURIComponent(query.trim());
      navigate(`/search/${encodedQuery}`);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    const type = CategoryType[suggestion as keyof typeof CategoryType];
    if (type) {
      navigate(`/products/${type}`);
    } else {
      const encodedSuggestion = encodeURIComponent(suggestion.trim());
      navigate(`/search/${encodedSuggestion}`);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target as Node)
    ) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="search z-50" ref={searchContainerRef}>
      <Input
        type="search"
        color="primary"
        variant="bordered"
        placeholder="Поиск по сайту"
        className="search__input"
        value={query}
        onChange={handleInputChange}
        onKeyUp={handleEnterClick}
        endContent={
          <Button
            isIconOnly
            className="search__input_icon"
            color="primary"
            onClick={handleSearch}
          >
            <Image radius="none" src={SearchButtonIcon} alt="search" />
          </Button>
        }
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="search__suggestions">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="search__suggestions_item"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Search };
