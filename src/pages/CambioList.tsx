import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/Badge';
import { Copy, HelpCircle, X } from 'lucide-react';

export function CambioList() {
  const [statusFilter, setStatusFilter] = useState('Finalizada');
  const [searchQuery, setSearchQuery] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');

  const transactions = [
    {
      cnpj: '52.954.291/0001-50',
      razaoSocial: 'HUMBERTO NUNES TAVARES DE SOUZA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA',
      os: '45db2745-839b-4fef-8a7d-306af7fe4a52',
      valor: '2.020,00 €',
      status: 'Finalizada',
      cotacao: 'R$ 5,29',
      criacao: '11/01/2024 18:56',
    },
    {
      cnpj: '12.996.446/0001-05',
      razaoSocial: 'FABIANO DANZIGER DA SILVA - ME',
      os: 'b182bb1b-8b0e-4be7-b4b5-eae530307501',
      valor: '$185.00',
      status: 'Finalizada',
      cotacao: 'R$ 3,60',
      criacao: '19/12/2023 16:30',
    },
    {
      cnpj: '50.087.948/0001-02',
      razaoSocial: 'RODRIGO DYCK CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA',
      os: '574f82aa-12d9-4886-b498-4fb60ea0ee2d',
      valor: '$1.00',
      status: 'Finalizada',
      cotacao: 'R$ 4,86',
      criacao: '03/01/2024 12:15',
    },
    {
      cnpj: '53.144.835/0001-81',
      razaoSocial: 'JULIANO SCARPA BALOGH LTDA',
      os: 'b5d7b5c0-c39f-4957-96b1-b23ce69250e0',
      valor: '£2,822.58',
      status: 'Finalizada',
      cotacao: 'R$ 6,13',
      criacao: '12/01/2024 10:45',
    },
    {
      cnpj: '53.106.937/0001-02',
      razaoSocial: 'LUANA ALVES TEIXEIRA LOPES LTDA',
      os: '6b304d2d-1ffd-4fd5-8554-a3e6a992cd10',
      valor: '$1,300.14',
      status: 'Finalizada',
      cotacao: 'R$ 4,91',
      criacao: '22/01/2024 14:45',
    },
  ];

  const filteredTransactions = transactions.filter((tx) => {
    const matchesStatus = statusFilter ? tx.status === statusFilter : true;
    const matchesSearch = appliedSearch
      ? tx.cnpj.replace(/\D/g, '').includes(appliedSearch.replace(/\D/g, '')) ||
        tx.razaoSocial.toLowerCase().includes(appliedSearch.toLowerCase())
      : true;
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Transações de Câmbio' },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-3xl font-bold text-blue-900">Transações de Câmbio</h1>
          <HelpCircle className="w-5 h-5 text-gray-400" />
        </div>
        <p className="text-gray-600 font-medium">
          Acompanhe, verifique os dados e gerencie as transações de câmbio
        </p>
      </div>

      <div className="flex items-end gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Buscar transações"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setAppliedSearch(searchQuery);
              }
            }}
            className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-blue-600 bg-transparent"
          />
        </div>
        <div className="w-64">
          <label className="block text-xs text-blue-600 mb-1">Status</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-blue-600 bg-transparent"
          >
            <option value="Finalizada">Finalizada</option>
            <option value="Reembolsada">Reembolsada</option>
            <option value="Cancelada">Cancelada</option>
            <option value="Transação confirmada">Transação confirmada</option>
            <option value="Saque em andamento">Saque em andamento</option>
            <option value="Aguardando envio de documento">Aguardando envio de documento</option>
          </select>
        </div>
        <button 
          onClick={() => setAppliedSearch(searchQuery)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition-colors"
        >
          Buscar
        </button>
        <button 
          onClick={() => {
            setSearchQuery('');
            setAppliedSearch('');
            setStatusFilter('Finalizada');
          }}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium px-4 py-2"
        >
          <X className="w-4 h-4" />
          Limpar
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
            <tr>
              <th className="px-4 py-4">CNPJ</th>
              <th className="px-4 py-4">Razão Social</th>
              <th className="px-4 py-4">Nº O.S.</th>
              <th className="px-4 py-4">Valor</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Cotação VET</th>
              <th className="px-4 py-4">Criação</th>
              <th className="px-4 py-4">Recibos</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredTransactions.map((tx, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    {tx.cnpj}
                    <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                </td>
                <td className="px-4 py-4 max-w-xs truncate" title={tx.razaoSocial}>
                  {tx.razaoSocial}
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <span className="truncate w-32" title={tx.os}>{tx.os}</span>
                    <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">{tx.valor}</td>
                <td className="px-4 py-4">
                  <Badge variant="success">{tx.status}</Badge>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">{tx.cotacao}</td>
                <td className="px-4 py-4 whitespace-nowrap">{tx.criacao}</td>
                <td className="px-4 py-4">
                  <Link
                    to={`/cambio/${tx.os}`}
                    className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-1.5 rounded font-medium transition-colors inline-block"
                  >
                    Detalhes
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
