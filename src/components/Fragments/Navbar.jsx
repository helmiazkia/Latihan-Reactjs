import { Link, NavLink } from "react-router-dom";
import { Icon } from "../Elements/Icon"; // Pastikan file dan komponen Icon ada
import Logo from "../Elements/Logo";

const Navbar = () => {
  const menus = [
    {
      id: "overview",
      link: "/",
      icon: <Icon.Overview />,
      label: "Overview",
    },
    {
      id: "balance",
      link: "/balance",
      icon: <Icon.Balance />,
      label: "Balances",
    },
    {
      id: "transaction",
      link: "/transaction",
      icon: <Icon.Transaction />,
      label: "Transaction",
    },
    {
      id: "bill",
      link: "/bill",
      icon: <Icon.Bill />,
      label: "Bills",
    },
    {
      id: "expenses",
      link: "/expenses",
      icon: <Icon.Expenses />,
      label: "Expenses",
    },
    {
      id: "goals",
      link: "/goals",
      icon: <Icon.Goal/>,
      label: "Goals",
    },
    {
      id: "setting",
      link: "/setting",
      icon: <Icon.Setting />,
      label: "Settings",
    },
  ];

  return (
    <div className="bg-defaultBlack">
      <nav className="sticky top-0 text-special-bg2 sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
        <div>
          <NavLink to="/" className="flex justify-center mb-10">
            <Logo variant="text-white text-sm sm:text-2xl" />
          </NavLink>
          {menus.map((menu) => (
            <NavLink
              key={menu.id}
              to={menu.link}
              className={({ isActive }) =>
                isActive
                  ? "flex bg-primary text-white font-bold px-4 py-3 rounded-md"
                  : "flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md"
              }
            >
              <div className="mx-auto sm:mx-0">{menu.icon}</div>
              <div className="ms-3 hidden sm:block">{menu.label}</div>
            </NavLink>
          ))}
        </div>
        <div>
          <NavLink
            to="/logout"
            className="flex bg-special-bg3 px-4 py-3 rounded-md hover:text-white"
          >
            <div className="mx-auto sm:mx-0">
              <Icon.Logout />
            </div>
            <div className="ms-3 hidden sm:block">Logout</div>
          </NavLink>
          <div className="border-b my-10 border-b-special-bg"></div>
          <NavLink to="/profile" className="flex justify-between">
            <div className="mx-auto sm:mx-0 self-center">
              <img src="images/profile.png" />
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold">Helmi azkia</div>
              <div className="text-xs">View Profile</div>
            </div>
            <div className="hidden sm:block self-center">
              <Icon.KebabMenu />
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};


export default Navbar;
