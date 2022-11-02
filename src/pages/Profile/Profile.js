import { NavLink, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useFetch } from "../../hooks/useFetch";
import "./Profile.css";
import { useState } from "react";
import { useEffect } from "react";
const Profile = () => {
    const { user } = useAuth0();
    // const [data, isLoading] = useFetch(`/api/users/${user?.sub}`);
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!user?.sub) return;
        const controller = new AbortController();
        setIsLoading(true);
        fetch(`/api/users/${user?.sub}`, { signal: controller.signal })
            .then((res) => res.json())
            .then((data) => setData(data))
            .finally(() => setIsLoading(false));
        return () => {
            controller.abort();
        };
    }, [user]);

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
                <Outlet context={[data, setData, isLoading, setIsLoading]} />
            </div>
        </div>
    );
};

export default Profile;
