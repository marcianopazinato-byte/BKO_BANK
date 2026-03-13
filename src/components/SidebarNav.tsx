import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SidebarNavProps {
  items: {
    title: string;
    href: string;
  }[];
}

export function SidebarNav({ items }: SidebarNavProps) {
  const location = useLocation();

  return (
    <nav className="flex flex-col space-y-1 w-64 border-r border-gray-200 min-h-[calc(100vh-12rem)] pr-4">
      {items.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              'px-4 py-3 text-sm font-medium rounded-md transition-colors',
              isActive
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100'
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
