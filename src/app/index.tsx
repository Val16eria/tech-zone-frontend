import { FC } from "react";
import { useNavigate} from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import { Header } from "@widgets/header";
import { Router } from "@router/Router.tsx";
import { Footer } from "@widgets/footer";

import "./styles/index.css";

const App: FC = () => {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <Header/>
      <Router />
      <Footer />
    </NextUIProvider>
  );
};

export { App };
