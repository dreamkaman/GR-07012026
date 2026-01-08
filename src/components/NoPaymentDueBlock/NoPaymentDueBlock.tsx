

import GetSvg from '../../shared/components/GetSvg';
import s from './NoPaymentDueBlock.module.css';

const NoPaymentDueBlock = () => {
    return <div className={`${s.noPaymentDueBlock} block`}>
        <div>
            <p className="title">No Payment Due</p>
            <p className={s.reason}>You've paid your September balance</p>
        </div>

        <div className={s.checkBlock}>
            <GetSvg name='icon-check' className={s.icon} />
        </div>

    </div >
}

export default NoPaymentDueBlock;