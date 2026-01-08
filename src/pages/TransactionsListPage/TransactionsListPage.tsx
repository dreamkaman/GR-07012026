import CardBalanceBlock from "../../components/CardBalanceBlock";
import DailyPointsBlock from "../../components/DailyPointsBlock";
import LatestTransactionsBlock from "../../components/LatestTransactionsBlock";
import NoPaymentDueBlock from "../../components/NoPaymentDueBlock";

import s from './TransactionsListPage.module.css';

const TransactionsListPage = () => {
    return <section className="container">
        <div className={s.top}>
            <CardBalanceBlock />
            <DailyPointsBlock />
            <NoPaymentDueBlock />
        </div>
        <LatestTransactionsBlock />
    </section>
}

export default TransactionsListPage;