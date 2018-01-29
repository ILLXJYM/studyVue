<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew()">/*v-model监听*/
    <ul>
      <li v-for="item in items" v-bind:class="{finished:
      item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
      data: function () {
        return {
            title: 'this is a todo list',
            items: [
              {
                  label: 'coding',
                  isFinished: true
              },
              {
                  label: 'walking',
                  isFinished: true
              }

            ],
            liClass: 'thisIsLiClass'
        }
      },
        methods: {
          toggleFinish:function (item) {
            console.log(item)
          },
          addNew: function () {
            console.log(this.newItem)//每次enter都克隆input用v-modal关联的字符
            this.newItem = '';//每次点击enter都变成空字符串；
          }
        }
  }
</script>

<style>
  .finished{
    color: aqua;
  }
</style>
