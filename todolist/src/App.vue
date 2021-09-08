<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoLists" v-on:removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue"
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"
import TodoFooter from "./components/TodoFooter.vue"

export default {
  data: function() {
      return {
      todoLists: []
      }
  },
  methods: {
    addTodo: function(item) {
        localStorage.setItem(item, item);
        this.todoLists.push(item);
    },
    clearAll: function() {
      localStorage.clear();
      this.todoLists = [];
    },
    removeTodo: function(item, index) {
      localStorage.removeItem(item);
      this.todoLists.splice(index, 1);
    }
  },
  created: function(){
  if (localStorage.length > 0) {
            for (var i=0; i <localStorage.length; i++) {
                // push() : 배열의 끝에 데이터를 추가하는 명령어
                // key() : 지정한 index에 있는 데이터를 가져오는 명령어
                if (localStorage.key(i) != "loglevel:webpack-dev-server") {
                    
                    this.todoLists.push(localStorage.key(i));
                }
            }
        }

    },
  components: {
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow{
      box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>