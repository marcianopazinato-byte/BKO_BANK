import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/Badge';
import { Copy } from 'lucide-react';

export function ReprocessarPagamentos() {
  const pagamentos = [
    {
      cnpj: '59.914.328/0001-66',
      razaoSocial: 'LUCIANO DUMALAK SATERS LTDA',
      conta: '3116541',
      valor: 'R$ 4.299,96',
      dataPagamento: '01/12/2025',
      dataFalha: '03/12/2025',
      motivo: 'Conta do recebedor não existe ou foi encerrada.',
      status: 'Falha',
    },
    {
      cnpj: '55.224.563/0001-55',
      razaoSocial: 'JACQUELINE LEMES SOCIEDADE INDIVIDUAL DE ADVOCACIA',
      conta: '3115906',
      valor: 'R$ 1.000,00',
      dataPagamento: '28/11/2025',
      dataFalha: '04/12/2025',
      motivo: 'Agência, conta ou dígito verificador da conta inválido.',
      status: 'Falha',
    },
    {
      cnpj: '43.286.024/0001-61',
      razaoSocial: 'HOLOGRAM ARQUITETURA LTDA',
      conta: '15584819',
      valor: 'R$ 1.690,00',
      dataPagamento: '03/12/2025',
      dataFalha: '05/12/2025',
      motivo: 'Agência, conta ou dígito verificador da conta inválido.',
      status: 'Falha',
    },
    {
      cnpj: '58.469.104/0001-20',
      razaoSocial: 'QUENE CONSULTORIA EM EDUCACAO LTDA',
      conta: '3115530',
      valor: 'R$ 2.336,30',
      dataPagamento: '07/12/2025',
      dataFalha: '09/12/2025',
      motivo: 'Conta do recebedor não existe ou foi encerrada.',
      status: 'Falha',
    },
    {
      cnpj: '63.376.071/0001-03',
      razaoSocial: 'GIULIA FERREIRA CONTE LTDA',
      conta: '0507767535',
      valor: 'R$ 548,01',
      dataPagamento: '07/01/2026',
      dataFalha: '14/01/2026',
      motivo: 'Agência, conta ou dígito verificador da conta inválido.',
      status: 'Falha',
    },
    {
      cnpj: '63.376.071/0001-03',
      razaoSocial: 'GIULIA FERREIRA CONTE LTDA',
      conta: '0507767535',
      valor: 'R$ 548,01',
      dataPagamento: '07/01/2026',
      dataFalha: '14/01/2026',
      motivo: 'Agência, conta ou dígito verificador da conta inválido.',
      status: 'Falha',
    },
  ];

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Reprocessamento de Pagamentos' },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Reprocessamento de Pagamentos</h1>
        <p className="text-gray-600 font-medium">
          A lista abaixo exibe as transações que falharam. Você pode reenfileirar um pagamento ou dar baixa manual após devida análise
        </p>
      </div>

      <div className="flex items-end gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Razão Social"
            className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-blue-600 bg-transparent"
          />
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="CNPJ"
            className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-blue-600 bg-transparent"
          />
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Data Inicial da Falha"
            className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-blue-600 bg-transparent"
          />
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Data Final da Falha"
            className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-blue-600 bg-transparent"
          />
        </div>
        <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded font-medium transition-colors">
          Buscar
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
            <tr>
              <th className="px-4 py-4">CNPJ</th>
              <th className="px-4 py-4">Razão Social</th>
              <th className="px-4 py-4">Nº Conta</th>
              <th className="px-4 py-4">Valor</th>
              <th className="px-4 py-4">Data Pagamento</th>
              <th className="px-4 py-4">Data Falha</th>
              <th className="px-4 py-4">Motivo Falha</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pagamentos.map((p, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col">
                      <span>{p.cnpj.split('/')[0]}</span>
                      <span>/{p.cnpj.split('/')[1]}</span>
                    </div>
                    <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                </td>
                <td className="px-4 py-4 max-w-xs">{p.razaoSocial}</td>
                <td className="px-4 py-4 whitespace-nowrap">{p.conta}</td>
                <td className="px-4 py-4 whitespace-nowrap">{p.valor}</td>
                <td className="px-4 py-4 whitespace-nowrap">{p.dataPagamento}</td>
                <td className="px-4 py-4 whitespace-nowrap">{p.dataFalha}</td>
                <td className="px-4 py-4 max-w-xs">{p.motivo}</td>
                <td className="px-4 py-4">
                  <Badge variant="danger" className="px-3 py-1 font-semibold">{p.status}</Badge>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex gap-2">
                    <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-1.5 rounded font-medium transition-colors">
                      Reprocessar
                    </button>
                    <button className="border border-blue-800 text-blue-800 hover:bg-blue-50 px-4 py-1.5 rounded font-medium transition-colors">
                      Dar Baixa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
