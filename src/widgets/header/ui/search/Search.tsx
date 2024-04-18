import { FC } from "react";
import {
  Button,
  Image,
  Input
} from "@nextui-org/react";

import SearchIcon from "@assets/svg/search-icon.svg";
import "./Search.scss";

const Search: FC = () => {
  return (
    <Input
      type="search"
      color="primary"
      variant="bordered"
      placeholder="Поиск по сайту"
      className="search"
      endContent={
        <Button className="search__icon" isIconOnly color="primary">
          <Image
            radius="none"
            src={SearchIcon}
            alt="search"
          />
        </Button>
      }
    />
  );
};

export { Search };
