<template>
  <div class="child-section">
    <Header>
      <div class="header-content">
        <div class="header-title">仪器管理</div>
        <div class="header-back">
          <div class="back" @click="handleTitleBack">
            <!-- <i class="iconfont icon-arrowthin"></i> -->
            <img class="icon_logo" src="../assets/images/close.png" alt="" />
          </div>
        </div>
      </div>
    </Header>
    <div class="main">
      <div class="form-item">
        <img style="width:18px;height:18px;" src="../assets/images/search.png" alt="" />
        <input
          v-model="keywordValue"
          type="text"
          name="keywordValue"
          placeholder="请输入仪器序列号"
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          autofocus
          ref="searchInput"
          spellcheck="false"
          @click="changeInput"
          @keyup="clickSearch"
        />
        <img v-if="keywordValue" @click="clearSearchValue" style="width:18px;height:18px;position:absolute;right:15px;" src="../assets/images/deleteTest.png" alt="" />
      </div>
      <div :class="roleId == 3 ? 'search-list-role':'search-list'">
        <div class="search-result">
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onDownLoad"
        >
          <div
            v-for="(item, index) in instrumentList"
            :key="index">
            <div class="search-result-view" v-if="roleId == 1">
              <div class="search-result-view-left">
                <div class="search-result-view-left-title">{{ item.instrument_SN }}</div>
                <div class="search-result-view-left-lable" v-if="item.instrument_name">仪器名称：{{ item.instrument_name }}</div>
                <div class="search-result-view-left-lable" v-if="item.label">耳环：{{ item.label }}</div>
                <div class="search-result-view-left-lable" v-if="item.gps">GPS：{{ item.gps }}</div>
                <div class="search-result-view-left-lable" v-if="item.storename">库房：{{ item.storename }}</div>
              </div>
              <div class="search-result-view-left">
                <div
                  class="search-result-view-left-lable"
                  style="margin-top: 0px">{{ item.binding_time }}</div>
              </div>
            </div>

            <div class="search-result-view" v-if="roleId == 2">
              <div class="search-result-view-left">
                <div class="search-result-view-left-title">{{ item.instrument_SN }}</div>
                <div class="search-result-view-left-lable" v-if="item.instrument_name">仪器名称：{{ item.instrument_name }}</div>
                <div class="search-result-view-left-lable" v-if="item.label">耳环：{{ item.label }}</div>
                <div class="search-result-view-left-lable" v-if="item.gps">GPS：{{ item.gps }}</div>
                <!-- <div class="search-result-view-left-lable" v-if="item.storename">库房：{{ item.storename }}</div> -->
              </div>
              <div class="search-result-view-left">
                <div
                  class="search-result-view-left-lable"
                  style="margin-top: 0px">{{ item.binding_time }}</div>
              </div>
            </div>

            <div class="search-result-view" v-if="roleId == 3">
              <div class="search-result-view-left">
                <div class="search-result-view-left-title">{{ item.instrument_SN }}</div>
                <div class="search-result-view-left-lable" v-if="item.instrument_name">仪器名称：{{ item.instrument_name }}</div>
              </div>
              <div class="search-result-view-right">
                <img @click="repairInstrument"
              :data-instrumentsn="item.instrument_SN"
              :data-instrumentname="item.instrument_name" style="width:20px;height:20px;" src="../assets/images/icon_detail_edit.png" alt="" />
              </div>
            </div>

          </div>
        </van-list>
</van-pull-refresh>
          

          <!-- 查询结果为空时候 -->
          <div class="result-null" v-if="instrumentList.length == 0">
            还没有仪器
          </div>
        </div>
      </div>
      <div class="empty_view"></div>
      <!-- <div class="view_bottom">
          <div class="submit_view" @click="bindInstrument">绑定仪器</div>
      </div> -->

      <div class="view_bottom" v-if="roleId == 1">
        <div class="view_bottom_left_1" @click="untieInstrument">解绑耳环</div>
        <div class="view_bottom_right_1" @click="bindStoreGPS">绑定GPS</div>
        <div class="view_bottom_right_1" @click="bindStore">绑定耳环</div>
      </div>

      <div class="view_bottom" v-if="roleId == 2">
        <div class="view_bottom_left" @click="bindGPS">绑定GPS</div>
        <div class="view_bottom_right" @click="bindInstrument">绑定耳环</div>
      </div>

      <div class="view_bottom" v-if="roleId == 3">
        <div class="submit_view" @click="bindGPS">绑定GPS</div>
      </div>

    </div>

    <van-dialog
      v-model="isShow"
      show-cancel-button
      :beforeClose="beforeClose"
      confirmButtonColor='#307FF5'
    >
    <div class="dialog_item">
        <div class="dialog_item_title">确认解绑该仪器？</div>
        <div class="dialog_item_lable">仪器序列号：{{bindInfo.instrument_SN}}</div>
        <div class="dialog_item_lable">仪器名称：{{bindInfo.instrument_name}}</div>
        <div class="dialog_item_lable">耳环编号：{{bindInfo.label}}</div>
    </div>
    </van-dialog>

  </div>
</template>

<script>
import Header from "../components/header.vue";
import { getInstrumentList,getJSSDKHELP,getUnBindSearch,Unboundinstrument } from "../request/api";
import { Notify,Toast,List,Button,Dialog } from "vant";
export default {
  name: "",
  components: {
    Header,
    [Dialog.Component.name]: Dialog.Component, //Dialog.Component写成这样才生效
    [Button.name]: Button,
  },
  data() {
    return {
      instrument_SN: "", //仪器号
      label: "", //耳环号
      page: 1, //第几页
      limit: 30, //每页限制
      instrumentList: [],
      keywordValue: "",
      isFocus: false,
      loading: false,
      finished: false,
      refreshing: false,
      roleId: 1,  // 1--库管   2--生产  3--维修  
      isShow: false,
      bindInfo:''
    };
  },
  activated() {
    this.roleId = this.$route.query.id;
    console.log(this.roleId)
    this.page = 1;
    this.instrumentList = [];
    this.getSearchinstrument();
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
   // 解绑
    untieInstrument() {	// 点击的时候调起扫一扫功能呢
      const that = this;
      wx.scanQRCode({
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
        success(res) {
          const resultStrArr = res.resultStr.split(',');		
          // 转为数组时为了避免扫描一维码是返回CODE_128,20180528前面会添加一个CODE_128所以转为数组获		取最后一条就行了
          console.log(resultStrArr[resultStrArr.length - 1]); // 输出扫码信息
          that.result = resultStrArr[resultStrArr.length - 1];
          let label_sn = resultStrArr[resultStrArr.length - 1];
          if(label_sn){
            that.getUnBindSearch(label_sn);
          }
        },
        fail(res) {
          console.log('err', res);
        }
      });
    },
    /**
     * 根据耳环编号解绑
     */
    getUnBindSearch(label_sn) {
      let that = this;
      getUnBindSearch({
        label: label_sn
      }).then((res) => {
        if (res.data.success) {
          that.bindInfo = res.data.msg;
          that.isShow = true;
        } else {
            Toast(res.data.msg)
        }
      });
    },
    beforeClose(action, done) {
      let that = this;
      if(action === 'confirm') {
        Unboundinstrument({
          id: that.bindInfo.id
        }).then((res) => {
          if (res.data.success) {
            that.isShow = false;
            that.page = 1;
            that.instrumentList = [];
            that.getSearchinstrument();
          } else {
            Toast(res.data.msg)
          }
        });
        done()
      } else if(action === 'cancel') {
        that.bindInfo = '';
        that.isShow = false;
        done() //关闭
      }
    },
    handleTitleBack() {
      this.$router.back();
    },
    getSearchinstrument() {
      if (this.refreshing) {
          this.refreshing = false;
        }

      let that = this;
      getInstrumentList({
        instrument_SN: this.keywordValue,
        label: this.label,
        page: this.page,
        limit: this.limit,
      }).then((res) => {
        if (res.data.success) {
          let instrumentList = that.instrumentList;
					instrumentList = that.page == 1 ? res.data.msg : instrumentList.concat(res.data.msg)

          that.loading = false;

          if(res && res.data && res.data.msg.length > 0){
            that.page = that.page + 1;
          }else{
             that.finished = true;
          }
          
          that.instrumentList = instrumentList;
        } else {
            Toast(res.data.msg)
          // alert("验证码发送失败");
        //   Notify({ type: "primary", message: res.msg });
        }
      });
    },
    bindStore() {
      let that = this;
      this.$router.push({
        path: "/instrumentStore",
        query:{
          id: that.roleId
        }
      });
      // this.$router.push("/instrumentBind");
      return;
    },
    bindStoreGPS() {
      let that = this;
      this.$router.push({
        path: "/instrumentStoreGPS",
        query:{
          id: that.roleId
        }
      });
      // this.$router.push("/instrumentBind");
      return;
    },
    // 绑定耳环
    bindInstrument() {
      let that = this;
      this.$router.push({
        path: "/instrumentBind",
        query:{
          id: that.roleId
        }
      });
      // this.$router.push("/instrumentBind");
      return;
    },
    // 绑定GPS
    bindGPS() {
      let that = this;
      this.$router.push({
        path: "/instrumentBindGPS",
        query:{
          id: that.roleId
        }
      });
      // this.$router.push("/instrumentBind");
      return;
    },
    // 维修
    repairInstrument(e){
      let instrumentsn = e.target.dataset.instrumentsn;
      let instrumentname = e.target.dataset.instrumentname;
      if(instrumentsn && instrumentname){
        this.$router.push({
          path: "/instrumentRepair",
          query:{
            id: this.roleId,
            sn: instrumentsn,
            snn: instrumentname
          }
        });
      }
    },
    changeInput() {
      //单击搜索框时获取焦点
      this.isFocus = true;
    },
    clearSearchValue() {
      //清空输入的查询条件
      if (this.keywordValue) {
        this.keywordValue = ""; //搜索关键字
        this.page = 1;
        this.instrumentList = [];
        this.getSearchinstrument();
        this.$refs.searchInput.focus(); //输入查询条件清空后获取焦点
      }
    },
    clickSearch() {
      //查询
      if (event.code == "ArrowDown" || event.code == "ArrowUp") {
        //上下键
        return;
      }
      if (this.keywordValue.trim()) {
            this.page = 1;
            this.instrumentList = [];
            this.getSearchinstrument();
      } else {
        this.$refs.searchInput.focus(); //没有输入查询条件焦点不应该失去
      }
    },
    onDownLoad(){
      if(this.page > 1){
        this.getSearchinstrument();
      }
    },
    onRefresh(){
      // 清空列表数据
      this.finished = false;
      this.page = 1;
      this.instrumentList = [];
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.getSearchinstrument();
    },
  },
};
</script>
<style scoped lang="scss">
.icon_logo {
  width: 40px;
  height: 40px;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
}

.form-item {
  display: flex;
    height: 88px;
    position: relative;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    width: 90%;

  input {
    width: 40%;
    height: 80px;
    background: #f5f5f5;
    border-radius: 12px;
    border: none;
    outline: none;
    font-size: 28px;
    font-weight: 400;
    color: #999999;
    // padding: 0px 25px;
  }
}

.submit_view {
  display: flex;
  justify-content: center;
  align-items: center;
  //   margin-top: 20px;
  width: 90%;
  height: 88px;
  background: #307ff5;
  border-radius: 12px;
  color: #ffffff;
  font-size: 32px;
}

.empty_view{
  height: 150px;
  width: 100%;
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

.view_bottom_left_1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 88px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #307ff5;
  font-size: 34px;
  color: #307ff5;
}

.view_bottom_right_1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 88px;
  background: #307ff5;
  border-radius: 12px;
  border: 1px solid #307ff5;
  font-size: 34px;
  color: #ffffff;
}

.search-list-role{
  height: 1110px;
  border: 0 none;
  background-color: #fff;
  width: 100%;
  padding: 0px 40px;
  .search-result {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    .search-result-view {
      display: flex;
      //   align-items: center;
      justify-content: space-between;
      padding: 30px 0px;
      border-bottom: 1px solid #dddddd;

      .search-result-view-left {
        display: flex;
        flex-direction: column;

        .search-result-view-left-title {
          font-size: 34px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #333333;
        }

        .search-result-view-left-lable {
          font-size: 28px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #999999;
          margin-top: 20px;
        }
      }
    }

    .result-null {
      margin-top: 100px;
      text-align: center;
      font-size: 40px;
    }
  }
}

.search-list {
  height: 960px;
  border: 0 none;
  background-color: #fff;
  width: 100%;
  padding: 0px 40px;
  .search-result {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    .search-result-view {
      display: flex;
      //   align-items: center;
      justify-content: space-between;
      padding: 30px 0px;
      border-bottom: 1px solid #dddddd;

      .search-result-view-left {
        display: flex;
        flex-direction: column;

        .search-result-view-left-title {
          font-size: 34px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #333333;
        }

        .search-result-view-left-lable {
          font-size: 28px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #999999;
          margin-top: 20px;
        }
      }
    }

    .result-null {
      margin-top: 100px;
      text-align: center;
      font-size: 40px;
    }
  }
}

.search-result-view-right{
  width: 40px;
  height: 40px;
}

.dialog_item{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 50px 0px;
    }

    .dialog_item_title{
      font-size: 36px;
      color: #333333;
    }

    .dialog_item_lable{
      font-size: 28px;
      color: #666666;
      margin-top: 10px;
    }

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
/*滑动轨道*/
::-webkit-scrollbar-track-piece {
  background-color: transparent;
  -webkit-border-radius: 6px;
}
// 下面是滑块
/*竖向滚动条*/
::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: #ffffff;
  -webkit-border-radius: 6px;
}
/*横向滚动条*/
::-webkit-scrollbar-thumb:horizontal {
  width: 5px;
  background-color: #ffffff;
  -webkit-border-radius: 6px;
}
</style>