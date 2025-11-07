import { AppProviders } from "@/providers";
import { ThemeSwitcher } from "@/components/theme";

export default function App() {
  return (
    <AppProviders>
      <div className="flex h-screen w-full flex-row items-center justify-center gap-4">
        <h1 className="text-2xl">Hello World!</h1>
        <ThemeSwitcher />
      </div>
    </AppProviders>
  );
}
