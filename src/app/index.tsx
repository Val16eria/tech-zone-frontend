import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import { Header } from "@widgets/header";
import { Router } from "@router/index.tsx";
import { Footer } from "@widgets/footer";

import "./styles/index.css";

const App: FC = () => {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <Header/>
      <div className="custom-container">
        <Router />
      </div>
      <Footer />
    </NextUIProvider>
  );
};

export { App };
