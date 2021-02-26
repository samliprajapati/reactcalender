import "./App.css";
import "antd/dist/antd.css";
import UserListView from "./Container/UserListView";
import { Route, Switch } from "react-router-dom";
import CalenderView from "./Container/CalenderView";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={UserListView} />
        <Route exact path="/Calender" component={CalenderView} />
      </Switch>
    </div>
  );
}

export default App;
