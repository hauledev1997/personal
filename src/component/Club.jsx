import { Fragment, useState } from 'react';
import './Club.scss';
import Modal from './Modal';
const data = [
  {
    country: 'England',
    club: 'Arsenal',
    id: 1,
  },
  {
    country: 'England',
    club: 'Liverpool',
    id: 2,
  },
  {
    country: 'Spain',
    club: 'RealMarid',
    id: 3,
  },
  {
    country: 'France',
    club: 'PSG',
    id: 4,
  },
  {
    country: 'England',
    club: 'MU',
    id: 5,
  },
];
const Club = () => {
  const [list, setList] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [clubDelete, setClubDelete] = useState();
  const onDeleteHandler = id => {
    setList(list.filter(club => club.id !== id));
    setShowModal(false);
  };
  return (
    <Fragment>
      <div className="club">
        {list.map(club => (
          <div className="club-item" key={club.id}>
            <p className="text-secondary">{`Giải vô địch quốc gia ${club.country}`}</p>
            <div className="club-item-info">
              <i
                className="fa-solid fa-star format-icon"
                onClick={() => {
                  setShowModal(true);
                  setClubDelete(club);
                }}
              ></i>
              <p>{`Trận đấu ${club.club}`}</p>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <Modal clubDelete={clubDelete} onDelete={onDeleteHandler} />
      )}
    </Fragment>
  );
};
export default Club;
