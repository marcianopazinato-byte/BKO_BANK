import { Link, useLocation } from 'react-router-dom';
import { User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Link to="/" className="text-2xl font-bold text-blue-900 flex items-center">
          C<span className="text-cyan-400 text-3xl leading-none">.</span>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link to="/admin" className="text-blue-600 hover:underline underline-offset-4">Admin</Link>
          <Link to="/adminbro" className="text-blue-600 hover:underline underline-offset-4">AdminBro</Link>
        </nav>
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-300">
          <User className="w-5 h-5 text-gray-500" />
        </div>
      </div>
    </header>
  );
}
