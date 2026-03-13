import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/Badge';
import { Copy } from 'lucide-react';

export function GestaoContas() {
  const contas = [
    {
      nomeFantasia: 'ATS ENGENHARIA',
      razaoSocial: 'ANDRES TADEU SERRANO DA SILVA LTDA',
      cnpj: '65.460.125/0001-40',
      dataAbertura: '03/03/2026',
      dataCriacao: '13/03/2026',
      diasCriada: '0',
      saldo: 'R$ 0,00',
      status: 'ONBOARDING_PENDING',
    },
    {
      nomeFantasia: 'MAGIC DRAGON 3D',
      razaoSocial: 'LUAN GABRIEL MIYAOKA LTDA',
      cnpj: '65.668.800/0001-20',
      dataAbertura: '13/03/2026',
      dataCriacao: '13/03/2026',
      diasCriada: '0',
      saldo: 'R$ 0,00',
      status: 'ONBOARDING_PENDING',
    },
    {
      nomeFantasia: 'FONTES INVESTIMENTOS',
      razaoSocial: 'RAFAEL DA SILVA FONTES LTDA',
      cnpj: '65.671.343/0001-23',
      dataAbertura: '13/03/2026',
      dataCriacao: '13/03/2026',
      diasCriada: '0',
      saldo: 'R$ 0,00',
      status: 'ONBOARDING_PENDING',
    },
    {
      nomeFantasia: 'ORI CONSULTORIA EMPRESARIAL',
      razaoSocial: 'ORI CONSULTORIA EMPRESARIAL LTDA',
      cnpj: '65.666.736/0001-49',
      dataAbertura: '13/03/2026',
      dataCriacao: '13/03/2026',
      diasCriada: '0',
      saldo: 'R$ 0,00',
      status: 'ONBOARDING_PENDING',
    },
    {
      nomeFantasia: 'FBRIBEIRO TECH SYSTEMS',
      razaoSocial: 'FABIO BRITO RIBEIRO TECNOLOGIA DA INFORMACAO LTDA',
      cnpj: '65.668.730/0001-00',
      dataAbertura: '13/03/2026',
      dataCriacao: '13/03/2026',
      diasCriada: '0',
      saldo: 'R$ 0,00',
      status: 'ONBOARDING_PENDING',
    },
    {
      nomeFantasia: '',
      razaoSocial: 'VML REPRESENTACAO COMERCIAL LTDA',
      cnpj: '65.437.582/0001-13',
      dataAbertura: '03/03/2026',
      dataCriacao: '13/03/2026',
      diasCriada: '0',
      saldo: 'R$ 0,00',
      status: 'ONBOARDING_PENDING',
    },
    {
      nomeFantasia: '',
      razaoSocial: 'FRANKLIN LAZARO SANTOS DE OLIVEIRA LTDA',
      cnpj: '65.666.823/0001-04',
      dataAbertura: '13/03/2026',
      dataCriacao: '13/03/2026',
      diasCriada: '0',
      saldo: 'R$ 0,00',
      status: 'ONBOARDING_PENDING',
    },
    {
      nomeFantasia: '',
      razaoSocial: 'ADSON CICERO CAMPOS DA SILVA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA',
      cnpj: '65.557.195/0001-10',
      dataAbertura: '07/03/2026',
      dataCriacao: '13/03/2026',
      diasCriada: '0',
      saldo: 'R$ 0,00',
      status: 'ONBOARDING_PENDING',
    },
    {
      nomeFantasia: '365 VIAGENS LAGE',
      razaoSocial: '365 VIAGENS LAGE DE ANDRADE LTDA',
      cnpj: '65.643.104/0001-60',
      dataAbertura: '12/03/2026',
      dataCriacao: '13/03/2026',
      diasCriada: '0',
      saldo: 'R$ 0,00',
      status: 'ONBOARDING_PENDING',
    },
  ];

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Gestão de Contas' },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Painel de Gestão de Contas</h1>
        <p className="text-gray-600 font-medium">
          Gestão de contas criadas, mas que não iniciaram o processo de onboarding.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
            <tr>
              <th className="px-4 py-4">Nome Fantasia</th>
              <th className="px-4 py-4">Razão Social</th>
              <th className="px-4 py-4">CNPJ</th>
              <th className="px-4 py-4">Data Abertura</th>
              <th className="px-4 py-4">Data Criação</th>
              <th className="px-4 py-4">Dias Criada</th>
              <th className="px-4 py-4">Saldo</th>
              <th className="px-4 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {contas.map((c, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4">{c.nomeFantasia}</td>
                <td className="px-4 py-4">{c.razaoSocial}</td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    {c.cnpj}
                    <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">{c.dataAbertura}</td>
                <td className="px-4 py-4 whitespace-nowrap">{c.dataCriacao}</td>
                <td className="px-4 py-4">{c.diasCriada}</td>
                <td className="px-4 py-4 whitespace-nowrap">{c.saldo}</td>
                <td className="px-4 py-4">
                  <Badge variant="info" className="px-3 py-1 font-semibold">{c.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
