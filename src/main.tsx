import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";

import { App } from "./app";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Toaster richColors toastOptions={{ style: { padding: "10px" } }} />
		<App />
	</BrowserRouter>
);
