import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);
function ContactItem({ to, title }) {
    return (
        <NavLink to={to} className={cx('item')}>
            {title}
        </NavLink>
    );
}
ContactItem.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default ContactItem;
