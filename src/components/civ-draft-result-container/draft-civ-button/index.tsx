import { FC, MouseEvent } from 'react';

import { ICiv } from '../../../api/civs-api';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectCivPool } from '../../civ-draft-parameters/civ-pool-slice';
import { FetchStatus, selectCivs } from '../../civ-draft/civs-slice';
import { draftCiv } from '../draft-result-slice';

import './draft-civ-button.scss';

export interface IDraftCivButtonProps {}

export const DraftCivButton: FC<IDraftCivButtonProps> = (props) => {
  const { list: allCivs, status } = useAppSelector(selectCivs);
  const { pool } = useAppSelector(selectCivPool);
  const dispatch = useAppDispatch();

  const calculateDraftResult = (): ICiv => {
    const civPool = pool.length > 0 ? pool : allCivs;
    const randomIndex = Math.floor(Math.random() * civPool.length);
    return civPool[randomIndex];
  };

  const handleDraftCiv = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (status === FetchStatus.FULFILLED) {
      const draftResult = calculateDraftResult();
      dispatch(draftCiv(draftResult));
    } else {
      console.log('Please wait for civ draft to load before drafting a civ.');
    }
  };

  return (
    <a
      className='button draft-civ-button'
      onClick={(e) => handleDraftCiv(e)}
      href='/'
    >
      Draft Civ
    </a>
  );
};
