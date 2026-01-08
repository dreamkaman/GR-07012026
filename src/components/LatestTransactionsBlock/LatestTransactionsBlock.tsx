import data from '../../DB/transactions.json';
import type { ITransaction } from '../../types';
import Transaction from './components/Transaction';

import s from './LatestTransactionsBlock.module.css';

const transactions = data as ITransaction[];

const LatestTransactionsBlock = () => {

    return <div>
        <p className={`${s.latestTransactionsTitle} title`}>Latest Transactions</p>
        <ul className={s.latestTransactionsList}>
            {transactions.map(transaction => <li key={transaction.id} className={s.latestTransactionsListItem}>
                <Transaction transaction={transaction} />
            </li>
            )}
        </ul>
    </div>
}

export default LatestTransactionsBlock;