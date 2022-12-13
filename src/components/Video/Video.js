import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Video.module.scss';
import VideoItem from './VideoItem';
import * as videoService from '~/services/videoService';
const cx = classNames.bind(styles);
const INIT_PAGE = 0;
const TYPE = 'for-you';
function Video() {
    const [page, setPage] = useState(INIT_PAGE);
    const [videosResult, setVideosResult] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                videoService.getVideos(TYPE, INIT_PAGE).then((data) => {
                    setVideosResult((prev) => [...prev, ...data]);
                });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [page]);

    useEffect(() => {
        const handleScroll = (e) => {
            const scrollHeight = e.target.documentElement.scrollHeight;
            const currentHeight = e.target.documentElement.scrollTop + window.innerHeight;
            if (currentHeight + 1 >= scrollHeight) {
                setPage(page + 1);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [page]);

    return (
        <div id="focus" tabIndex="1" className={cx('list-video')}>
            {videosResult && videosResult.map((items) => <VideoItem key={items.id} data={items}></VideoItem>)}
        </div>
    );
}

export default Video;
