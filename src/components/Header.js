import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
const onlineStatus = useOnlineStatus();
    useEffect(() => {
    }, [btnName]);
    return (
        <div className="flex justify-between shadow-lg">
            <div>
                <img className="w-[135px]" src={LOGO_URL} />
            </div>
            <div className="flex">
                <ul className="flex p-4 m-4 items-center">
                    <li className="px-4">Online status: {onlineStatus ? "🟢" : "🔴"} </li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact us</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="px-4 py-2 bg-gray-200 m-4 rounded-lg" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;