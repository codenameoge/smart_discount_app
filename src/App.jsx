
import { RouterProvider } from "react-router-dom";
import router from "./router"; 
import { UserProvider } from '../features/auth/pages/UserContext';
import Navbar from '../components/Navbar';
function App() {
  return <RouterProvider router={router} />;
}

export default App;
