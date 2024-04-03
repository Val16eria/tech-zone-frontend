import { FC } from "react";

import { HeaderContent } from "@widgets/header";
import { Footer } from "@widgets/footer";
import { Main } from "@pages/main";

import "./styles/index.css";


const App: FC = () => {
  return (
    <>
      <HeaderContent/>
      <Main/>
      <Footer />
    </>
  );
};

export { App };
