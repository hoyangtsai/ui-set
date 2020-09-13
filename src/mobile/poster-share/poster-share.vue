<template>
  <div class="poster-share" v-show="isActive">
    <div class="poster-share__mask"></div>
    <div class="poster-share__contain">
      <div class="poster-share__img-wrap" ref="imgWrap">
        <slot></slot>
      </div>
    </div>
    <div class="poster-share__snapshot">
      <img
        ref="shareImg"
        style="opacity: 0;"
        @touchstart="onPosterTouchstart"
        @touchend="onPosterTouchend"
      />
    </div>
  </div>
</template>

<script>
import html2canvas from "../../utils/html2canvas";

export default {
  name: 'poster-share',
  props: {},
  watch: {},
  data() {
    return {
      touchTimestap: 0,
      longTapThreshold: 300,
      isActive: false,
    };
  },
  methods: {
    closePopShare: function() {
      this.isActive = false;
    },
    createPoster: function() {
      this.isActive = true;
      const self = this;
      this.$nextTick(() => {
        const imgWrap = this.$refs.imgWrap.children[0];
        var imgWidth = imgWrap.offsetWidth;
        var imgHeight = imgWrap.offsetHeight;
        var canvasBox = document.createElement('canvas');
        var scale = window.devicePixelRatio;
        canvasBox.width = imgWidth * scale;
        canvasBox.height = imgHeight * scale;
        canvasBox.style.width = imgWidth + 'px';
        canvasBox.style.height = imgHeight + 'px';
        canvasBox.getContext('2d').scale(scale, scale);
        html2canvas && html2canvas(imgWrap, {
          scale: scale,
          dpi: 300,
          letterRendering: true,
          useCORS: true,
          canvas: canvasBox,
          backgroundColor: null, // 解决生成的图片有白边，只单单加和这个并没有效果
        })
          .then(function(canvas) {
            var imageBase64 = canvas.toDataURL("image/png"); // base64数据
            self.$refs.shareImg.src = imageBase64;
            self.$refs.shareImg.height = imgHeight;
          })
          .catch(function(err) {
            console.log(err);
          });
      });
    },
    onPosterTouchstart: function() {
      this.touchTimestap = new Date().getTime();
    },
    onPosterTouchend: function() {
      if (this.touchTimestap === 0) {
        this.closePopShare();
        return;
      }
      var now = new Date().getTime();
      var timeDiff = now - this.touchTimestamp;
      if (timeDiff < this.longTapThreshold) {
        this.closePopShare();
      }
      this.touchTimestamp = 0;
    },
  },
};
</script>

<style lang="scss" scoped>

.poster-share {
  &__mask {
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
  }

  &__contain {
    position: absolute;
    left: 0;
    top: 15%;
    width: 100%;
    z-index: 110;
  }

  &__img-wrap {
    position: relative;
    padding-top: 133.33%;
    transform: scale(.8);
  }

  &__snapshot {
    position: fixed;
    width: 100%;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: 150;
    img{
      width: 100%;
    }
  }
}

</style>
