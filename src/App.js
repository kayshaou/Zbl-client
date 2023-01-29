import StatusTracker from "./components/StatusTracker";
import Header from "./components/Header";
import Order from "./components/Order";
import Bill from "./components/Bill";
import "./dist/output.css";
import AuthenticateRequest from "./components/AuthenticateRequest";

function App() {
  return (
    <div>
      <Header />
      <AuthenticateRequest />
      <Order />
      <StatusTracker />
      <Bill />
    </div>
  );
}

export default App;
