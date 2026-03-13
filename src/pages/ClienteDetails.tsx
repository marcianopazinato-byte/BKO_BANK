import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/Badge';

export function ClienteDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('detalhes');

  const cliente = {
    razaoSocial: 'MARCIANO PAZINATO LTDA',
    cnpj: '60.279.740/0001-30',
    dataAbertura: '07/04/2025 00:00',
    email: 'mpazinato@gmail.com',
    telefone: '(51) 99871-7058',
    endereco: 'AVENIDA DOM CLAUDIO JOSE GONCALVES P LEAO, 140, VILA IPIRANGA, Porto Alegre/RS - 91370-170',
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'detalhes':
        return (
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h2 className="text-sm font-medium text-gray-700">Dados Cadastrais</h2>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="flex px-6 py-4">
                <div className="w-1/3 text-sm text-gray-500">CNPJ</div>
                <div className="w-2/3 text-sm font-medium text-gray-900">{cliente.cnpj}</div>
              </div>
              <div className="flex px-6 py-4 bg-gray-50/50">
                <div className="w-1/3 text-sm text-gray-500">Razão Social</div>
                <div className="w-2/3 text-sm font-medium text-gray-900">{cliente.razaoSocial}</div>
              </div>
              <div className="flex px-6 py-4">
                <div className="w-1/3 text-sm text-gray-500">Data de Abertura</div>
                <div className="w-2/3 text-sm font-medium text-gray-900">{cliente.dataAbertura}</div>
              </div>
              <div className="flex px-6 py-4 bg-gray-50/50">
                <div className="w-1/3 text-sm text-gray-500">E-mail</div>
                <div className="w-2/3 text-sm font-medium text-gray-900">{cliente.email}</div>
              </div>
              <div className="flex px-6 py-4">
                <div className="w-1/3 text-sm text-gray-500">Telefone</div>
                <div className="w-2/3 text-sm font-medium text-gray-900">{cliente.telefone}</div>
              </div>
              <div className="flex px-6 py-4 bg-gray-50/50">
                <div className="w-1/3 text-sm text-gray-500">Endereço</div>
                <div className="w-2/3 text-sm font-medium text-gray-900">{cliente.endereco}</div>
              </div>
            </div>
          </div>
        );
      case 'contas':
        return (
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4">Conta/Agência</th>
                  <th className="px-6 py-4">Data de Abertura</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">31168265 / 0001</td>
                  <td className="px-6 py-4">07/04/2025 14:28</td>
                  <td className="px-6 py-4"><Badge variant="info">Ativa</Badge></td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded font-medium transition-colors">
                        Resetar Biometria
                      </button>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded font-medium transition-colors">
                        Extrato
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-center items-center gap-2 py-4 text-sm text-blue-600 border-t border-gray-200">
              <button className="p-2 text-gray-400 cursor-not-allowed">&lt;</button>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-blue-50 text-blue-600 font-medium">1</button>
              <span className="text-gray-400">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-blue-50 font-medium text-blue-600">1</button>
              <button className="p-2 text-gray-400 cursor-not-allowed">&gt;</button>
            </div>
          </div>
        );
      case 'socios':
        return (
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4">Nome do Sócio</th>
                  <th className="px-6 py-4">CPF</th>
                  <th className="px-6 py-4">Sócio Principal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">MARCIANO PAZINATO</td>
                  <td className="px-6 py-4">005.817.130-44</td>
                  <td className="px-6 py-4">Sim</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'cobrepj':
        return (
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex justify-between items-start">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">Conta Bancária Cadastrada:</div>
                <div className="text-sm text-gray-900">Contabilizei.Bank • 0001 • 3116826-5</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">Aceite dos Termos e Condições</div>
                <div className="flex gap-4 text-sm text-gray-500">
                  <label className="flex items-center gap-1 cursor-not-allowed">
                    <input type="radio" checked readOnly className="text-gray-400" /> Sim
                  </label>
                  <label className="flex items-center gap-1 cursor-not-allowed">
                    <input type="radio" disabled className="text-gray-400" /> Não
                  </label>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">Data do aceite</div>
                <div className="text-sm text-gray-900">05/05/2025 às 18:20</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">Versão do termo</div>
                <div className="text-sm text-gray-900">3</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">Validade do Certificado Digital</div>
                <div className="text-sm text-gray-900">26/04/2026</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Formas de pagamento</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Boleto</span>
                    <div className="flex items-center gap-4">
                      <Badge variant="success" className="px-4 py-1">Ativo</Badge>
                      <button className="px-4 py-1.5 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">Bloquear</button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Cartão de crédito</span>
                    <div className="flex items-center gap-4">
                      <Badge variant="success" className="px-4 py-1">Ativo</Badge>
                      <button className="px-4 py-1.5 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">Bloquear</button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Pix</span>
                    <div className="flex items-center gap-4">
                      <Badge variant="success" className="px-4 py-1">Ativo</Badge>
                      <button className="px-4 py-1.5 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">Bloquear</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Status</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Geral</span>
                    <div className="flex items-center gap-4">
                      <Badge variant="success" className="px-4 py-1">Ativo</Badge>
                      <button className="px-4 py-1.5 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">Bloquear</button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">BlockList</span>
                    <div className="flex items-center gap-4">
                      <Badge variant="success" className="px-4 py-1">Não incluso</Badge>
                      <button className="px-4 py-1.5 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">Incluir</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4">Data</th>
                    <th className="px-6 py-4">Usuário</th>
                    <th className="px-6 py-4">Ação</th>
                    <th className="px-6 py-4">Alvo</th>
                    <th className="px-6 py-4">Motivo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">18/02/2026 17:10</td>
                    <td className="px-6 py-4">felipe.garcia@contabilizei.com.br</td>
                    <td className="px-6 py-4">Ativação</td>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4">teste</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="px-6 py-4">18/02/2026 17:09</td>
                    <td className="px-6 py-4">felipe.garcia@contabilizei.com.br</td>
                    <td className="px-6 py-4">Desativação</td>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4">teste</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">18/02/2026 17:09</td>
                    <td className="px-6 py-4">felipe.garcia@contabilizei.com.br</td>
                    <td className="px-6 py-4">Ativação da forma de cobrança</td>
                    <td className="px-6 py-4">Cartão de crédito</td>
                    <td className="px-6 py-4">Teste</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Clientes', href: '/clientes' },
          { label: 'Detalhes' },
        ]}
      />

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">{cliente.razaoSocial}</h1>
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
              onClick={() => setActiveTab('contas')}
              className={`px-4 py-3 text-sm font-medium rounded-md transition-colors text-left ${
                activeTab === 'contas' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Contas
            </button>
            <button
              onClick={() => setActiveTab('socios')}
              className={`px-4 py-3 text-sm font-medium rounded-md transition-colors text-left ${
                activeTab === 'socios' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Sócios
            </button>
            <button
              onClick={() => setActiveTab('cobrepj')}
              className={`px-4 py-3 text-sm font-medium rounded-md transition-colors text-left ${
                activeTab === 'cobrepj' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Gestão CobrePJ
            </button>
          </nav>
        </div>

        <div className="flex-1">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
