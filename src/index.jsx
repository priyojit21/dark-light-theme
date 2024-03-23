import Navbar from "./components/Navbar";
import { ThemeProvider } from "./theme-context";
import './index.module.css';
function DarkLight() {

  return (
    <div>
      <ThemeProvider>
        <Navbar/>
      </ThemeProvider>
    </div>
  );
}

export default DarkLight;
