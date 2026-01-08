import { Link, useParams } from "react-router-dom";
import GetSvg from "../../shared/components/GetSvg";
import type { ITransaction } from "../../types";

import s from './TransactionDetailPage.module.css';

import data from '../../DB/transactions.json';
import { transformDate } from "../../shared/utils/transformDate";
import { getTime } from "../../shared/utils/getTime";

const transactions = data as ITransaction[];

const TransactionDetailPage = () => {
    const { id } = useParams();

    const transaction = transactions.find(transaction => transaction.id === id);

    if (!transaction) return null;

    const { amount, description, date, transactionName } = transaction;

    return <section className="container">
        <Link to={'/'} className={s.linkBack}>
            <GetSvg name="icon-arrow" className={s.linkIcon} />
        </Link>
        <p className={s.summa}>${amount.toLocaleString()}</p>
        <p className={s.text}>{transactionName}</p>
        <p className={s.dateTime}>{transformDate(date)}, <span>{getTime(date)}</span></p>
        <div className={`${s.infoBlock} block`}>
            <div className={s.top}>
                <p className={s.status}>Status: {'Approved'}</p>
                <p className={s.description}>{description}</p>
            </div>
            <p className={s.totalLine}>Total <span>${amount.toLocaleString()}</span></p>
        </div>
    </section >
}

export default TransactionDetailPage;