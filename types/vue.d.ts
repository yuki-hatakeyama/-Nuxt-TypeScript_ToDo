import Vue from 'vue'

declare module 'vue/types/vue' {
  // ここに inject の型を定義
  interface Vue {
    $hello: (msg: string) => void // 引数が必要な場合
    $getLog(): void // 引数が無い場合はvoid
  }
}
