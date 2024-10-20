import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WasteCollectorProfile from "./views/collector/WasteCollectorProfile";
import WMA from "./components/wma/WMA";
import Admin from "./components/admin/Admin";
import Resident from "./components/resident/Resident";
import Contoller from "./components/collector/Contoller";
import ScheduleCollection from "./components/wma/ScheduleCollection";
import ScheduleForm from "./components/wma/ScheduleForm";
import ScheduleDisplay from "./components/wma/ScheduleDisplay";
import ScheduleTable from "./components/wma/ScheduleTable";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/wma" element={<WMA />} />
        
        <Route path="/schedule" element={<ScheduleCollection/>} />
        <Route path="/sform" element={<ScheduleForm/>} />
        <Route path="/sdisplay" element={<ScheduleDisplay/>} />
        <Route path="/stable" element={<ScheduleTable/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/resident" element={<Resident />} />
        <Route path="/collector/" element={<WasteCollectorProfile />} >
          <Route path="home" element={<WasteCollectorProfile />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;