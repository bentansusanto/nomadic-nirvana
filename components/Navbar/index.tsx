import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Logo from "../../public/rivact-logo.svg";
import { NavLink, Profile } from "../../utils";

const navlink: NavLink[] = [
  { page: "Home", link: "/" },
  { page: "Our Destination", link: "/" },
  { page: "Hotels", link: "/" },
  { page: "Help", link: "/" },
];

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [data, setData] = useState<Profile>();
  const base_Url = 'https://web-service.herokuapp.com'
  const router = useRouter();
  const [dropAuth, setDropAuth] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem("tokens");
        const response = await fetch(`${base_Url}/auth/profile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Unauthorization");
        }
        const content = await response.json();
        setIsAuth(true);
        setData(content);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);

  const Logout = async () => {
    try {
      const response = await fetch(`${base_Url}/auth/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Network error");
      }
      localStorage.removeItem("tokens");
      console.log(response);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDropAuth = () => {
    setDropAuth(!dropAuth)
  }

  return (
    <div>
      <div className="flex items-center pl-20 pr-36 py-5">
        <Image src={Logo} alt="" className="w-12" />

        <div className="ml-auto flex items-center space-x-32">
          {/* Navlinks */}
          <ul className="flex space-x-12 items-center">
            {navlink.map((val, idx) => (
              <li key={idx}>
                <Link href={val.link}>{val.page}</Link>
              </li>
            ))}
          </ul>

          {/* Login or Profile */}
          <div>
            {isAuth ? (
              <div className="relative">
                <div onClick={handleDropAuth} className="flex space-x-3 items-center cursor-pointer">
                  <p>{data?.names}</p>
                  <FiChevronDown />
                </div>
                <div className={`${dropAuth ? "bg-gray p-3 absolute top-8" : "hidden"} cursor-pointer `}>
                  <p onClick={Logout} >Logout</p>
                </div>
              </div>
            ) : (
              <div>
                <button>
                  <Link href={"/login"}>Sign in</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
