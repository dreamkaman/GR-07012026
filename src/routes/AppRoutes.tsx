import { Routes, Route } from 'react-router-dom';
import TransactionsListPage from '../pages/TransactionsListPage';
import TransactionDetailPage from '../pages/TransactionDetailPage';

const AppRoutes = () => {
    return <>
        <Routes>
            <Route path='/' element={<TransactionsListPage />} />
            <Route path='/:id' element={<TransactionDetailPage />} />
        </Routes>
    </>
}

export default AppRoutes;