<template>
  <div>
    <h1>inject　のテスト</h1>
    <button @click="$getLog()">inject　の methodsを呼び出す</button>
    <button @click="onClick()">methods から inject を呼び出す</button>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  methods: {
    onClick() {
      this.$hello('テスト')
    },
  },
  mounted() {
    // this.$hello('a')
  },
})
</script>
