import { Outlet } from "react-router-dom";
import AppAppBar from "./AppAppBar";

export default function Layout() {
  return (
    <>
      <header>
        <AppAppBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
