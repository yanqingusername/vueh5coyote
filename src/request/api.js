import { 
    get
} from './http'

import requestH5Imgs from './requestH5Img'
import requestH5Other from './requestH5Other'


// 登录页面api
// export let getLogin = p => get('/store/login.hn', p); //登录
// export let getVerification = p => get('/store/Verification.hn', p); //获取验证码

// export let getSearchinstrument = p => get('/store/searchinstrument.hn', p); //查询仪器信息

// export let uploadImgSelect = p => get('/store/upload.hn', p); //查询仪器信息

export const udateH5Images = val => requestH5Imgs('', val, 'post');



export const getVerification = val => requestH5Other('/store/Verification.hn', val, 'get'); //获取验证码

export const getLogin = val => requestH5Other('/store/login.hn', val, 'get'); // 登录

export const getBindbutn = val => requestH5Other('/store/bindbutn.hn', val, 'get'); // 首页上的绑定按钮

export const bindinstrument = val => requestH5Other('/store/bindinstrument.hn', val, 'get'); // 绑定按钮

export const uploadImgSelect = val => requestH5Other('/store/upload.hn', val, 'post'); //上传图片

export const getInstrumentList = val => requestH5Other('/store/searchinstrument.hn', val, 'get'); // 查询仪器信息

export const getUnBindSearch = val => requestH5Other('/store/search.hn', val, 'get'); //解绑时查询仪器信息

export const Unboundinstrument = val => requestH5Other('/store/Unboundinstrument.hn', val, 'get'); //解绑按钮

export const saveinstrument = val => requestH5Other('/store/saveinstrument.hn', val, 'get'); //保存按钮

export const searchSN = val => requestH5Other('/store/searchSN.hn', val, 'post'); // 查询序列号是否存在   每次输入（仪器或模块）序列号的时候调一次查询

export const uploadImgBind = val => requestH5Other('/store/bind_batch.hn', val, 'post'); // 上传图片

export const getJSSDKHELP = val => requestH5Other('/store/JSSDKHELP.hn', val, 'get');


export const getModule = val => requestH5Other('/store/getModule.hn', val, 'get'); // 仪器序列号获取模块

export const UnboundModule = val => requestH5Other('/store/UnboundModule.hn', val, 'get'); // 仪器序列号获取模块








