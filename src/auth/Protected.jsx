import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/users/actions/userActions";
import { toast, Toaster } from "react-hot-toast";

const Protected = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loginStatus } = useSelector((state) => state.user);

  useEffect(() => {
    const authToken = localStorage.getItem("token");

    if (authToken) {
      // navigate('/')
      dispatch(getUser());
    } else {
      navigate("/admin/login");
      toast.error("Login required!");
    }
  }, [navigate, dispatch]);

  if (loginStatus === "failed") {
    navigate("/login");
    toast.error("Login required!");
  }

  return (
    <div>
      {/* <SidebarLayout /> */}

      <div id="content">
        {/* <HeaderLayout /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Protected;
