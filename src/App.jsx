import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import PaymentHistory from './pages/dashboard/paymentsHistory'; // Import the component for analysis


function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/geographicanalysis" replace />} />
      <Route path="/dashboard/geographicanalysis/:state" element={<PaymentHistory />} />
    </Routes>
  );
}

export default App;
