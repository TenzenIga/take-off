import { observer } from "mobx-react-lite";
import { Navigate, useLocation } from "react-router-dom";
import store from "../../store/store";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    
    let location = useLocation();
  
    if (!store.isAuth) {
  
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }
const ProtectedRouteObserver = observer(ProtectedRoute);

export default ProtectedRouteObserver;