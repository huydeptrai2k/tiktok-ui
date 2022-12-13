//publicrouter
import config from '~/config';
import { HeaderOnly, NoneLayout } from '~/Layout';

// page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import InfoLayout from '~/Layout/components/InfoLayout';
import VideoPreview from '~/pages/VideoPreview';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile, layout: InfoLayout },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.video, component: VideoPreview, layout: NoneLayout },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
