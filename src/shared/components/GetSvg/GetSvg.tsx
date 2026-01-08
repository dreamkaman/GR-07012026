import { type FC } from 'react';

import sprite from '../../../assets/svg/sprite.svg';

import type { IGetSvg } from '../../../types';


const GetSvg: FC<IGetSvg> = ({ name, className }) => {
    return (
        <svg className={className}>
            <use
                href={`${sprite}#${name}`}
                xlinkHref={`${sprite}#${name}`}
            />
        </svg>
    );
};


export default GetSvg;