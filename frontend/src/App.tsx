import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Root from "./pages/Root";

function App() {
  return (
    <BrowserRouter>
      <Root />
      <ToastContainer autoClose={1500} position="top-center" />
    </BrowserRouter>
  );
}

export default App;
