import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
import EmailVerification from "./emailVerification";
import RoleSelectionModal from "./roleSelectionModal";
import QuestionForm from "./questionForm";
import Profile from "./Profile";
import commonActions from "../actions/common";
import Loader from "./circularProgress";
import ErrorPage from "./errorPage";
import AdminHome from "./AdminHome";

const Home = () => {
  const user = useSelector((state) => state.user);
  const subjects = useSelector((state) => state.common.subjects);
  const hasError = useSelector((state) => state.common.hasError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commonActions.getSubjects());
  }, []);
  
  const renderContent = () => {
    const is_verified = get(user, "is_verified", false);
    const isLoading = get(user, "isLoading", false);
    const role = get(user, "role", "all");

    if (isLoading && !hasError) {
      return <Loader />;
    }
    if(hasError){
      return <ErrorPage isNotfound = {false}/>;
    }
    if (!is_verified) {
      return <EmailVerification />;
    }
    if (role === "all") {
      return <RoleSelectionModal />;
    }
    if (role === "student") {
      return <QuestionForm />;
    }  else if (role === "admin") {
      return <AdminHome/>;
    } else {
      return subjects.categories.length > 0 && <Profile isEditable={true} />;
    }
  };

  return (
    <div className="home-container">
      <div className="bg" />
      <div style={{ position: "relative", zIndex: "2" }}>{renderContent()}</div>
    </div>
  );
};

export default Home;
