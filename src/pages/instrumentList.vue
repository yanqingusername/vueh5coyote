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
          placeholder="请输入仪器序列号/耳环编号"
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
      <div class="search-list">
        <div class="search-result">
          <div
            class="search-result-view"
            v-for="(item, index) in instrumentList"
            :key="index">
            <div class="search-result-view-left">
              <div class="search-result-view-left-title">
                {{ item.instrument_SN }}
              </div>
              <div class="search-result-view-left-lable" v-if="item.label">耳环：{{ item.label }}</div>
              <div class="search-result-view-left-lable" v-if="item.storename">库房：{{ item.storename }}</div>
            </div>
            <div class="search-result-view-left">
              <div
                class="search-result-view-left-lable"
                style="margin-top: 0px">{{ item.binding_time }}</div>
            </div>
          </div>

          <!-- 查询结果为空时候 -->
          <div class="result-null" v-if="instrumentList.length == 0">
            还没有仪器
          </div>
        </div>
      </div>
      <div class="empty_view"></div>
      <div class="view_bottom">
          <div class="submit_view" @click="bindInstrument">绑定仪器</div>
      </div>

      <!-- <div class="view_bottom">
        <div class="view_bottom_left" @click="bindInstrument">解绑仪器</div>
        <div class="view_bottom_right" @click="bindInstrument">绑定仪器</div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import { getSearchinstrument,getInstrumentList } from "../request/api";
import { Notify,Toast } from "vant";
export default {
  name: "",
  components: {
    Header,
  },
  data() {
    return {
      instrument_SN: "", //仪器号
      label: "", //耳环号
      page: 1, //第几页
      limit: 1000, //每页限制
      instrumentList: [],
      keywordValue: "",
      isFocus: false,
    };
  },
  activated() {
		// this.getSearchinstrument();
    },
  mounted() {
    this.getSearchinstrument();
  },
  methods: {
    handleTitleBack() {
      this.$router.back();
    },
    getSearchinstrument() {
      let that = this;
      getInstrumentList({
        instrument_SN: this.keywordValue,
        label: this.label,
        page: this.page,
        limit: this.limit,
      }).then((res) => {
        if (res.data.success) {
          console.log(res);
          that.instrumentList = res.data.msg;
        } else {
            Toast(res.data.msg)
          // alert("验证码发送失败");
        //   Notify({ type: "primary", message: res.msg });
        }
      });
    },
    untieInstrument() {},
    bindInstrument() {
      this.$router.push("/instrumentBind");
      return;
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
            console.log(this.keywordValue)
            this.page = 1;
            this.instrumentList = [];
            this.getSearchinstrument();
      } else {
        this.$refs.searchInput.focus(); //没有输入查询条件焦点不应该失去
      }
    }
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
    width: 55%;
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

.search-list {
  // height: 1000px;
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