import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";

function ProtectedRoute({ auth }) {
  return auth ? <Outlet /> : <Navigate to={"/signin"} />;
}

function mapStateToProps(state) {
  return {
    auth: state.currentUser.user,
  };
}

export default connect(mapStateToProps)(ProtectedRoute);
