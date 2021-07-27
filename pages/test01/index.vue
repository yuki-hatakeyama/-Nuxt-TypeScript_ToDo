<template>
  <div>
    <h1>MIX IN　のテスト</h1>
    <button @click="onLog()">MIX IN　の methodsを呼び出す</button>
    <button @click="onDataCheck()">MIX IN　の dataを呼び出す</button>
  </div>
</template>

<script lang="ts">
import MixinTest from '@/mixins/MixinTest.js'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  mixins: [MixinTest],
  methods: {
    onDataCheck() {
      console.log('StoreSetting', this.$data.StoreSetting) // グローバルにアクセスする？ mixin の detaの呼び出し方。
      // this.onLog() // methods では、mixin の methods が呼び出せない。
    },
  },
})
</script>
