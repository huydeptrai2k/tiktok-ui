import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import styles from './Sidebar.module.scss';
import { memo } from 'react';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import Discover from './Discover';
import Contact from './Contact';
import * as userService from '~/services/userService';
import Button from '~/components/Button';
// import * as followingUserService from '~/services/followUserService';

const cx = classNames.bind(styles);
const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar(isLogerIn) {
    const [page, setPage] = useState(INIT_PAGE);
    const [isSeeAll, setIsSeeAll] = useState(false);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    // const [followingUsers, setFollowingUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested(page, PER_PAGE)
            .then((data) => {
                console.log(data);
                setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((error) => console.log(error));
    }, [page]);
    const handleViewChange = (isSeeAll) => {
        setIsSeeAll((prevState) => !prevState);
        if (isSeeAll) {
            setPage(page + 1);
        } else {
        }
    };

    // useEffect(() => {
    //     followingUserService
    //     .getUserFollowings(page)
    //     .then((item) => {
    //         console.log(item, 'FOLLOW');
    //         setFollowingUsers((prevUserFollow) => [...prevUserFollow, ...item]);
    //     });
    // }, [page]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <Menu>
                    <MenuItem
                        title="For Your"
                        to={config.routes.home}
                        icon={<HomeIcon></HomeIcon>}
                        activeIcon={<HomeActiveIcon></HomeActiveIcon>}
                    ></MenuItem>
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<UserGroupIcon></UserGroupIcon>}
                        activeIcon={<UserGroupActiveIcon></UserGroupActiveIcon>}
                    ></MenuItem>
                    <MenuItem
                        title="Live"
                        to={config.routes.live}
                        icon={<LiveIcon></LiveIcon>}
                        activeIcon={<LiveActiveIcon></LiveActiveIcon>}
                    ></MenuItem>
                    <div className={cx('menu-login')}>
                        <p className={cx('title-login')}>Log in to follow creators, like videos, and view comments.</p>
                        <Button className={cx('btn-login')}>Login</Button>
                    </div>
                </Menu>
                <SuggestedAccounts
                    label="Suggested accounts"
                    data={suggestedUsers}
                    isSeeAll={isSeeAll}
                    onViewChange={handleViewChange}
                ></SuggestedAccounts>
                {!isLogerIn && <SuggestedAccounts label="Following accounts" data={suggestedUsers}></SuggestedAccounts>}
                <Discover label="Discover"></Discover>
                <Contact></Contact>
            </div>
        </div>
    );
}

export default memo(Sidebar);
