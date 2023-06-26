import MenuComponent from "./components/menu";
import Gallery from "./components/gallery";
import News from "./components/news";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <MenuComponent/>
      <div>
        <Routes>
          <Route exact path="/news" element={<News />} />
          <Route exact path="/gallery" element={<Gallery />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
