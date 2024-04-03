import { FC } from "react";
import { Divider } from "@nextui-org/react";

import { TopHeader } from "./topHeader";
import { BottomHeader } from "./bottomHeader";

import "./Header.scss";

const Header: FC = () => {
  return (
    <div className='header custom-container flex-column'>
      <TopHeader />
      <Divider className='hidden md:flex divider' />
      <BottomHeader />
    </div>
  );
};

export { Header };
