<!-- src/components/UserCardContainer.vue -->

<template>
    <div class="card-container">
      <user-card v-for="user in users" :key="user.id" :user="user" />
    </div>
  </template>
  
  <script>
  import UserCard from './UserCard.vue';
  
  export default {
    components: {
      UserCard,
    },
    props: {
      users: Array,
    },
  };
  </script>
  
  <style scoped>
  .card-container {
    display: flex;
    flex-wrap: wrap;
  }
  </style>
  