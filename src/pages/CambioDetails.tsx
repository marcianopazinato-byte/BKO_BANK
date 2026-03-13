import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/Badge';
import { SidebarNav } from '@/components/SidebarNav';

export function CambioDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('detalhes');

  const tx = {
    razaoSocial: 'HUMBERTO NUNES TAVARES DE SOUZA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA',
    status: 'Finalizada',
    cnpj: '52.954.291/0001-50',
    os: id || '45db2745-839b-4fef-8a7d-306af7fe4a52',
    valor: '2.020,00 €',
    cotacao: 'R$ 5,29',
    criacao: '11/01/2024 18:56',
    atualizacao: '12/01/2024 14:16',
    conta: '31125793',
  };

  const navItems = [
    { title: 'Detalhes', href: `/cambio/${id}` },
    { title: 'Documentos', href: `/cambio/${id}/documentos` },
  ];

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Transações de Câmbio', href: '/cambio' },
          { label: 'Detalhes' },
        ]}
      />

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">{tx.razaoSocial}</h1>
        <Badge variant="success" className="px-3 py-1 text-sm">{tx.status}</Badge>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 flex-shrink-0">
          <nav className="flex flex-col space-y-1 border-r border-gray-200 min-h-[calc(100vh-20rem)] pr-4">
            <button
              onClick={() => setActiveTab('detalhes')}
              className={`px-4 py-3 text-sm font-medium rounded-md transition-colors text-left ${
                activeTab === 'detalhes' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Detalhes
            </button>
            <button
              onClick={() => setActiveTab('documentos')}
              className={`px-4 py-3 text-sm font-medium rounded-md transition-colors text-left ${
                activeTab === 'documentos' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Documentos
            </button>
          </nav>
        </div>

        <div className="flex-1">
          {activeTab === 'detalhes' ? (
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h2 className="text-sm font-medium text-gray-700">Dados da Transação</h2>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="flex px-6 py-4">
                  <div className="w-1/3 text-sm text-gray-500">Status</div>
                  <div className="w-2/3 text-sm font-medium"><Badge variant="success">{tx.status}</Badge></div>
                </div>
                <div className="flex px-6 py-4 bg-gray-50/50">
                  <div className="w-1/3 text-sm text-gray-500">CNPJ</div>
                  <div className="w-2/3 text-sm font-medium text-gray-900">{tx.cnpj}</div>
                </div>
                <div className="flex px-6 py-4">
                  <div className="w-1/3 text-sm text-gray-500">Ordem de Serviço</div>
                  <div className="w-2/3 text-sm font-medium text-gray-900">{tx.os}</div>
                </div>
                <div className="flex px-6 py-4 bg-gray-50/50">
                  <div className="w-1/3 text-sm text-gray-500">Valor</div>
                  <div className="w-2/3 text-sm font-medium text-gray-900">{tx.valor}</div>
                </div>
                <div className="flex px-6 py-4">
                  <div className="w-1/3 text-sm text-gray-500">Cotação VET</div>
                  <div className="w-2/3 text-sm font-medium text-gray-900">{tx.cotacao}</div>
                </div>
                <div className="flex px-6 py-4 bg-gray-50/50">
                  <div className="w-1/3 text-sm text-gray-500">Data de Criação</div>
                  <div className="w-2/3 text-sm font-medium text-gray-900">{tx.criacao}</div>
                </div>
                <div className="flex px-6 py-4">
                  <div className="w-1/3 text-sm text-gray-500">Data de Atualização</div>
                  <div className="w-2/3 text-sm font-medium text-gray-900">{tx.atualizacao}</div>
                </div>
                <div className="flex px-6 py-4 bg-gray-50/50">
                  <div className="w-1/3 text-sm text-gray-500">Nº Conta</div>
                  <div className="w-2/3 text-sm font-medium text-gray-900">{tx.conta}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h2 className="text-sm font-medium text-gray-700">Enviar Documentos</h2>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="text-sm font-medium text-gray-700">Fatura (Invoice)</div>
                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-400 bg-gray-50 cursor-not-allowed">
                      Selecionar Arquivo
                    </button>
                    <button className="px-6 py-2 bg-blue-400 text-white rounded text-sm font-medium cursor-not-allowed">
                      ENVIAR
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between px-6 py-4 bg-gray-50/50">
                  <div className="text-sm font-medium text-gray-700">Contrato de Serviço (Service Agreement)</div>
                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-400 bg-gray-50 cursor-not-allowed">
                      Selecionar Arquivo
                    </button>
                    <button className="px-6 py-2 bg-blue-400 text-white rounded text-sm font-medium cursor-not-allowed">
                      ENVIAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
