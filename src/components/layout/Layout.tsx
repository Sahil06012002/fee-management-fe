import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SideBar } from "./Sidebar";

export function Layout() {
    return <div className="grid grid-cols-[auto_1fr]">
        <SideBar></SideBar>
        <div>
            <Header />
            <main className="px-8 py-6">
          <Outlet />
        </main>
        </div>
    </div>
}