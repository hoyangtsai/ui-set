<script>
import Vue from "vue";
import NoticeBar from "@/mobile/notice-bar/notice-bar";
import PosterShare from "@/mobile/poster-share/poster-share";

const res = {
  broadcast: [
    {
      type: "1",
      user: "落花风雨更伤春",
      prize: "9888",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "1",
      user: "恩怨情愁两不欠",
      prize: "8688",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "1",
      user: "半夏花零落",
      prize: "11888",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "1",
      user: "如夢方初醒",
      prize: "7888",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "1",
      user: "浮生若梦花香依旧",
      prize: "8888",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "1",
      user: "京港晚渔清歌",
      prize: "11688",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "1",
      user: "风吹随他去",
      prize: "13888",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "1",
      user: "风和闻马嘶",
      prize: "8888",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "1",
      user: "枕上诗书闲",
      prize: "6888",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "1",
      user: "街风晚凉",
      prize: "11688",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "1",
      user: "薄荷微光年少时",
      prize: "8888",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "1",
      user: "纷雪落葬千层塔",
      prize: "12888",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "1",
      user: "朦朦墨色染",
      prize: "8888",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "1",
      user: "曲终人散空愁暮",
      prize: "7888",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "1",
      user: "半夏如烟",
      prize: "8888",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "1",
      user: "旧時旧夢",
      prize: "7888",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "1",
      user: "寒塘冷月",
      prize: "8888",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "1",
      user: "唯梦闲人不梦君",
      prize: "8688",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "1",
      user: "十年戎马心孤单",
      prize: "6688",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "1",
      user: "夏天夏星辰秋风秋意凉",
      prize: "18888",
      content: "",
      h5Link: "",
      mpLink: "",
      time: "2020/08/10",
      contentType: "",
    },
    {
      type: "2",
      user: "",
      prize: "",
      content: "7座金牛名将谢治宇，是怎样为持有人赚钱的？",
      h5Link:
        "https://qian.tenpay.com/mb/info-center/bigname/index.shtml?id=funddailyreport_2934",
      mpLink: "",
      time: "2020/08/10",
      contentType: "A",
    },
    {
      type: "2",
      user: "",
      prize: "",
      content: "直播提醒：作为普通人，如何投资基金才可以真正赚钱？",
      h5Link:
        "https://qian.tenpay.com/mb/info-center/bigname/index.shtml?id=funddailyreport_2934",
      mpLink: "",
      time: "2020/08/10",
      contentType: "B",
    },
  ],
};

export default Vue.extend({
  name: "ServeDev",
  components: {
    NoticeBar,
    PosterShare,
  },

  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.list = res.broadcast.map((item) => {
      if (item.type == 1) {
        return {
          text: `${item.user} 参与智富计划，获得 ${item.prize} 元理财红包`,
          buttonText: "我也要",
        };
      } else {
        return {
          text: `${item.content}`,
        };
      }
    });
  },
  methods: {
    handleShre() {
      this.$refs.posterShare.createPoster();
    },
  },
});
</script>

<template>
  <div id="app">
    <notice-bar :list="list"></notice-bar>

    <poster-share ref="posterShare">
      <div class="pop-bd">
        <img
          class="aimg"
          src="//mqq-imgcache.gtimg.cn/res/fmd_mojo_static/dIp1S2vQU5xXOniCbDoiwciMLe8hJJae.png"
        />
        <div class="txts">
          <p class="txt1">
            <span class="name">女士</span
            ><span><var>8</var>月一起投理财月报</span>
          </p>
          <p class="txt2">稳住静待转机！</p>
          <p class="txt3">本月理财收益率</p>
          <p class="txt4">-49.42%</p>
          <div class="qrcode">
            <div class="qrcode-wrap">
              <img
                src="data:image/png;base64,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"
                class="qrcode-img"
              />
              <span class="qrcode-logo"></span>
            </div>
            <p class="txt5">
              长按识别二维码<br /><span>查看我的一起投月报</span>
            </p>
            <div class="share-card-logo">
              <span class="logo-yqt"></span> <span class="logo-sepr"></span>
              <span class="logo-lct"></span>
            </div>
          </div>
        </div>
        <!-- <p class="txt8">长按图片可以保存分享</p> -->
        <!-- <p class="txt9">分享不会泄露你的持仓金额，请放心分享</p> -->
        <!-- <div class="icon-share-arrow"></div> -->
      </div>
    </poster-share>

    <button @click="handleShre">share</button>
  </div>
</template>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}
body {
  background: rgb(12, 138, 255);
}


.pop-bd{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  // left: 50%;
  // transform: translate(-50%,0);
  color: #fff;
  z-index: 120;

  .aimg {
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    // border-radius: 4px;
  }
    
    .txts{
        padding: 14px 16px;
        position: relative;
        z-index: 3;
        .spr-cld{
          font-size: 14px;
          vertical-align: 20px;
          color: #417EF2;
          text-align: center;
          line-height: 36px;
          margin-right: 10px;
        }
      .txt1{
        font-size: 12px;
        line-height: 27px;
        padding-bottom: 12px;
        position: relative;
        display: flex;
        white-space: nowrap;
        border-bottom: 1px solid rgba(255,255,255,0.1);
    
        .name{
          display: block;
          max-width:9em;
          margin-right: 0.6rem;
        }
        span{
          display: block;   
        }
      }
      .txt2{
        font-size: 24px;
        line-height: 35px;
        margin: 4px 0 8px;
      }
      .txt3{
        font-size: 12px;
        line-height: 2px;
        color: rgba(255,255,255,0.6);
      }
      .txt4{
        line-height: 1.1;
        font-size: 40px;
      }
      .txt5{
        font-size: 11px;
        line-height: 16px;
        margin-top: 5px;
        opacity: 0.6;
        word-break: normal;
      }
    }
    .txt6{
        position: absolute;
        top:100%;
        margin-top: 1.5rem;
        font-size: 1rem;
        line-height: 2.4rem;
        left:0;
        width: 100%;
        text-align: center;
        opacity: 0.6;
    }
    .txt7{
        position: absolute;
        color: #fff;
        font-size: 1rem;
        line-height: 1.4rem;
        top:-4rem;
        left:0;
        right: 0;
        text-align: center;
    }
    .txt8{
        position: absolute;
        top:100%;
        margin-top: 1.5rem;
        font-size: 1.4rem;
        line-height: 2.4rem;
        left:0;
        width: 100%;
        text-align: center;
        opacity: 0.6;
    }
    .txt9{
      position: absolute;
      color: #fff;
      font-size: 14px;
      line-height: 1.4;
      top: 40px;
      left: 0;
      right: 0;
      text-align: center;
    }
    // .icon-share-arrow{
    //     display: block;
    //     position: absolute;
    //     width: 4.9rem;
    //     height: 4rem;
    //     background: url(../img/sharearrow.png);
    //     background-size: cover;
    //     top:-9rem;
    //     right: -2.4rem;
    // }
    // .qrcode {
    //   padding-top: 97px;
    // }
    // .qrcode-logo {
    //   position: absolute;
    //   left: 50%;
    //   top: 50%;
    //   width: .96rem;
    //   height: .96rem;
    //   transform: translate(-50%, -50%);
    //   z-index: 1;
    //   background: inline("../img/logo_v2.png");
    //   background-size: 100%;
    //   background-repeat: no-repeat;
    //   background-position: center;
    // }
    .qrcode-wrap {
      width: 66px;
      height: 66px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border-radius: 2px;
    }
    .qrcode-img{
      width: 54px;
      height: 54px;
    }
}
</style>
