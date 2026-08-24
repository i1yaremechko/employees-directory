import { Route, Routes } from 'react-router-dom';
import { EmployeeProfilePage } from '@pages/EmployeeProfilePage';
import { EmployeesPage } from '@pages/EmployeesPage';
import { NotFoundPage } from '@pages/NotFoundPage';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<EmployeesPage />} />
        <Route path="/employees/:id" element={<EmployeeProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
