import nookies from 'nookies';


const ONE_SECOND = 1;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_YEAR = ONE_DAY * 365

export const tokenService = {
    save(accessToken, ctx = null) {
        nookies.set(ctx, 'access_token', accessToken, {
            maxAge: ONE_HOUR,
            path: '/',
        })
    },

    get(ctx = null) {
        const cookies = nookies.get(ctx)
        return cookies['access_token']
    },

    delete(ctx = null) {
        nookies.destroy(ctx, 'access_token')
    }
}