import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LOGOUT_HANDLER } from "../../actions/login-actions";

import { DASHBOARD, ADDRESS, ORDER, ACCOUNT } from "../../constants/route-path";

const Nav = ({ page }) => {
  const dispatch = useDispatch();

  return (
    <div id="dashboard_navc">
      {NAV.map((e) => (
        <Link
          key={e.id}
          to={e.to}
          onClick={
            e.title === "Logout" ? () => dispatch({ type: LOGOUT_HANDLER }) : ""
          }
        >
          <div className={e.id === page ? "nav_item active-item" : "nav_item"}>
            <div>
              <img
                className={e.id === page ? "filter" : ""}
                src={"/user/" + e.svg}
                alt="svg"
              />
            </div>
            <div className="hiddenHeadr" style={{ marginLeft: "10px" }}>
              {e.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Nav;

const NAV = [
  {
    id: 1,
    title: "Dashboard",
    to: DASHBOARD,
    svg: "dashboard.svg",
  },
  {
    id: 2,
    title: "Orders",
    to: ORDER,
    svg: "orders.svg",
  },
  {
    id: 3,
    title: "Downloads",
    to: "#",
    svg: "downloads.svg",
  },
  {
    id: 4,
    title: "Addresses",
    to: ADDRESS,
    svg: "address.svg",
  },
  {
    id: 5,
    title: "Account Details",
    to: ACCOUNT,
    svg: "account.svg",
  },
  {
    id: 6,
    title: "Logout",
    to: "#",
    svg: "logout.svg",
  },
];
