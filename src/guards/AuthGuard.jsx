import { Navigate } from "react-router-dom";

const AuthGuard = ({children}) => {
  const isAuthenticated = false;

  if(isAuthenticated) {
    return <Navigate to='/login' />
  }
  return (
    <>{ children }</>
  )
};

export default AuthGuard;