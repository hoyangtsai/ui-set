<script>
import Vue from 'vue';
import TabPage from '@/components/tab-page/tab-page.vue';
import Sector from '@/components/sector/sector.vue';
import QRCode from '@/components/qr-code/qr-code.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    TabPage,
    Sector,
    'fit-qr-code': QRCode,
  },

  data () {
    return {
      curIndex: 0 
    };
  },
  methods: {
    tabChange(index) {
      console.log(index);
      this.curIndex = index;
    } 
  },
});
</script>

<template>
  <div id="app">
    <div class="divide">直接使用code生成二维码</div>
    <div class="t-center ">
        <fit-qr-code code="123456789034434334"></fit-qr-code>
    </div>
    <div class="divide">使用width height 分别控制条码宽和高</div>
    <div class="t-center code-container demo-border">
        <fit-qr-code code="123456789034434334" :width=200 :height=200></fit-qr-code>
    </div>
    <div class="divide">改变条码颜色</div>
    <div class="t-center">
        <fit-qr-code code="123456789034434334" background='#eeeeee' foreground='#10aeff'></fit-qr-code>
    </div>

    <div class="divide">容错级别为Q</div>
    <div class="t-center">
        <fit-qr-code code="1234567890" :correct-level=2></fit-qr-code>
    </div>

    <!-- <tab-page :tab-list="['可使用','已使用','已过期']" @changetab="tabChange" />
    <div class="tab-page">
        <div v-if="curIndex == 0">
            这里是可使用页
        </div>
        <div v-else-if="curIndex == 1">
            这里是已使用页
        </div>
        <div v-else-if="curIndex == 2">
            这里是已过期页
        </div>
    </div> -->
  </div>
</template>
