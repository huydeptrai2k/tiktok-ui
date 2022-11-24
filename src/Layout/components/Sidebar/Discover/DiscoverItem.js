import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Discover.module.scss';

const cx = classNames.bind(styles);
function DiscoverItem({ to, icon, title }) {
    return (
        <NavLink to={to} className={cx('menu-item')} end>
            <div className={cx('hashtag')}>
                <span className={cx('icon')}>{icon}</span>
                <span className={cx('title')}>{title}</span>
            </div>
        </NavLink>
    );
}
DiscoverItem.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default DiscoverItem;
