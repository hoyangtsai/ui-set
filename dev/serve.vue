<script>
import Vue from 'vue';
import BarCode from '@/fit_ui/src/components/bar-code/bar-code.vue';


export default Vue.extend({
  name: 'ServeDev',
  components: {
    'fit-bar-code': BarCode,
  },

  data () {
    return {

    };
  },
  methods: {

  },
});
</script>

<template>
  <div id="app">
    <div class="divide">直接使用code生成条码，其他参数固定</div>
    <div class="t-center code-container demo-border">
        <fit-bar-code style='margin-top: 6px'code="1234567890"></fit-bar-code>
    </div>
    <div class="divide">通过传递width height 分别控制条码宽和高</div>
    <div class="t-center code-container">
        <fit-bar-code code="1234567890" :width="width" :height="height"></fit-bar-code>
    </div>
    <div class="t-center">width:30; height:120</div>
    <div class="divide">显示条码数值</div>
    <div class="t-center code-container">
        <fit-bar-code code="123456789034434334" :display-value=true ></fit-bar-code>
    </div>
  </div>
</template>
