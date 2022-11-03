import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview/AccountPreview';
const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview></AccountPreview>
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/36262a14448e5e38e9dd55d312908347~c5_100x100.jpeg?x-expires=1667484000&x-signature=PDOZC2G6tZPEuDw5XklHVYr28QM%3D"
                        alt=""
                    ></img>
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>candybong</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                        </p>
                        <p className={cx('name')}>Nguyen Phuong Nhi</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
