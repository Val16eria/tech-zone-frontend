import {
  FC,
  ChangeEvent,
  useState,
  useRef, KeyboardEvent,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Image,
  Input
} from "@nextui-org/react";

import { CategoryType } from "@features/catalog/lib";
import { getSuggestions } from "@shared/api";

import SearchButtonIcon from "@assets/svg/search-btn-icon.svg";
import "./Search.scss";

const Search: FC = () => {
  const navigate = useNavigate();
  const [suggestion , setSuggestion] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length >= 2) {
      const response = await getSuggestions(value);
      setSuggestion(response.suggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleEnterClick = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSuggestionClick(query);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    if (CategoryType[suggestion as keyof typeof CategoryType]) {
      navigate(`/products/${CategoryType[suggestion as keyof typeof CategoryType]}`);
    } else {
      navigate(`/search/${suggestion}`);
    }
  };

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
            onClick={() => handleSuggestionClick(query)}
          >
            <Image radius="none" src={SearchButtonIcon} alt="search" />
          </Button>
        }
      />
      {showSuggestions && suggestion.length > 0 && (
        <ul className="search__suggestions">
          {suggestion.map((suggestion, index) => (
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
