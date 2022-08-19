import { FC } from 'react';
import { Separator } from '../separator';

import './footer.scss';

export interface IFooterProps {}

export const Footer: FC<IFooterProps> = (props) => {
  return (
    <div className='footer'>
      <Separator />
      <h2 className='credits-title'>Credits</h2>
      <div className='credits-text'>
        <p>
          Created by Amr Gaber (in game name: debrijja) (2022) •{' '}
          <a
            href='https://github.com/amrtgaber/aoe2-random-civ-draft/tree/main'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>{' '}
          •{' '}
          <a
            href='https://paypal.me/amrtgaber'
            target='_blank'
            rel='noreferrer'
          >
            Donate
          </a>
        </p>
        <p>
          Thank you to <a href='https://siegeengineers.org/'>Siege Engineers</a>
          . Inspiration and some assets were taken (wololo 11) from their
          projects.
        </p>
        <p>
          Age of Empires © Microsoft Corporation. Age of Empires II Random
          Civilization Draft for Age of Empires was created under
          Microsoft&apos;s &quot;
          <a href='https://www.xbox.com/en-us/developers/rules'>
            Game Content Usage Rules
          </a>
          &quot; using assets from Age of Empires II and it is not endorsed by
          or affiliated with Microsoft.
        </p>
      </div>
    </div>
  );
};
