import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Contact.module.scss';
import ContactItem from './ContactItem';

const cx = classNames.bind(styles);
function Contact() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu-item')}>
                <ContactItem to={config.routes.home} title="About"></ContactItem>
                <ContactItem to={config.routes.home} title="Newsroom"></ContactItem>
                <ContactItem to={config.routes.home} title="Contact"></ContactItem>
                <ContactItem to={config.routes.home} title="Careers"></ContactItem>
                <ContactItem to={config.routes.home} title="ByteDance"></ContactItem>
            </div>
            <div className={cx('menu-item')}>
                <ContactItem to={config.routes.home} title="Tiktok for Good"></ContactItem>
                <ContactItem to={config.routes.home} title="Advertise"></ContactItem>
                <ContactItem to={config.routes.home} title="Deverlopers"></ContactItem>
                <ContactItem to={config.routes.home} title="Transparency"></ContactItem>
                <ContactItem to={config.routes.home} title="TikTok Rewards"></ContactItem>
                <ContactItem to={config.routes.home} title="TikTok Browse"></ContactItem>
                <ContactItem to={config.routes.home} title="TikTok Embeds"></ContactItem>
            </div>
            <div className={cx('menu-item')}>
                <ContactItem to={config.routes.home} title="Help"></ContactItem>
                <ContactItem to={config.routes.home} title="Safety"></ContactItem>
                <ContactItem to={config.routes.home} title="Terms"></ContactItem>
                <ContactItem to={config.routes.home} title="Privacy"></ContactItem>
                <ContactItem to={config.routes.home} title="Creator Portal"></ContactItem>
                <ContactItem to={config.routes.home} title="Community Guidelines"></ContactItem>
            </div>
            <span className={cx('design')}> © 2022 TikTok</span>
        </div>
    );
}

export default Contact;
