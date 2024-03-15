import { NavLink } from "react-router-dom";
import clas from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={clas.container}>
      <div className={clas.header}>
        <ul className={clas.link}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? clas.active : undefined)}
              end
            >
              BlockNumber
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"USDT"}
              className={({ isActive }) => (isActive ? clas.active : undefined)}
            >
              USDT balance
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
