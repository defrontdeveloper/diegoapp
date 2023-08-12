import { lazy, Fragment, Suspense } from "react";
import { Route, Outlet } from "react-router-dom";
import Loading from "../pages/Loading";

export const renderRoutes = (routes) => {
  return routes.map((route,index) => {

    const Component = route.element || Fragment;
    const Layout = route.layout || Fragment;
    const Guard = route.guard || Fragment;

    return (
      <Route
        key={ index }
        path={ route.path }
        element={ 
          <Suspense fallback={ <Loading /> }>
            <Guard>
            <Layout>{route.children ? <Outlet /> : <Component />}</Layout>
            </Guard>
          </Suspense>
        } >
        { route.children && renderRoutes(route.children) }
      </Route>
    )
  })
};

export const routes = [
  {
    path: "/login",
    element: lazy(async () => await import("../pages/Login"))
  },
  {
    layout: lazy(async () => await import("../layouts/AppLayout")),
    guard: lazy(async () => await import("../guards/AuthGuard")),
    children: [
      {
        path: "/",
        element: lazy(async () => await import("../pages/Home")),
      },
      {
        path: "/nosotros",
        element: lazy(async () => await import("../pages/About")),
      },
      {
        path: "/galeria",
        element: lazy(async () => await import("../pages/Gallery")),
      },
      {
        path: "/contacto",
        element: lazy(async () => await import("../pages/Contact")),
      },
    ],
  },
  {
    path: "*",
    element: lazy(async () => await import("../pages/NotFound"))
  }
];