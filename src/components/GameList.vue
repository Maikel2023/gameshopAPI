<template>
  <GameCard v-for="game in store.getGames" :key="game.id" :game="game" />
</template>

<script setup>
import { useGamesStore } from '@/stores/games'
import GameCard from './GameCard.vue'

const store = useGamesStore();
</script>

<style scoped>

</style>