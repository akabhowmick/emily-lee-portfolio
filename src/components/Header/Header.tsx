import { Link } from "react-router-dom";
import { useUserContext } from "../../providers/UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useUserContext();

  function logout() {
    setUserInfo({});
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        Angela Blogs!
      </Link>
      <nav>
        <Link to="/">Home</Link>
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
