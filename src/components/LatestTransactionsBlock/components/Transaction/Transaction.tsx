import type { FC } from "react";
import { Link } from "react-router-dom";

import type { ITransaction } from "../../../../types";
import GetSvg from "../../../../shared/components/GetSvg";
import { transformDate } from "../../../../shared/utils/transformDate";

import s from './Transaction.module.css';

const Transaction: FC<{ transaction: ITransaction }> = ({ transaction }) => {

    const {
        id,
        transactionName,
        icon,
        amount,
        isPending,
        description,
        expense,
        type,
        date,
        authorizedUser
    } = transaction;

    return <div className={s.infoBlock}>
        <div className={s.companyLogo}>
            <GetSvg name={icon} className={s.logoIcon} />
        </div>
        <div className={s.textPart}>
            <div className={s.top}>
                <p>{transactionName}</p>
                <p>{type === 'Payment' ? '+' : ''}${amount.toLocaleString()}</p>
            </div>
            <div className={s.bottom}>
                <p>{isPending ? 'Pending - ' : null}<span>{description}</span></p>
                {expense && <p className={s.expense}>{expense}%</p>}
            </div>
            <p className={s.date}>{authorizedUser && <span>{authorizedUser} - </span>}{transformDate(date)}</p>
        </div>
        <Link to={id} className={s.linkButton}>
            <GetSvg name="icon-arrow" className={s.btnIcon} />
        </Link>
    </div>
}

export default Transaction;