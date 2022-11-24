import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './InfoLayout.module.scss';
import Sidebar from '~/Layout/components/Sidebar';
import Header from '~/Layout/components/Header';
const cx = classNames.bind(styles);
function InfoLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <div className={cx('sidebar-content')}>
                        <Sidebar isLogerIn={false} />
                    </div>
                </div>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
InfoLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default InfoLayout;
