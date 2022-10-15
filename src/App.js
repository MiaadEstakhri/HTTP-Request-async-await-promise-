import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout/Layout";
import routers from "./routes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Layout>
        <Routes>
          {routers.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
