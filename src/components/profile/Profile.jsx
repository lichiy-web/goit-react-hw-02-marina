// import React from 'react';
import clsx from 'clsx';
import css from './Profile.module.css';

export default function Profile ({ name, tag, location, image, stats }) {
  return (
    <>
    <div className={clsx('container', css.profile_container)}>
      <div className={clsx(css.user_data)}>
        <img src={image} alt="User avatar" width="150" className={clsx(css.img)} />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.profile_list}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
    </>
  );
}

// export default Profile