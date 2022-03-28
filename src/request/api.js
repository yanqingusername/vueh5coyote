import { 
    get
} from './http'

import requestH5Imgs from './requestH5Img'
import requestH5Other from './requestH5Other'


// 登录页面api
// export let getLogin = p => get('/store/login.hn', p); //登录
// export let getVerification = p => get('/store/Verification.hn', p); //获取验证码

// export let getSearchinstrument = p => get('/store/searchinstrument.hn', p); //查询仪器信息

export const udateH5Images = val => requestH5Imgs('', val, 'post');

// export let uploadImgSelect = p => get('/store/upload.hn', p); //查询仪器信息

export const getLogin = val => requestH5Other('/store/login.hn', val, 'get');

export const getVerification = val => requestH5Other('/store/Verification.hn', val, 'get');

export const getInstrumentList = val => requestH5Other('/store/searchinstrument.hn', val, 'get');

export const uploadImgSelect = val => requestH5Other('/store/upload.hn', val, 'post');

export const uploadImgBind = val => requestH5Other('/store/bind_batch.hn', val, 'post');

export const bindinstrument = val => requestH5Other('/store/bindinstrument.hn', val, 'get');

export const getJSSDKHELP = val => requestH5Other('/store/JSSDKHELP.hn', val, 'get');

export const saveinstrument = val => requestH5Other('/store/saveinstrument.hn', val, 'get');






