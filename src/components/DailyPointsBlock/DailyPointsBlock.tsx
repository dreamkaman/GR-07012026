import { calculateDailyPoints } from '../../shared/utils/calculateDailyPoints';

import s from './DailyPointsBlock.module.css';

const DailyPointsBlock = () => {
    const dailyPoints = calculateDailyPoints();

    return <div className={`${s.dailyPointsBlock} block`}>
        <p className="title">Daily Points</p>
        <p className={s.dailyPoints}>{dailyPoints}</p>
    </div>
}

export default DailyPointsBlock;

