/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { CambioList } from './pages/CambioList';
import { CambioDetails } from './pages/CambioDetails';
import { ClientesList } from './pages/ClientesList';
import { ClienteDetails } from './pages/ClienteDetails';
import { GestaoContas } from './pages/GestaoContas';
import { ReprocessarPagamentos } from './pages/ReprocessarPagamentos';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="cambio" element={<CambioList />} />
        <Route path="cambio/:id" element={<CambioDetails />} />
        <Route path="cambio/:id/documentos" element={<CambioDetails />} />
        <Route path="clientes" element={<ClientesList />} />
        <Route path="clientes/:id" element={<ClienteDetails />} />
        <Route path="gestao-contas" element={<GestaoContas />} />
        <Route path="reprocessar-pagamentos" element={<ReprocessarPagamentos />} />
      </Route>
    </Routes>
  );
}
