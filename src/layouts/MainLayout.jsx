import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/Loading";

const Sidebar = lazy(() => import("../components/Sidebar"));
const Header = lazy(() => import("../components/Header"));

export default function MainLayout() {
    return (
    <>
      <div id="layout-wrapper" className="flex flex-row flex-1">
          <Suspense fallback={<Loading />}>
            <Sidebar/>
          </Suspense>
          <div id="main-content" className="flex-1 p-4">
            <Suspense fallback={<Loading />}>
              <Header/>
            </Suspense>

            <Outlet/>

          </div>
      </div>
    </>
  )
}