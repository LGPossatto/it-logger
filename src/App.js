import { useEffect } from "react";
import { Provider } from "react-redux";

import store from "./store";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/tech/AddTechModal";
import TechListModal from "./components/tech/TechListModal";

const App = () => {
  useEffect(() => {
    M.AutoInit();
    // eslint-disable-next-line
  }, []);

  return (
    <Provider store={store}>
      <SearchBar></SearchBar>
      <div className="container">
        <Logs></Logs>
        <AddBtn></AddBtn>
        <AddLogModal></AddLogModal>
        <EditLogModal></EditLogModal>
        <AddTechModal></AddTechModal>
        <TechListModal></TechListModal>
      </div>
    </Provider>
  );
};

export default App;
