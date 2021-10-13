import axios from "axios";

export const HTTP = axios.create({
    baseURL: 'https://api.discogs.com/',
})

export const HTTP_PARAM_ACCESS = '?key=' + process.env.VUE_APP_DISCOGS_KEY + '&secret=' + process.env.VUE_APP_DISCOGS_SECRET;

export default class HttpCommon {

    static getReleaseApi(releaseId) {
        return 'releases/' + releaseId + HTTP_PARAM_ACCESS;
    }
    static getCollectionApi(username) {
        return 'users/' + username + '/collection/folders/0/releases' + HTTP_PARAM_ACCESS;
    }

}
