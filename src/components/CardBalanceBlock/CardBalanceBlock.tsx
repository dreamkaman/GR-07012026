import s from './CardBalanceBlock.module.css';

const balance = Math.round((Math.random() * 300 * 100)) / 100;
const availableMoney = 1500 - balance;

const CardBalanceBlock = () => {

    return <div className={`${s.cardBalanceBlock} block`}>
        <p className="title">Card Balance</p>
        <p className={`${s.balance} title`}>${balance.toLocaleString()}</p>
        <p className={s.availableMoney}>${availableMoney.toLocaleString()} Available</p>
    </div>
}

export default CardBalanceBlock;