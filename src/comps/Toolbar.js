import { Link } from "react-router-dom";

const Toolbar = ({ getCart, getUser }) => {
  return (
    <div className="toolbar">
      {getUser.length == 1 ? (
        <>
          <Link to="/create">Create Product</Link>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({getCart.length})</Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
};

export default Toolbar;
