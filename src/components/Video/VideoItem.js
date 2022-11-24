import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';

import { faComment, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';

const cx = classNames.bind(styles);
function VideoItem({ data }) {
    // let video2 = document.querySelectorAll('video');
    // video2.forEach((video2) => {
    //     let playPromise = video2.play();
    //     if (playPromise !== undefined) {
    //         playPromise.then(() => {
    //             let observer = new IntersectionObserver(
    //                 (entries) => {
    //                     entries.forEach((entry) => {
    //                         video2.muted = false;
    //                         if (entry.intersectionRatio !== 1 && !video2.paused) {
    //                             video2.pause();
    //                         } else if (entry.intersectionRatio > 0.5 && video2.paused) {
    //                             video2.play();
    //                         }
    //                     });
    //                 },
    //                 { threshold: 0.5 },
    //             );
    //             observer.observe(video2);
    //         });
    //     }
    // });

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <img className={cx('avatar')} src={data.user.avatar} alt=""></img>
                    <div className={cx('info')}>
                        <div className={cx('item-info')}>
                            <Link
                                className={cx('nickname')}
                                to={{ pathname: `/@${data.user.nickname}` }}
                                state={data.user.nickname}
                            >
                                {' '}
                                {data.user.nickname}
                            </Link>
                            <Link className={cx('name')} to={`/@${data.user.nickname}`}>
                                {' '}
                                {`${data.user.first_name} ${data.user.last_name}`}
                            </Link>
                        </div>
                        <div>{data.user.bio}</div>
                        <div>
                            <Link to="#">
                                <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
                                <span className={cx('music-name')}>{data.music}</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('btn-follow')}>
                    <Button outline small>
                        Follow
                    </Button>
                </div>
            </div>
            <div className={cx('video-content')}>
                <video className={cx('video')} poster={data.thumb_url} controls autoPlay muted playsInline loop>
                    <source src={data.file_url} type="video/mp4"></source>
                </video>
                <div className={cx('list-icon')}>
                    <div className={cx('icon-content')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        </div>
                        <span className={cx('number')}>{data.likes_count}</span>
                    </div>
                    <div className={cx('icon-content')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                        </div>
                        <span className={cx('number')}>{data.comments_count}</span>
                    </div>
                    <div className={cx('icon-content')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>
                        </div>
                        <span className={cx('number')}>{data.shares_count}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
