import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './VideoPreview.module.scss';

const cx = classNames.bind(styles);

function VideoPreview() {
    return (
        <div className={cx('container')}>
            <div className={cx('video-container')}>
                <div className={cx('blur-background')}></div>
                <div className={cx('video-wrapper')}>
                    <div className={cx('img-video')}>
                        <Image src="" alt=""></Image>
                    </div>
                </div>
                <div className={cx('player-video')}>
                    <video className={cx('video')} autoPlay controls muted playsInline loop>
                        <source src="" type="video/mp4"></source>
                    </video>
                </div>
            </div>
            <div className={cx('content-container')}></div>
        </div>
    );
}

export default VideoPreview;
