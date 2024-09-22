import { Fragment, useState } from 'react';
import './Club.scss';
import Modal from './Modal';
const data = [
  {
    country: 'England',
    club: 'Arsenal',
  },
  {
    country: 'England',
    club: 'Liverpool',
  },
  {
    country: 'Spain',
    club: 'RealMarid',
  },
  {
    country: 'France',
    club: 'PSG',
  },
  {
    country: 'England',
    club: 'MU',
  },
];

const Club = () => {
  const [showModal, setShowModal] = useState(false);
  const [clubDelete, setClubDelete] = useState();
  return (
    <Fragment>
      <div className='club'>
        {data.map(club => (
          <div className='club-item' key={Math.random().toString()}>
            <p className='text-secondary'>{`Giải vô địch quốc gia ${club.country}`}</p>
            <div className='club-item-info'>
              <i
                className='fa-solid fa-star format-icon'
                onClick={() => {
                  setShowModal(true);
                  setClubDelete(club.club);
                }}></i>
              <p>{`Trận đấu ${club.club}`}</p>
            </div>
          </div>
        ))}
      </div>
      {showModal && <Modal clubDelete={clubDelete} />}
    </Fragment>
  );
};
export default Club;
