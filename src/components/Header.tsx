// components/Header.tsx
import { Home, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center gap-2 p-4">
      <Home className="w-6 h-6 text-white" />
      <h1 className="text-xl font-bold">Dashboard</h1>
      <Settings className="ml-auto w-5 h-5 text-gray-400" />
    </header>
  );
}
