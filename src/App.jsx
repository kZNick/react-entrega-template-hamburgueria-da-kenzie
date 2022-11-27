import GlobalStyle from "./components/Styles/global";
import React from "react";
import { Buguer } from "./components/Page";
import { ToastContainer,} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Buguer></Buguer>
    </div>
  );
}

export default App;
