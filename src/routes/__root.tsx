import { ThemeSwitcher } from "@/components/theme";
import { Button } from "@/components/ui/button";
import { AppProviders } from "@/providers";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
];

const RootLayout = () => (
  <AppProviders>
    <div className="container mx-auto flex h-14 w-full flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        {links.map(({ to, label }) => (
          <Button asChild key={to} variant="ghost">
            <Link to={to}>{label}</Link>
          </Button>
        ))}
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
