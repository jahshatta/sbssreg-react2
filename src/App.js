import { Card } from "antd";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card className="regForm" bodyStyle={{ padding: 0 }}>
        <Form />
      </Card>
    </div>
  );
}

export default App;
