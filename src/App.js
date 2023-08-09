import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Resources from "./pages/Resources";
import Config from "./pages/Config";
import Events from "./pages/Events";

function App() {
    return (
        <Router>
            <SideBar>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/Resources" element={<Resources />} />
                    <Route path="/Events" element={<Events />} />
                    <Route path="/config" element={<Config />} />
                    <Route path="*" element={<> not found</>} />
                </Routes>
            </SideBar>
        </Router>
    );
}

export default App;