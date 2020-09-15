<template>
  <div class="notice-bar" v-if="list.length > 0">
    <div class="notice-bar__icon">
      <slot name="icon"></slot>
    </div>
    <div class="notice-bar__wrap">
      <transition name="slide">
        <div v-if="isShow" class="notice-bar__content">
          <div class="notice-bar__text">
            {{ nowOn.text }}
          </div>
          <div v-if="nowOn.buttonText" 
            class="notice-bar__btn"
            @click="handleBtnClick">
            {{ nowOn.buttonText }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import '@/utils/rem/src/js/REM';

export default {
  name: 'notice-bar',
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },      
    },
  },
  watch: {
    list: {
      immediate: true,
      handler(val) {
        if (val.length > 0) {
          this.play();
        }
      },
    },
  },
  data() {
    return {
      playIndex: 0,
      nowOn: {},
      isShow: false,
    };
  },
  methods: {
    play() {
      this.nowOn = this.list[this.playIndex];
      this.isShow = true;
      this.$emit('show',this.nowOn);

      var nextIndex = this.playIndex + 1;
      if (nextIndex > this.list.length - 1) {
          nextIndex = 0;
      }
      this.playIndex = nextIndex;

      setTimeout(() => {
          this.isShow = false;
          setTimeout(() => {
              this.play();
          }, 300);
      }, 3000);
    },
    handleBtnClick() {
      const buttonLink = this.nowOn.buttonLink || '';
      if (buttonLink) {
        window.location.href = buttonLink;
      }
      this.$emit('button-click', this.nowOn);
    },
  },
};
</script>

<style lang="scss" scoped>
.notice-bar {
  width: 100%;
  display: flex;
  align-items: center;
  background: #FFFFFF;
  border-radius: .36rem;
  padding: 0 .2rem 0 .28rem;
  box-sizing: border-box;
  position: relative;
  z-index: 10;

  &__wrap {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    color: #303030;
    font-size: .22rem;
    height: .62rem;
    line-height: .62rem;

    .red {
      color: #ff0000;
    }
  }

  .slide-enter-active {
    animation: slideIn 0.3s linear;
  }
  .slide-leave-active {
    animation: slideOut 0.3s linear;
  }

  &__icon {
    margin-right: .16rem;
    height: .62rem;
  }

  &__content {
    width: 100%;
    display: flex;
    align-items: center;
  }

  &__text {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__btn {
    color: #0056f3;
    border: 1px solid #0056f3;
    font-size: .22rem;
    line-height: .3rem;
    color: #0056F3;
    border: 1px solid #0056F3;
    padding: .08rem .16rem;
    margin-left: 0.5em;
    border-radius: .24rem;

    &.is-red {
      color: #ff0000;
      border: 1px solid #ff0000;
    }
  }
}

@keyframes slideIn {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

@keyframes slideOut {
  0% {
    transform: translateY(0%);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>
