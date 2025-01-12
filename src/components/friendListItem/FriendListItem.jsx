import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={clsx(css.friends)}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {isOnline ? (
        <p className={clsx(css.online)}>Online</p>
      ) : (
        <p className={clsx(css.offline)}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;