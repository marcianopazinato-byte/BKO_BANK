import { Link } from 'react-router-dom';
import { Landmark, Users, UserCog, RefreshCcw } from 'lucide-react';

export function Dashboard() {
  const cards = [
    {
      title: 'Câmbio',
      icon: Landmark,
      href: '/cambio',
    },
    {
      title: 'Clientes',
      icon: Users,
      href: '/clientes',
    },
    {
      title: 'Gestão de Contas',
      icon: UserCog,
      href: '/gestao-contas',
    },
    {
      title: 'Reprocessar Pagamentos',
      icon: RefreshCcw,
      href: '/reprocessar-pagamentos',
    },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {cards.map((card) => (
          <Link
            key={card.title}
            to={card.href}
            className="flex flex-col items-center justify-center p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow h-48"
          >
            <card.icon className="w-10 h-10 mb-4 text-gray-800" />
            <span className="text-gray-700 font-medium text-lg">{card.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
