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
  import Store from './store'//调用store；
  export default{
    data: function () {
      return {
        title: 'this is a todo list',
        items: Store.fetch(),
        newItem: ''
      }
    },
    watch:{
      items:{
          handler: function (items ) {
          Store.save(items)
      },
        deep:true
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
  #app{
    text-align: center;
    }
  .finished{
    color: aqua;
  }
  li{list-style: none;}
</style>
