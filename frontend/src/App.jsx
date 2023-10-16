// Import necessary dependencies and components
import './App.css'; // Import styles for the app
import Home from './pages/Home'; // Import the Home component

import AddStaff from './pages/StaffManagement/AddStaff'; // Import AddStaff component
import UpdateStaff from './pages/StaffManagement/UpdateStaff'; // Import UpdateStaff component
import StaffManagement from './pages/StaffManagement/StaffManagement'; // Import StaffManagement component

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import routing components from react-router-dom
import { ThemeProvider } from '@mui/material'; // Import ThemeProvider from Material-UI
import { theme } from './theme'; // Import a custom theme
import AddIncome from './pages/SalaryManagement/AddIncome'; // Import AddIncome component
import EditIncomePage from './pages/SalaryManagement/EditIncomePage'; // Import EditIncomePage component
import ViewIncomePage from './pages/SalaryManagement/ViewIncomePage'; // Import ViewIncomePage component
import AddInspector from './pages/SalaryManagement/AddInspector'; // Import AddInspector component
import EditInspector from './pages/SalaryManagement/EditInspector'; // Import EditInspector component
import ViewInspector from './pages/SalaryManagement/ViewInspector'; // Import ViewInspector component

import Login from './pages/Login/Login'; // Import the Login component

// Define the main App component`
function App() {
  return (
    <ThemeProvider theme={theme}>
      {' '}
      {/* Apply the custom theme to the app */}
      <Router>
        {' '}
        {/* Set up the routing with BrowserRouter */}
        <Routes>
          {' '}
          {/* Define the routes for the app */}
          <Route
            path="/"
            element={
              <LoggedIn>
                <Login />
              </LoggedIn>
            }
          />{' '}
          {/* Display the Login component for the root path if a user is not logged in */}
          <Route path="/" element={<Home />} /> {/* Display the Home component for the root path */}
          <Route path="/home" element={<Home />} />{' '}
          {/* Display the Home component for the '/home' path */}
          <Route path="/staff-management" element={<StaffManagement />} />{' '}
          {/* Display the StaffManagement component for the '/staff-management' path */}
          <Route path="/staff-management/add-staff-member" element={<AddStaff />} />{' '}
          {/* Display the AddStaff component for the '/staff-management/add-staff-member' path */}
          <Route path="staff-management/update-member" element={<UpdateStaff />} />{' '}
          git config user.name       {/* Display the UpdateStaff component for the '/staff-management/update-member' path */}
          {/* Transport Management */}
          <Route path="/transport-management" element={<ViewIncomePage />} />{' '}
          {/* Display the ViewIncomePage component for the '/transport-management' path */}
          <Route path="/transport-management/add-income" element={<AddIncome />} />{' '}
          {/* Display the AddIncome component for the '/transport-management/add-income' path */}
          <Route path="/transport-management/add-inspector" element={<AddInspector />} />{' '}
          {/* Display the AddInspector component for the '/transport-management/add-inspector' path */}
          <Route path="/transport-management/inspector" element={<ViewInspector />} />{' '}
          {/* Display the ViewInspector component for the '/transport-management/inspector' path */}
          <Route path="/transport-management/edit-inspector/:id" element={<EditInspector />} />{' '}
          {/* Display the EditInspector component for the '/transport-management/edit-inspector/:id' path */}
          <Route path="/transport-management/edit-income/:id" element={<EditIncomePage />} />{' '}
          {/* Display the EditIncomePage component for the '/transport-management/edit-income/:id' path */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; // Export the App component as the default export

// const LoggedOut = ({ children }) => {
//   if (localStorage.getItem('token')) {
//     return children;
//   } else {
//     return <Navigate to="/" />;
//   }
// };

// Define a component to handle the case when a user is logged in
export const LoggedIn = ({ children }) => {
  if (localStorage.getItem('token')) {
    return <Navigate to="/home" />; // Redirect to the Home page if the user is logged in
  } else {
    return children; // Render the children components if the user is not logged in
  }
};
