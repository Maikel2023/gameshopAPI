<!-- src/components/UserCard.vue -->

<template>
    <div class="card">
      <h2>{{ user.name }}</h2>
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Address: {{ user.address.street }}, {{ user.address.suite }}, {{ user.address.city }}</p>
      <p>Phone: {{ user.phone }}</p>
      <p>Website: {{ user.website }}</p>
      <p>Company: {{ user.company.name }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: Object,
    },
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
  }
  </style>
  