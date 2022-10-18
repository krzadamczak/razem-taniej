import { NavLink, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useFetch } from "../../hooks/useFetch";
import "./Profile.css";
const Profile = () => {
    const { user } = useAuth0();
    const [data, isLoading] = useFetch(`/api/users/${user?.sub}`);

    return (
        <div className='profile'>
            <aside className='profile__sidebar'>
                <p className='profile__title'>Menu</p>
                <ul className='menu'>
                    <NavLink
                        className={({ isActive }) => (isActive ? "menu__item menu__item--active" : "menu__item ")}
                        to='.'
                        end>
                        Moje przejazdy
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? "menu__item menu__item--active" : "menu__item ")}
                        to='rezerwacje'
                        end>
                        Rezerwacje
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? "menu__item menu__item--active" : "menu__item")}
                        to='ustawienia'
                        end>
                        Ustawienia
                    </NavLink>
                </ul>
            </aside>
            <div className='profile__main'>
                <Outlet context={[data, isLoading]} />
            </div>
        </div>
    );
};

export default Profile;
