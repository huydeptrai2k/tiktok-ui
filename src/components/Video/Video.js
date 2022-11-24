import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Video.module.scss';
import VideoItem from './VideoItem';
import * as videoService from '~/services/videoService';
const cx = classNames.bind(styles);
const INIT_PAGE = 9;
const TYPE = 'for-you';
function Video() {
    // const [page, setPage] = useState(INIT_PAGE);
    const [videosResult, setVideosResult] = useState([]);
    useEffect(() => {
        videoService.getVideos(TYPE, INIT_PAGE).then((data) => {
            setVideosResult(data);
        });
    }, []);
    return (
        <div id="focus" tabIndex="1" className={cx('list-video')}>
            {videosResult && videosResult.map((items) => <VideoItem key={items.id} data={items}></VideoItem>)}
        </div>
    );
}

export default Video;
