import * as httpRequest from '~/ultis/httpRequest';

export const getUserFollowings = async (page) => {
    try {
        const res = await httpRequest.get('me/followings', {
            params: {
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
