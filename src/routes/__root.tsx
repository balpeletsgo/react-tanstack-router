import { ThemeSwitcher } from "@/components/theme";
import { AppProviders } from "@/providers";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <AppProviders>
    <div className="container mx-auto flex h-14 w-full flex-row items-center justify-between">
      <div className="flex flex-row items-center space-x-4">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <ThemeSwitcher />
    </div>
    <hr />
    <div className="container mx-auto flex min-h-[calc(100vh-58px)] w-full flex-row items-center justify-center gap-4">
      <Outlet />
    </div>
    <TanStackRouterDevtools />
  </AppProviders>
);

export const Route = createRootRoute({ component: RootLayout });
