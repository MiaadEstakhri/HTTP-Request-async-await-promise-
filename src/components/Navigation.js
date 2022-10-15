import { useParams, NavLink } from "react-router-dom";

const items = [
  { name: "Home", to: "/" },
  { name: "New comment", to: "/new-comment" },
];

const Navigation = () => {
  let { id } = useParams();

  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={(navData) => (navData.isActive ? "activeLink" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
