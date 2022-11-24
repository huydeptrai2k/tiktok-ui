import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Discover.module.scss';
import { faHashtag, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DiscoverItem from './DiscoverItem';
import config from '~/config';
const cx = classNames.bind(styles);
function Discover({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <div className={cx('list-hashtag')}>
                <DiscoverItem
                    to={config.routes.profile}
                    title="xuhuong"
                    icon={<FontAwesomeIcon className={cx('icon-music')} icon={faHashtag}></FontAwesomeIcon>}
                ></DiscoverItem>
                <DiscoverItem
                    to={config.routes.profile}
                    title="phuongnhi22"
                    icon={<FontAwesomeIcon className={cx('icon-music')} icon={faHashtag}></FontAwesomeIcon>}
                ></DiscoverItem>
                <DiscoverItem
                    to={config.routes.profile}
                    title="Yêu đơn phương là gì"
                    icon={<FontAwesomeIcon className={cx('icon-music')} icon={faMusic}></FontAwesomeIcon>}
                ></DiscoverItem>
            </div>
        </div>
    );
}

Discover.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Discover;
