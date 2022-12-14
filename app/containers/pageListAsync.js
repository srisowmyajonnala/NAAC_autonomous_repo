/* eslint-disable */

import React from "react";
import Loading from "dan-components/Loading";
import loadable from "../utils/loadable";

export const BlankPage = loadable(() => import("./Pages/BlankPage"), {
  fallback: <Loading />,
});
export const DashboardPage = loadable(() => import("./Pages/Dashboard"), {
  fallback: <Loading />,
});
export const ProfileOfTheCollege = loadable(
  () => import("./SSR/Profile Of The College/ProfileOfTheCollege"),
  {
    fallback: <Loading />,
  }
);
export const Criteria1 = loadable(() => import("./QIF/Criteria-1/c1"), {
  fallback: <Loading />,
});
export const Criteria2 = loadable(() => import("./QIF/Criteria-2/c2"), {
  fallback: <Loading />,
});
export const Criteria3 = loadable(() => import("./QIF/Criteria-3/c3"), {
  fallback: <Loading />,
});
export const Criteria4 = loadable(() => import("./QIF/Criteria-4/c4"), {
  fallback: <Loading />,
});
export const Criteria5 = loadable(() => import("./QIF/Criteria-5/c5"), {
  fallback: <Loading />,
});
export const Criteria6 = loadable(() => import("./QIF/Criteria-6/c6"), {
  fallback: <Loading />,
});
export const Login = loadable(() => import("./Pages/Users/Login"), {
  fallback: <Loading />,
});
export const LoginDedicated = loadable(
  () => import("./Pages/Standalone/LoginDedicated"),
  {
    fallback: <Loading />,
  }
);
export const Register = loadable(() => import("./Pages/Users/Register"), {
  fallback: <Loading />,
});
export const ResetPassword = loadable(
  () => import("./Pages/Users/ResetPassword"),
  {
    fallback: <Loading />,
  }
);
export const NotFound = loadable(() => import("./NotFound/NotFound"), {
  fallback: <Loading />,
});
export const NotFoundDedicated = loadable(
  () => import("./Pages/Standalone/NotFoundDedicated"),
  {
    fallback: <Loading />,
  }
);
export const Error = loadable(() => import("./Pages/Error"), {
  fallback: <Loading />,
});
export const Maintenance = loadable(() => import("./Pages/Maintenance"), {
  fallback: <Loading />,
});
export const ComingSoon = loadable(() => import("./Pages/ComingSoon"), {
  fallback: <Loading />,
});
export const Parent = loadable(() => import("./Parent"), {
  fallback: <Loading />,
});
