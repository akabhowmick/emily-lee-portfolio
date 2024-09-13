import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useUserContext } from "../providers/UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useUserContext();
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo({});
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        Angela Blogs! 
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
