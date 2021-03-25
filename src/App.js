import Layout from "./components/Layout/Layout";
import SeedsBuilder from "./components/SeedsBuilder/SeedsBuilder";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <SeedsBuilder />
      </Layout>
    </div>
  );
}

export default App;