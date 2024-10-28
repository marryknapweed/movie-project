import { Sidebar } from "../sidebar";
import { Header } from "../header";
import { Outlet } from "react-router-dom";
import "./index.scss";

export const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
