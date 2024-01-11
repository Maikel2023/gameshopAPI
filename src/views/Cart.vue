<template>
   <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 d-flex" id="cart-table">
         <div class="col-md-12">
               <table class="table table-borderless">
                  <thead class="table-dark">
                     <tr>
                           <th scope="col">ID</th>
                           <th scope="col"></th>
                           <th scope="col">Titel</th>
                           <th scope="col" class="text-end">Prijs p/st</th>
                           <th scope="col" class="text-center">Aantal</th>
                           <th scope="col" class="text-end">Totaal</th>
                           <th scope="col" class="text-center"></th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr v-for="cart_item in store.getCart" :key="cart_item.game_id">
                           <td>{{ cart_item.game_id }}</td>
                           <td>
                              <img :src="(store.findGame(cart_item.game_id)).image" class="shopping-cart-image" alt="" />
                           </td>
                           <td>
                              {{ (store.findGame(cart_item.game_id)).title }}
                           </td>
                           <td class="text-end">
                              &euro; {{ parseFloat((store.findGame(cart_item.game_id)).price).toFixed(2) }}
                           </td>
                           <td class="text-center">
                              <i class="las la-plus-circle icon-size-actions text-info cursor-pointer" @click="increase(cart_item.game_id)"></i>&nbsp;
                              {{ cart_item.amount }}
                              <i class="las la-minus-circle icon-size-actions text-info cursor-pointer" @click="decrease(cart_item.game_id)"></i>
                           </td>
                           <td class="text-end">&euro; {{ parseFloat(cart_item.total).toFixed(2) }}</td>
                           <td class="text-center">
                              <i class="las la-trash-alt icon-size text-danger cursor-pointer" @click="remove(cart_item.game_id)"></i>
                           </td>
                     </tr>
                  </tbody>
                  <tfoot class="table-dark">
                     <tr>
                           <td colspan="5" class="text-end">TOTAAL</td>
                           <td class="text-end">&euro; {{ parseFloat(store.calcTotal).toFixed(2) }}</td>
                           <td></td>
                     </tr>
                  </tfoot>
               </table>
         </div>
      </div>
   </div>
</template>

<script setup>
import { useGamesStore } from '@/stores/games'

const store = useGamesStore()

function increase(id)
{
   store.increaseAmountInCart(id)
}

function decrease(id)
{
   store.decreaseAmountInCart(id)
}

function remove(id)
{
   store.removeFromCart(id)
}
</script>


<style scoped>

</style>