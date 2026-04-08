// import { Navigate } from "react-router-dom";
// import { useAuth } from "@/contexts/AuthContext";
// export function ProtectedRoute({ children }: { children: React.ReactNode }) {
//   const { session, loading } = useAuth();

//   if (loading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-background">
//         <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
//       </div>
//     );
//   }

//   if (!session) {
//     return <Navigate to="/login" replace />;
//   }

//   return <>{children}</>;
// }

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ProtectedRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/admin-login");
    }
  }, []);

  return (
    <>
      <Component />
    </>
  );
};

export default ProtectedRoute;
