import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Image from '~/components/Image';

import { ShareIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEllipsis, faLock } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Profile() {
    const [userResult, setUserResult] = useState([]);
    const location = useLocation();
    useEffect(() => {
        // anUserService.getAnUser(location.state).then((data) => {
        //     setUserResult(data);

        // });
        axios
            .get(`https://tiktok.fullstack.edu.vn/api/users${location.pathname}`)
            .then(function (response) {
                // handle success
                console.log(response.data.data.videos);
                setUserResult(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [location]);
    return (
        <div className={cx('layout-content')}>
            <div className={cx('layout-header')}>
                <div className={cx('share-info')}>
                    <div className={cx('avatar')}>
                        <span className={cx('avatar-content')}>
                            <Image className={cx('img-avatar')} src={userResult.avatar} alt=""></Image>
                        </span>
                    </div>
                    <div className={cx('title')}>
                        <h2 className={cx('nickname')}>
                            {userResult.nickname}
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                        </h2>
                        <h1 className={cx('full-name')}>{`${userResult.first_name} ${userResult.last_name}`}</h1>
                        <div className={cx('share-follow')}>
                            <div className={cx('btn-follow')}>
                                <button className={cx('btn-btn-follow')}>Follow</button>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className={cx('count-info')}>
                    <div className={cx('number-info')}>
                        <strong className={cx('number')}>{userResult.followings_count}</strong>
                        <span className={cx('follow')}> Following</span>
                    </div>
                    <div className={cx('number-info')}>
                        <strong className={cx('number')}>{userResult.followers_count}</strong>
                        <span className={cx('follow')}> Follower</span>
                    </div>
                    <div className={cx('number-info')}>
                        <strong className={cx('number')}>{userResult.likes_count}</strong>
                        <span className={cx('follow')}> Likes</span>
                    </div>
                </h2>
                <div className={'user-bio'}>{userResult.bio}</div>
                <div className={cx('share-link')}>
                    <a href={userResult.facebook_url}> link</a>
                </div>
                <div className={cx('action')}>
                    <div className={cx('share-action')}>
                        <ShareIcon></ShareIcon>
                    </div>
                    <div className={cx('action-more')}>
                        <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <div className={cx('layout-main')}>
                <div className={cx('menu-tab')}>
                    <div className={cx('videos-tab')}>
                        <span>Videos</span>
                    </div>
                    <div className={cx('likes-tab')}>
                        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                        <span>Liked</span>
                    </div>
                </div>
                <div className={cx('list-video')}>
                    <div className={cx('list-item')}>
                        {userResult.videos &&
                            userResult.videos.map((item) => (
                                <div className={cx('item')} key={item.id}>
                                    <Link to={'#'}>
                                        <video
                                            className={cx('video')}
                                            poster={item.thumb_url}
                                            src={item.file_url}
                                        ></video>
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
