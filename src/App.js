import "./App.css";
import Header from "./components/Header";
import TemplateCard from './components/TemplateCard'
import Pagination from "./components/Pagination";
function App() {
  return (
    <div className="App">
      <Header />
      <TemplateCard/>
      <Pagination/>
    </div>
  );
}

export default App;
