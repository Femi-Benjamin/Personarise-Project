import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/users/actions/userActions";
import { toast } from "react-hot-toast";

const Protected = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loginStatus } = useSelector((state) => state.user);
  const authToken = localStorage.getItem("token");
  useEffect(() => {
    if (authToken) {
      // navigate('/')
      dispatch(getUser());
    } 
    // else {
    //   navigate("/login");
    //   toast.error("Login required!");
    // }
  }, [navigate, dispatch]);

  // if (loginStatus === "failed") {
  //   navigate("/login");
  //   toast.error("Login required!");
  // }

  return (
    <>
    {/* {authToken &&  */}
      
    <div >
      {/* <SidebarLayout /> */}
      {/* <div id="content"> */}
        {/* <HeaderLayout /> */}
        <Outlet />
      {/* </div> */}
    </div>
    {/* } */}
    </>
  );
};

export default Protected;
