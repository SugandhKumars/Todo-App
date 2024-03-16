import { Provider } from "react-redux";
import Navbar from "./Components/Navbar";
import Store from "./Components/Store/Store";

function App() {
  return (
    <>
      <Provider store={Store}>
        <Navbar />
      </Provider>
    </>
  );
}

export default App;
