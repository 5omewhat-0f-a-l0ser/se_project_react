import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/signin" replace />;
  }
  return children;
  
}


//Had to go back to the lessons for this one!
export default ProtectedRoute;