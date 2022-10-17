import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/221703674d53fc7c07f7dbd26c657e7a~c5_300x300.webp?x-expires=1665302400&x-signature=89AVm29dAwIUti5yhgZGwSgdTCQ%3D"
                alt="Hieu"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Huy Hieu</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>nguyenhuyhieu22</span>
            </div>
        </div>
    );
}

export default AccountItem;
