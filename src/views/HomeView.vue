<!-- src/views/Home.vue -->

<template>
   <div>
     <h1>User Card Blocks</h1>
     <user-card-container :users="users" />
   </div>
 </template>
 
 <script>
 import UserCardContainer from '@/components/UserCardContainer.vue';
 
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
 