import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
    </div>
  );
}
