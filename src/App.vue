<!-- src/App.vue -->

<template>
    <div id="app">
      <h1>User Card Blocks</h1>
      <user-card-container :users="users" />
    </div>
  </template>
  
  <script>
  import UserCardContainer from './components/User/UserCardContainer.vue';
  
  export default {
    components: {
      UserCardContainer,
    },
    data() {
      return {
        users: [],
      };
    },
    async mounted() {
      // Fetch data from the API
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      this.users = await response.json();
    },
  };
  </script>
  
  <style>
  #app {
    text-align: center;
    margin-top: 20px;
  }
  
  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }
  </style>
  