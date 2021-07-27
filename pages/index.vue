<template>
  <div class="">
    <NuxtLogo></NuxtLogo>
    <section>
      <h1>TODO リスト</h1>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <input type="checkbox" />
          <label class="label"> {{ todo }}</label>

          <button class="delete" @click="onDelete(index)">削除</button>
        </li>
      </ul>
      <input v-model="todo" />
      <button @click="onRegistrationToDo()">登録</button>
    </section>

    <section>
      <h2>リンクテスト</h2>
      <NuxtLink :to="{ name: 'test01' }">{{ this.text01 }}</NuxtLink>
      <NuxtLink :to="{ name: 'test02' }">{{ this.text02 }}</NuxtLink>
    </section>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      text01: 'mix in テスト',
      text02: 'inject テスト',
      todo: '',
      todos: [''],
    }
  },
  methods: {
    /*
     * onRegistrationToDo()
     * todoを登録するための関数
     */
    onRegistrationToDo() {
      console.log('テスト', this.todos.length)

      if (this.todo.length > 0) {
        this.todos.push(this.todo)
      }
      this.todo = ''
    },

    /*
     * onDelete()
     * 該当のtodoを削除するための関数
     */
    onDelete(index: number) {
      this.todos.splice(index, 1)
    },
  },
  created() {
    if (this.todos.length === 1) {
      this.todos = []
    }
  },
})
</script>

<style scoped>
input[type='checkbox'],
button {
  cursor: pointer;
}
input[type='checkbox'] {
  margin: 0 15px 0 0;
}
input[type='checkbox']:checked + .label {
  text-decoration: line-through;
}
button.delete {
  margin-left: auto;
}

ul {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
}
li {
  display: flex;
  align-items: center;
  width: 100%;
}
li + li {
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid #ccc;
}
</style>
