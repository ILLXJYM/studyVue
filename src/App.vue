<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew()">
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
        newItem: ''
      }
    },
    methods: {
      toggleFinish: function (item) {
        item.isFinished = !item.isFinished
      },
      addNew: function () {
          this.items.push({
            label: this.newItem,
            isFinished: true
          })
        this.newItem = ''
      }
    }
  }
</script>

<style>
  .finished{
    color: aqua;
  }
</style>
