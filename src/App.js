import Header from "./components/Header";
import Form from "./components/Form";

import "./styles/global.css";

function App() {
  return (
    <div>
      <Header/>
      <div className="content">
        <h1>Busca de personagens</h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
