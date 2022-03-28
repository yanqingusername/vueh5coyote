<template>
  <div class="child-section">
    <Header>
      <div class="header-content">
        <div class="header-title">绑定仪器</div>
        <div class="header-back">
          <div class="back" @click="handleTitleBack">
            <img class="icon_logo" src="../assets/images/close.png" alt="" />
          </div>
        </div>
      </div>
    </Header>
   
    <div class="bind_main">
      <div class="bind_main_item">
        <div class="icon_login_text">耳环编号</div>
        <div class="form-item">
          <div class="select-item input-item">
            <input
              v-model="label_sn"
              type="text"
              name="label_sn"
              placeholder="请填写/扫描耳环编号"
            />
            <div class="pic-div"  @click="OnQRcode">
                <img class="pic-img-item" id="img1">
                  <img class="pic-img-icon" src="../assets/images/icon_scan.png" alt="" />
                  <!-- <input class="img-item" type="file" accept="image/*" id="uploadImg1" name="uploadImg1" alt="" @change="handleFileImg1" /> -->
                </img>
              </div>
          </div>
        </div>
      </div>

      <div class="bind_main_item">
        <div class="icon_login_text">仪器序列号</div>
        <div class="form-item" style="border-bottom: none;">
          <div class="select-item input-item">
            <input
              v-model="instrument_sn"
              type="text"
              name="instrument_sn"
              placeholder="请填写/扫描仪器SN号"/>
            <div class="pic-div">
                <img class="pic-img-item" id="img2">
                  <img class="pic-img-icon" src="../assets/images/camera.png" alt="" />
                  <input class="img-item" type="file" accept="image/*" id="uploadImg2" name="uploadImg2" alt="" @change="handleFileImg2"/>
                </img>
              </div>
          </div>
        </div>
      </div>

      <div class="bind_main_item">
        <div class="icon_login_text">机芯列号(选填)</div>
        <div class="form-item" style="border-bottom: none;">
          <div class="select-item input-item">
            <input
              v-model="chassis_sn"
              type="text"
              name="chassis_sn"
              placeholder="请填写/扫描机芯号"/>
            <div class="pic-div">
                <img class="pic-img-item" id="img">
                  <img class="pic-img-icon" src="../assets/images/camera.png" alt="" />
                  <input class="img-item" type="file" accept="image/*" id="uploadImg" name="uploadImg" alt="" @change="handleFileImg" />
                </img>
              </div>
          </div>
        </div>
      </div>

      <div class="bind_main_item">
        <div class="icon_login_text">模块信息(选填)</div>
        <div class="form-item" style="padding: 8px 0px;border-bottom: 1px solid #DDDDDD;">
          <div class="select-item input-item">
            <input
              v-model="num1_sn"
              type="text"
              name="num1_sn"
              placeholder="模块1编号"/>
            <div class="pic-div">
                <img class="pic-img-item" id="img3">
                  <img class="pic-img-icon" src="../assets/images/camera.png" alt="" />
                  <input class="img-item" type="file" accept="image/*" id="uploadImg3" name="uploadImg3" alt="" @change="handleFileImg3"/>
                </img>
              </div>
          </div>
        </div>
        <div class="form-item" style="padding: 8px 0px;border-bottom: 1px solid #DDDDDD;">
          <div class="select-item input-item">
            <input
              v-model="num2_sn"
              type="text"
              name="num2_sn"
              placeholder="模块2编号"/>
            <div class="pic-div">
                <img class="pic-img-item" id="img4">
                  <img class="pic-img-icon" src="../assets/images/camera.png" alt="" />
                  <input class="img-item" type="file" accept="image/*" id="uploadImg4" name="uploadImg4" alt="" @change="handleFileImg4"/>
                </img>
              </div>
          </div>
        </div>
        <div class="form-item" style="padding: 8px 0px;border-bottom: 1px solid #DDDDDD;">
          <div class="select-item input-item">
            <input
              v-model="num3_sn"
              type="text"
              name="num3_sn"
              placeholder="模块3编号"/>
            <div class="pic-div">
                <img class="pic-img-item" id="img5">
                  <img class="pic-img-icon" src="../assets/images/camera.png" alt="" />
                  <input class="img-item" type="file" accept="image/*" id="uploadImg5" name="uploadImg5" alt="" @change="handleFileImg5"/>
                </img>
              </div>
          </div>
        </div>
        <div class="form-item" style="padding: 8px 0px 0px 0px;">
          <div class="select-item input-item">
            <input
              v-model="num4_sn"
              type="text"
              name="num4_sn"
              placeholder="模块4编号"/>
            <div class="pic-div">
                <img class="pic-img-item" id="img6">
                  <img class="pic-img-icon" src="../assets/images/camera.png" alt="" />
                  <input class="img-item" type="file" accept="image/*" id="uploadImg6" name="uploadImg6" alt="" @change="handleFileImg6"/>
                </img>
              </div>
          </div>
        </div>
      </div>

      <div class="bind_main_item">
        <div class="icon_login_text">图片记录</div>
        <div class="form-item" style="border-bottom: none;">
          <div class="img_1_view">
            <img class="img_1" v-if="imgurl2" :src="imgurl2" alt="" />
            <div class="img_1" v-else></div>
            <div class="img_1_text">仪器序列号</div>
          </div>
          <div class="img_1_view">
            <img class="img_1" v-if="imgurl" :src="imgurl" alt="" />
            <div class="img_1" v-else></div>
            <div class="img_1_text">机芯序列号</div>
          </div>
          <div class="img_1_view">
            <img class="img_1" v-if="imgurl3" :src="imgurl3" alt="" />
            <div class="img_1" v-else></div>
            <div class="img_1_text">模块1</div>
          </div>
          <div class="img_1_view">
           <img class="img_1" v-if="imgurl4" :src="imgurl4" alt="" />
            <div class="img_1" v-else></div>
            <div class="img_1_text">模块2</div>
          </div>
          <div class="img_1_view">
            <img class="img_1" v-if="imgurl5" :src="imgurl5" alt="" />
            <div class="img_1" v-else></div>
            <div class="img_1_text">模块3</div>
          </div>
        </div>
        <div class="form-item" style="border-bottom: none;">
          <div class="img_1_view">
            <img class="img_1" v-if="imgurl6" :src="imgurl6" alt="" />
            <div class="img_1" v-else></div>
            <div class="img_1_text">模块4</div>
          </div>

        </div>
      </div>
      <div class="empty_view"></div>
     <div class="view_bottom">
        <div class="view_bottom_left" @click="bindInstrument" :data-number="0">保存</div>
        <div class="view_bottom_right" @click="bindInstrument" :data-number="1">确认绑定</div>
      </div>
    </div>
    
    <van-dialog
            v-model="isShow"
            show-cancel-button
            :beforeClose="beforeClose"
    >
    <div style="height: 300px;overflow: auto;margin: 30px 30px 10px;">
        <div
            class="dialog_item"
            v-for="(item, index) in numberList"
            :key="index"
            @click="bindSelect"
            :data-linecontent="item.line_content"
            :data-index="index">
            <div @click="bindSelect"
            :data-linecontent="item.line_content"
            :data-index="index">{{item.line_content}}</div>
            <img v-if="labelIndex == index" style="width:20px;height:20px;" src="../assets/images/icon_selected.png" alt="" />
        </div>
    </div>
 
    </van-dialog>

  </div>
</template>


<script>
/**
 * 注: 此页面只为移动端服务, 在pc模式下会导致页面失去比例
 * h5页
 */

import Header from "../components/header.vue";
import { udateH5Images,uploadImgSelect,uploadImgBind ,bindinstrument, getJSSDKHELP,saveinstrument} from "../request/api";
// import { Notify } from "vant";
import { Button,Dialog ,Uploader,Toast,ImagePreview,Loading} from 'vant';
import wx from 'jweixin-module';

var imgurl1= ''
var imgurl= ''
 var imgurl2= ''
 var imgurl3= ''
  var imgurl4= ''
 var imgurl5= ''
var imgurl6= ''

export default {
  name: "",
  components: {
    Header,
    [Dialog.Component.name]: Dialog.Component, //Dialog.Component写成这样才生效
    [Button.name]: Button,
    Uploader
  },
  data() {
    return {
      label_sn: "",
      chassis_sn: "",
      instrument_sn: "",
      num1_sn: "",
      num2_sn: "",
      num3_sn: "",
      num4_sn: "",
      numberList: [],
      lableLength: 1,
      isShow: false,
      labelIndex: -1,
      imgurl1: '',
      imgurl: '',
      imgurl2: '',
      imgurl3: '',
      imgurl4: '',
      imgurl5: '',
      imgurl6: '',
      label_sn_old: '',
      chassis_sn_old: '',
      instrument_sn_old: "",
      num1_sn_old: "",
      num2_sn_old: "",
      num3_sn_old: "",
      num4_sn_old: "",
      numberType: "0",
    };
  },
  mounted() {
    this.isWechat();
  },
  methods: {
    isWechat() {
      const ua = window.navigator.userAgent.toLowerCase();
      if (ua.match(/micromessenger/i) == 'micromessenger') {
        // return true;
        console.log('微信浏览器');
        this.scanQRJssdk();
      } else {
        console.log('普通浏览器,请在手机微信浏览器打开此页面');
        return false;
      }
    },
    // 初始化sdk配置
    async scanQRJssdk() {
      // alert(`url链接:${window.location.href}`);
	  const u = navigator.userAgent;
      const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // Android
      const isIOS = navigator.platform.indexOf('iPhone') != -1;//ios
       let url = '';
      if (isAndroid) {
        url = location.href;
      }
      if (isIOS) {
        url = location.href.split('#')[0]; // hash模式下,#后面的部分如果带上ios中config会不对
      }
      const api = [];
      // 'qrCode','barCode'
      api.push('qrCode');
      api.push('barCode');
      // alert(url);
      const resData = await getJSSDKHELP({ url });	// 根据接口返回appId，timestamp等数据
      console.log('获取微信配置结果', resData);
      if (resData) {
        // alert(JSON.stringify(resData.data));
        wx.config({
          // beta: true,
          debug: false,
          appId: resData.data.appId,
          timestamp: resData.data.timestamp,
          nonceStr: resData.data.nonceStr,
          signature: resData.data.signature,
          jsApiList: ['checkJsApi', 'scanQRCode']
        });
        wx.ready(() => {
          wx.checkJsApi({
            jsApiList: ['scanQRCode'],
            success(res) {
              console.log('aaaa', res);
            }
          });
        });
        wx.error((res) => {
          alert(`出错了：${res.errMsg}`);// 这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然		后根据微信文档查询即可。
        });
      }
    },
    OnQRcode() {	// 点击的时候调起扫一扫功能呢
      const that = this;
      // alert('111')
      console.log('1');
      wx.scanQRCode({
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
        success(res) {
          const resultStrArr = res.resultStr.split(',');		
          // 转为数组时为了避免扫描一维码是返回CODE_128,20180528前面会添加一个CODE_128所以转为数组获		取最后一条就行了
          console.log(resultStrArr[resultStrArr.length - 1]); // 输出扫码信息
          that.result = resultStrArr[resultStrArr.length - 1];
          that.label_sn = resultStrArr[resultStrArr.length - 1];
        },
        fail(res) {
          console.log('err', res);
        }
      });
    },
     handleTitleBack() {
      this.$router.back();
    },
    bindSelect(e){
      this.labelIndex = e.target.dataset.index;
      if(this.numberType == 1){
                        
        this.label_sn_old = e.target.dataset.linecontent;
                     }

      if(this.numberType == 0){
                        
        this.chassis_sn_old = e.target.dataset.linecontent;
                     }
                     if(this.numberType == 2){
                       this.instrument_sn_old = e.target.dataset.linecontent;
                     }
                     if(this.numberType == 3){
                       this.num1_sn_old = e.target.dataset.linecontent;
                     }
                     if(this.numberType == 4){
                      this.num2_sn_old = e.target.dataset.linecontent;
                     }
                     if(this.numberType == 5){
                       this.num3_sn_old = e.target.dataset.linecontent;
                     }
                     if(this.numberType == 6){
                       this.num4_sn_old = e.target.dataset.linecontent;
                     }


    },
    beforeClose(action, done) {
                if(action === 'confirm') {
                  if(this.numberType == 1){
                        this.label_sn = this.label_sn_old;
                     }
                   
                   if(this.numberType == 0){
                      this.chassis_sn = this.chassis_sn_old;
                     }
                     if(this.numberType == 2){
                       this.instrument_sn = this.instrument_sn_old;
                     }
                     if(this.numberType == 3){
                       this.num1_sn = this.num1_sn_old;
                     }
                     if(this.numberType == 4){
                      this.num2_sn = this.num2_sn_old;
                     }
                     if(this.numberType == 5){
                       this.num3_sn = this.num3_sn_old;
                     }
                     if(this.numberType == 6){
                       this.num4_sn = this.num4_sn_old;
                     }
                   done()
                } else if(action === 'cancel') {
                  this.chassis_sn = '';
                  this.labelIndex = -1;
                    done() //关闭
                }
            },
    setPicImg(value,number){
       
      let that = this;
      if(value){
        
       Toast.loading({
         duration: 2000, // 持续展示 toast
         forbidClick: true,
         message: "加载中..."
     });

        let start = value.indexOf(',') + 1;
                  let dataurl = value.substr(start);
                   uploadImgBind({
                     'image_64': dataurl,
                   }).then((res)=>{
                     if(number == 1){
                       that.imgurl1 = res.data.msg
                     }
                     if(number == 0){
                       that.imgurl = res.data.msg
                     }
                     if(number == 2){
                       that.imgurl2 = res.data.msg
                     }
                     if(number == 3){
                       that.imgurl3 = res.data.msg
                     }
                     if(number == 4){
                       that.imgurl4 = res.data.msg
                     }
                     if(number == 5){
                       that.imgurl5 = res.data.msg
                     }
                     if(number == 6){
                       that.imgurl6 = res.data.msg
                     }
                     
                   }).catch((err)=>{
                      alert(err)
                   })

                  udateH5Images({
                    'image_base64':value,
                      'api_key': 'gQfz-MnGIuRUbtzJK8wB_x1ZVEc45J0H', //请填写你创建的 apikey
                      'api_secret': 'GNl9vID_5KjzzbG2UG51vswvYeb06vnu',
                  }).then((res)=>{
                    console.log(res)
                      that.numberList = res.data.text_info;
                    
                    let numberListNew = [];
                    let reg = /[^a-z\d]/ig;
                    for(let i =0;i< that.numberList.length;i++){
                      let item = that.numberList[i];
                      if(item.line_content!= null && item.line_content != ""){
                        if(item.line_content.indexOf(":") >=0 || item.line_content.indexOf("：")>=0){
                          item.line_content = item.line_content.split(":")[1] || item.line_content.split("：")[1];
                          item.line_content = item.line_content.replace(reg, "")
                        }else{
                          item.line_content = item.line_content.replace(reg, "")
                        }
                        if(item.line_content.length >= that.lableLength){
                          numberListNew.push(item);
                        }
                      }  
                    }
                    that.numberList = numberListNew
                      if(that.numberList.length> 0){
                        that.labelIndex= -1;
                        that.isShow = true;
                        that.numberType = number;
                      }
                   
                  });
      }
    },
    handleFileImg1() {
      let that = this;
      let uploadImg = document.getElementById('uploadImg1')
    // 为了获取图片的本地路径
        window.URL = window.URL || window.webkitURL;
    // 获取移动端类型Android   iPhone  ipad
        let sUserAgent = navigator.userAgent.toLowerCase();
    // 获取当前图片信息（单张图片上传）
        let selected_file = uploadImg.files[0];
        console.log(selected_file);
        if (sUserAgent.match(/android/i) == "android") {
          let img1 = document.getElementById('img1');
            let img = new Image();
    	    // 生成一个本地图片展示路径
            img.src = window.URL.createObjectURL(selected_file);
            let reader = new FileReader();//简单来说就是异步读取电脑中的文件
            reader.onload = function (e) {
                imgurl1 = e.target.result;

                that.setPicImg(e.target.result,1);
            };
            img1.src = window.URL.createObjectURL(selected_file);
            reader.readAsDataURL(selected_file);
        } else {
            if(selected_file){
              //判断文件类型是否为图片
              if (!selected_file.type.match(/image.*/)) return false;
              let img = document.getElementById('img1');
              // base64赋值
              img.file = selected_file;
              img.onload = function () {
                  imgurl1 = img.src;
              };
              let reader = new FileReader();
              reader.onload = function (e) {
                  img.src = e.target.result;
                  imgurl1 = img.src;

                  that.setPicImg(e.target.result,1);
              };
              reader.readAsDataURL(selected_file);
            }
        }
    },
    handleFileImg() {
      let that = this;
      let uploadImg = document.getElementById('uploadImg')
    // 为了获取图片的本地路径
        window.URL = window.URL || window.webkitURL;
    // 获取移动端类型Android   iPhone  ipad
        let sUserAgent = navigator.userAgent.toLowerCase();
    // 获取当前图片信息（单张图片上传）
        let selected_file = uploadImg.files[0];
        console.log(selected_file);
        if (sUserAgent.match(/android/i) == "android") {
          let img1 = document.getElementById('img');
            let img = new Image();
    	    // 生成一个本地图片展示路径
            img.src = window.URL.createObjectURL(selected_file);
            let reader = new FileReader();//简单来说就是异步读取电脑中的文件
            reader.onload = function (e) {
                imgurl = e.target.result;

                that.setPicImg(e.target.result,0);
            };
            img1.src = window.URL.createObjectURL(selected_file);
            reader.readAsDataURL(selected_file);
        } else {
            if(selected_file){
              //判断文件类型是否为图片
              if (!selected_file.type.match(/image.*/)) return false;
              let img = document.getElementById('img');
              // base64赋值
              img.file = selected_file;
              img.onload = function () {
                  imgurl = img.src;
              };
              let reader = new FileReader();
              reader.onload = function (e) {
                  img.src = e.target.result;
                  imgurl = img.src;

                  that.setPicImg(e.target.result,0);
              };
              reader.readAsDataURL(selected_file);
            }
        }
    },
     handleFileImg2() {
      let that = this;
      let uploadImg = document.getElementById('uploadImg2')
    // 为了获取图片的本地路径
        window.URL = window.URL || window.webkitURL;
    // 获取移动端类型Android   iPhone  ipad
        let sUserAgent = navigator.userAgent.toLowerCase();
    // 获取当前图片信息（单张图片上传）
        let selected_file = uploadImg.files[0];
        console.log(selected_file);
        if (sUserAgent.match(/android/i) == "android") {
          let img1 = document.getElementById('img2');
            let img = new Image();
    	    // 生成一个本地图片展示路径
            img.src = window.URL.createObjectURL(selected_file);
            let reader = new FileReader();//简单来说就是异步读取电脑中的文件
            reader.onload = function (e) {
                imgurl2 = e.target.result;

                that.setPicImg(e.target.result,2);
            };
            img1.src = window.URL.createObjectURL(selected_file);
            reader.readAsDataURL(selected_file);
        } else {
            if(selected_file){
              //判断文件类型是否为图片
              if (!selected_file.type.match(/image.*/)) return false;
              let img = document.getElementById('img2');
              // base64赋值
              img.file = selected_file;
              img.onload = function () {
                  imgurl2 = img.src;
              };
              let reader = new FileReader();
              reader.onload = function (e) {
                  img.src = e.target.result;
                  imgurl2 = img.src;

                  that.setPicImg(e.target.result,2);
              };
              reader.readAsDataURL(selected_file);
            }
        }
    },
     handleFileImg3() {
      let that = this;
      let uploadImg = document.getElementById('uploadImg3')
    // 为了获取图片的本地路径
        window.URL = window.URL || window.webkitURL;
    // 获取移动端类型Android   iPhone  ipad
        let sUserAgent = navigator.userAgent.toLowerCase();
    // 获取当前图片信息（单张图片上传）
        let selected_file = uploadImg.files[0];
        console.log(selected_file);
        if (sUserAgent.match(/android/i) == "android") {
          let img1 = document.getElementById('img3');
            let img = new Image();
    	    // 生成一个本地图片展示路径
            img.src = window.URL.createObjectURL(selected_file);
            let reader = new FileReader();//简单来说就是异步读取电脑中的文件
            reader.onload = function (e) {
                imgurl3 = e.target.result;

                that.setPicImg(e.target.result,3);
            };
            img1.src = window.URL.createObjectURL(selected_file);
            reader.readAsDataURL(selected_file);
        } else {
            if(selected_file){
              //判断文件类型是否为图片
              if (!selected_file.type.match(/image.*/)) return false;
              let img = document.getElementById('img3');
              // base64赋值
              img.file = selected_file;
              img.onload = function () {
                  imgurl3 = img.src;
              };
              let reader = new FileReader();
              reader.onload = function (e) {
                  img.src = e.target.result;
                  imgurl3 = img.src;

                  that.setPicImg(e.target.result,3);
              };
              reader.readAsDataURL(selected_file);
            }
        }
    },
     handleFileImg4() {
      let that = this;
      let uploadImg = document.getElementById('uploadImg4')
    // 为了获取图片的本地路径
        window.URL = window.URL || window.webkitURL;
    // 获取移动端类型Android   iPhone  ipad
        let sUserAgent = navigator.userAgent.toLowerCase();
    // 获取当前图片信息（单张图片上传）
        let selected_file = uploadImg.files[0];
        console.log(selected_file);
        if (sUserAgent.match(/android/i) == "android") {
          let img1 = document.getElementById('img4');
            let img = new Image();
    	    // 生成一个本地图片展示路径
            img.src = window.URL.createObjectURL(selected_file);
            let reader = new FileReader();//简单来说就是异步读取电脑中的文件
            reader.onload = function (e) {
                imgurl4 = e.target.result;

                that.setPicImg(e.target.result,4);
            };
            img1.src = window.URL.createObjectURL(selected_file);
            reader.readAsDataURL(selected_file);
        } else {
            if(selected_file){
              //判断文件类型是否为图片
              if (!selected_file.type.match(/image.*/)) return false;
              let img = document.getElementById('img4');
              // base64赋值
              img.file = selected_file;
              img.onload = function () {
                  imgurl4 = img.src;
              };
              let reader = new FileReader();
              reader.onload = function (e) {
                  img.src = e.target.result;
                  imgurl4 = img.src;

                  that.setPicImg(e.target.result,4);
              };
              reader.readAsDataURL(selected_file);
            }
        }
    },
     handleFileImg5() {
      let that = this;
      let uploadImg = document.getElementById('uploadImg5')
    // 为了获取图片的本地路径
        window.URL = window.URL || window.webkitURL;
    // 获取移动端类型Android   iPhone  ipad
        let sUserAgent = navigator.userAgent.toLowerCase();
    // 获取当前图片信息（单张图片上传）
        let selected_file = uploadImg.files[0];
        console.log(selected_file);
        if (sUserAgent.match(/android/i) == "android") {
          let img1 = document.getElementById('img5');
            let img = new Image();
    	    // 生成一个本地图片展示路径
            img.src = window.URL.createObjectURL(selected_file);
            let reader = new FileReader();//简单来说就是异步读取电脑中的文件
            reader.onload = function (e) {
                imgurl5 = e.target.result;

                that.setPicImg(e.target.result,5);
            };
            img1.src = window.URL.createObjectURL(selected_file);
            reader.readAsDataURL(selected_file);
        } else {
            if(selected_file){
              //判断文件类型是否为图片
              if (!selected_file.type.match(/image.*/)) return false;
              let img = document.getElementById('img5');
              // base64赋值
              img.file = selected_file;
              img.onload = function () {
                  imgurl5 = img.src;
              };
              let reader = new FileReader();
              reader.onload = function (e) {
                  img.src = e.target.result;
                  imgurl5 = img.src;

                  that.setPicImg(e.target.result,5);
              };
              reader.readAsDataURL(selected_file);
            }
        }
    },
     handleFileImg6() {
      let that = this;
      let uploadImg = document.getElementById('uploadImg6')
    // 为了获取图片的本地路径
        window.URL = window.URL || window.webkitURL;
    // 获取移动端类型Android   iPhone  ipad
        let sUserAgent = navigator.userAgent.toLowerCase();
    // 获取当前图片信息（单张图片上传）
        let selected_file = uploadImg.files[0];
        console.log(selected_file);
        if (sUserAgent.match(/android/i) == "android") {
          let img1 = document.getElementById('img6');
            let img = new Image();
    	    // 生成一个本地图片展示路径
            img.src = window.URL.createObjectURL(selected_file);
            let reader = new FileReader();//简单来说就是异步读取电脑中的文件
            reader.onload = function (e) {
                imgurl6 = e.target.result;

                that.setPicImg(e.target.result,6);
            };
            img1.src = window.URL.createObjectURL(selected_file);
            reader.readAsDataURL(selected_file);
        } else {
            if(selected_file){
              //判断文件类型是否为图片
              if (!selected_file.type.match(/image.*/)) return false;
              let img = document.getElementById('img6');
              // base64赋值
              img.file = selected_file;
              img.onload = function () {
                  imgurl6 = img.src;
              };
              let reader = new FileReader();
              reader.onload = function (e) {
                  img.src = e.target.result;
                  imgurl6 = img.src;

                  that.setPicImg(e.target.result,6);
              };
              reader.readAsDataURL(selected_file);
            }
        }
    },
    bindInstrument(e) {
      let number = e.target.dataset.number;
      let that = this;
      if (this.label_sn == '' || this.instrument_SN == '' || this.chassis == '') {
        Toast('不能为空');
        return;
      }
      let module = []
      if(this.num1_sn && this.imgurl3){
        let obj = {
          "id": '',
					"num":1,//模块一
					"sn": this.num1_sn,//模块一的序列号
					"pic":this.imgurl3//图
        }
        module.push(obj)
      }
      if(this.num2_sn && this.imgurl4){
        let obj = {
          "id": '',
					"num":2,//模块一
					"sn": this.num2_sn,//模块一的序列号
					"pic":this.imgurl4//图
        }
        module.push(obj)
      }
      if(this.num3_sn && this.imgurl5){
        let obj = {
          "id": '',
					"num":3,//模块一
					"sn": this.num3_sn,//模块一的序列号
					"pic":this.imgurl5//图
        }
        module.push(obj)
      }
      if(this.num4_sn && this.imgurl6){
        let obj = {
          "id": '',
					"num":4,//模块一
					"sn": this.num4_sn,//模块一的序列号
					"pic":this.imgurl6//图
        }
        module.push(obj)
      }
      let params = {
        id: "",
        label: this.label_sn,
        instrument_SN: this.instrument_sn,
        snpic: this.imgurl2,
        chassisid: "",
        chassis: this.chassis_sn,
        chassispic: this.imgurl,
        module: module
      }
      console.log('---->:',params)

      if(number == 1){
        bindinstrument({
        data: params,
        status: 1
      }).then((res) => {
        if (res.data.success) {
          Dialog.confirm({
            title: '标题',
            message: res.data.msg,
            cancelButtonText: '返回首页',
            cancelButtonColor:'#666666',
            confirmButtonText: '继续绑定',
            confirmButtonColor: '#307FF5'
          })
          .then(() => {
            that.label_sn= "";
            that.chassis_sn= "";
            that.instrument_sn= "";
            that.num1_sn= "";
            that.num2_sn= "";
            that.num3_sn= "";
            that.num4_sn= "";
            that.numberList= []
            that.lableLength= 1;
            that.isShow=false;
            that.labelIndex= -1;
            that.imgurl1= "";
            that.imgurl= "";
            that.imgurl2= "";
            that.imgurl3= "";
            that.imgurl4= "";
            that.imgurl5= "";
            that.imgurl6= "";
            that.label_sn_old= "";
            that.chassis_sn_old= "";
            that.instrument_sn_old= "";
            that.num1_sn_old= "";
            that.num2_sn_old= "";
            that.num3_sn_old= "";
            that.num4_sn_old= "";
            that.numberType= "0";
          })
          .catch(() => {
            this.$router.replace({
                path: "/instrumentList",
            });
          });
        } else {
          Toast(res.data.msg)
        }
      });
      }else{
        saveinstrument({
        data: params,
        status: 0
      }).then((res) => {
        if (res.data.success) {
          Toast(res.data.msg)
        } else {
          Toast(res.data.msg)
        }
      });
      }

      
    },
  },
};
</script>

<style lang="scss" scoped>


.icon_logo {
  width: 40px;
  height: 40px;
}

.icon_login_text {
  font-size: 36px;
  font-weight: 500;
  color: #333333;
}

.bind_main {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  background: #f5f5f5;
  // height: 100vh;
}

.bind_main_item {
  width: 670px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  margin-top: 40px;
  padding: 30px;

  .form-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-top: 15px;
    input {
      // margin-top: 5px;
      width: 100%;
      outline: none;
      border: none;
      line-height: 35px;
      background-color: #eee;
      border-radius: 5px;
      padding-left: 0px;
    }
    .select-item {
      display: flex;
      align-items: center;
      width: 100%;
      
    }

    .input-item {
      display: flex;
      justify-content: space-between;
      align-items: center;

      input {
        width: 540px;
         height: 80px;
        background: #ffffff;
        border-radius: 12px;
        border: none;
        outline: none;
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
      }

      .icon_scan {
        width: 40px;
        height: 40px;
      }
    }
  }
}

.submit_view {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 315px;
  height: 44px;
  background: #307ff5;
  border-radius: 6px;
  color: #ffffff;
  font-size: 22px;
}

.pic-div {
  position: relative;
  width: 40px;
  height: 40px;
}

.pic-img-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 0px;
  height: 0px;
}

.pic-img-icon {
  position: absolute;
  width: 40px;
  height: 40px;
}
.pic-img-icon-op {
  position: absolute;
  width: 40px;
  height: 40px;
  opacity: 0;
}

.img-item {
  width: 40px !important;
  height: 40px !important;
  background: #eeeeee !important;
  margin-top: 0px !important;
  outline: none !important;
  border: none !important;
  line-height: 40px !important;
  padding-left: 0px !important;
  opacity: 0;
}

.img_1_view{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
}

.img_1{
  width: 96px;
  height: 96px;
  border-radius: 4px;
  border: 1px solid #DDDDDD;
}
.img_1_text{
  margin-top: 10px;
  font-size: 24px;
  color: #999999;
}

.empty_view{
  height: 150px;
}

.view_bottom {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  position: fixed;  
  bottom: 0px;
  z-index: 20;
  height: 120px;
  background: #FFFFFF;
}

.view_bottom_left {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 326px;
  height: 88px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #307ff5;
  font-size: 34px;
  color: #307ff5;
}

.view_bottom_right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 326px;
  height: 88px;
  background: #307ff5;
  border-radius: 12px;
  border: 1px solid #307ff5;
  font-size: 34px;
  color: #ffffff;
}

.child-section ::-webkit-scrollbar {display: none;}
.bind_main {
        overflow-x: hidden;
        overflow-y: hidden;
        /*解决ios上滑动不流畅*/
        -webkit-overflow-scrolling: touch;
    }

    .dialog_item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height:80px;
    }
</style>