import MenuComponent from "./components/menu";
import Gallery from "./components/gallery";
import News from "./components/news";
import AddGallery from "./components/add-gallery";
import AddNews from "./components/add-news";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <MenuComponent/>
      <div>
        <Routes>
          <Route exact path="/news" element={<News />} />
          <Route exact path="/gallery" element={<Gallery />} /> 
          <Route exact path="/add-gallery" element={<AddGallery />} /> 
          <Route exact path="/add-news" element={<AddNews />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
