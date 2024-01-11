<template>
   <div class="col">
      <div class="card h-100 border-0 shadow game-card" style="background-color: #45444474;">
         <img :src="props.game.image" alt="" class="card-img-top game-image" />
         <div class="card-body">
            <p class="card-text" style="color: white;">{{ props.game.description }}</p>
            <div class="d-flex justify-content-between align-items-center">
               <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary me-2">
                     <i class="las la-info-circle icon-size"></i>&nbsp;Info
                  </button>
                  <button type="button" class="btn btn-sm btn-danger" @click="addToCart(props.game.id)">
                     <i class="las la-cart-plus icon-size text-white"></i>&nbsp;Buy
                  </button>
               </div>
               <div class="text-orange fs-5 fw-bold" style="color: orange;">&euro; {{ props.game.price }}</div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { useGamesStore } from '@/stores/games';

const props = defineProps({
   game: Object
});
const store = useGamesStore();

function addToCart(id)
{
   console.log(id);
   store.addToCart(id);
}

</script>

<style scoped>
     .text-orange {
      color: orange;
   }
</style>