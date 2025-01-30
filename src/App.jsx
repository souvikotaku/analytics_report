import { Routes, Route, Navigate,useLocation } from "react-router-dom";
import { Dashboard} from "@/layouts";
import IndividualDetail from './pages/dashboard/individualDetail'; // Import the component for analysis


function App() {

  const { pathname } = useLocation();
    const [layout, page,inner] = pathname.split("/").filter((el) => el !== "");
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="*" element={<Navigate to={`/dashboard/${page || 'geographicanalysis'}`} replace />} />
      <Route path={`/dashboard/${page}/:state`} element={<IndividualDetail />} />
    </Routes>
  );
}

export default App;
