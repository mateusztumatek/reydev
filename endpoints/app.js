import Request from '../plugins/request';
import config from '../nuxt.config';
export function getLayout(params) {
  return Request({
    url: config.api_url + '/layout',
    method: 'get',
    params: params
  })
}
