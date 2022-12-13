import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './Following.module.scss';
import Image from '~/components/Image';
import * as userService from '~/services/userService';
const cx = classNames.bind(styles);

function Following() {
    const [listUsers, setListUsers] = useState([]);
    useEffect(() => {
        userService
            .getSuggested(1, 18)
            .then((data) => {
                setListUsers([data]);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={cx('main-container')}>
            <div className={cx('list-item')}>
                {listUsers &&
                    listUsers.map((user) =>
                        user.map((item) => (
                            <div className={cx('item')} key={item.id}>
                                {/* {console.log(user, 'check')} */}
                                <Link to={{ pathname: `/@${item.nickname}` }} state={item.nickname}>
                                    <div className={cx('item-video')}>
                                        <video className={cx('video')} src={item.popular_video.file_url}></video>
                                    </div>
                                    <div className={cx('item-info')}>
                                        <span className={cx('logo')}>
                                            <Image
                                                className={cx('avatar')}
                                                src={item.avatar}
                                                alt={item.nickname}
                                            ></Image>
                                        </span>
                                        <h5 className={cx('name')}>{`${item.first_name} ${item.last_name}`}</h5>
                                        <h6 className={cx('nickname')}>{item.nickname}</h6>
                                        <div className={cx('btn-follow')}>
                                            <Button primary large>
                                                Follow
                                            </Button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )),
                    )}
            </div>
        </div>
    );
}

export default Following;
