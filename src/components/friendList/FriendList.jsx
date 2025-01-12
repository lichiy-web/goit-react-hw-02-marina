// import React from 'react';
import clsx from 'clsx';
import FriendListItem from '../FriendListItem/FriendListItem'
import css from '../FriendList/FriendList.module.css';


export default function FriendList ({ friends }) {
  return (
    <ul className={clsx('container', css.friends_container)}>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}>
              </FriendListItem>
          </li>
        );
      })}
    </ul>
  );
};

// export default FriendList;