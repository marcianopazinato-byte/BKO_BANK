import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Copy, X } from 'lucide-react';

export function ClientesList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');

  const clientes = [
    {
      cnpj: '60.279.740/0001-30',
      razaoSocial: 'MARCIANO PAZINATO LTDA',
      dataAbertura: '07/04/2025 00:00',
      email: 'mpazinato@gmail.com',
      telefone: '(51) 99871-7058',
    },
    {
      cnpj: '12.345.678/0001-90',
      razaoSocial: 'EMPRESA DE TESTE S.A.',
      dataAbertura: '10/01/2024 08:30',
      email: 'contato@empresateste.com.br',
      telefone: '(11) 98765-4321',
    },
    {
      cnpj: '98.765.432/0001-10',
      razaoSocial: 'COMERCIO E SERVICOS LTDA',
      dataAbertura: '15/06/2023 14:00',
      email: 'vendas@comercio.com.br',
      telefone: '(21) 99999-1111',
    },
    {
      cnpj: '45.678.901/0001-23',
      razaoSocial: 'TECH SOLUTIONS INFORMATICA',
      dataAbertura: '20/11/2025 09:15',
      email: 'suporte@techsolutions.com',
      telefone: '(31) 97777-2222',
    },
    {
      cnpj: '23.456.789/0001-45',
      razaoSocial: 'ALIMENTOS DO BRASIL LTDA',
      dataAbertura: '05/03/2022 10:45',
      email: 'contato@alimentosbr.com.br',
      telefone: '(41) 98888-3333',
    }
  ];

  const filteredClientes = clientes.filter((c) => {
    if (!appliedSearch) return true;
    const searchLower = appliedSearch.toLowerCase();
    const searchDigits = appliedSearch.replace(/\D/g, '');
    const cnpjDigits = c.cnpj.replace(/\D/g, '');

    return (
      (searchDigits && cnpjDigits.includes(searchDigits)) ||
      c.razaoSocial.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Clientes' },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Painel de Clientes</h1>
        <p className="text-gray-600 font-medium">
          Acompanhe, verifique os dados e gerencie as informações de clientes
        </p>
      </div>

      <div className="flex items-end gap-4 mb-6 max-w-2xl">
        <div className="flex-1 relative">
          <label className="block text-xs text-blue-600 mb-1">Pesquise por CPNJ ou Razão Social</label>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setAppliedSearch(searchQuery);
                }
              }}
              placeholder="Digite CNPJ ou Razão Social"
              className="w-full border-b border-blue-600 pb-2 focus:outline-none bg-transparent text-gray-900 pr-8"
            />
            {searchQuery && (
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setAppliedSearch('');
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5 bg-gray-200 rounded-full p-0.5 text-white" />
              </button>
            )}
          </div>
        </div>
        <button 
          onClick={() => setAppliedSearch(searchQuery)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-medium transition-colors"
        >
          Buscar
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-6">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
            <tr>
              <th className="px-4 py-4">CNPJ</th>
              <th className="px-4 py-4">Razão Social</th>
              <th className="px-4 py-4">Data de Abertura</th>
              <th className="px-4 py-4">E-mail</th>
              <th className="px-4 py-4">Telefone</th>
              <th className="px-4 py-4">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredClientes.map((c, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    {c.cnpj}
                    <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                </td>
                <td className="px-4 py-4">{c.razaoSocial}</td>
                <td className="px-4 py-4 whitespace-nowrap">{c.dataAbertura}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    {c.email}
                    <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    {c.telefone}
                    <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                </td>
                <td className="px-4 py-4">
                  <Link
                    to={`/clientes/${c.cnpj.replace(/\D/g, '')}`}
                    className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-1.5 rounded font-medium transition-colors inline-block"
                  >
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center gap-2 text-sm text-blue-600">
        <button className="p-2 text-gray-400 cursor-not-allowed">&lt;</button>
        <button className="w-8 h-8 flex items-center justify-center rounded bg-blue-50 text-blue-600 font-medium">1</button>
        <span className="text-gray-400">...</span>
        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-blue-50 font-medium">1</button>
        <button className="p-2 text-gray-400 cursor-not-allowed">&gt;</button>
      </div>
    </div>
  );
}
