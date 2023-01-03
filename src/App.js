import './App.css';
import { NavbarComponent } from './components/navbar/navbar';
import { BannerComponent } from './components/banner/banner.js';
import { AboutComponent } from './components/about/about.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare);

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BannerComponent />
      <AboutComponent />
    </div>
  );
}

export default App;
