import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGamesStore = defineStore('gamesStore', () => {
   /*********************************
   * STATE
   *********************************/
   const games = ref([])
   const cart = ref([])

   /**********************************
   * GETTERS
   * TOEGANG GEVEN TOT DE PERSISTENTE 
   * DATA PLAATSEN WE HIERONDER
   **********************************/
   const getGames = computed(() => { return games.value; })
   const getCart = computed(() => cart.value)

   const countItemsInCart = computed(() => {
      let count = 0
      
      if(cart.value.length > 0) {
      cart.value.forEach(item => {
         count += item.amount
      })
      }

      return count
   })

   const calcTotal = computed(() => {
      let total = 0.0;

      cart.value.forEach(item => {
      total += parseFloat(item.total)
      })

      return total;
   })

   /*************************************
   *  ACTIONS
   * TOEGANG GEVEN TOT DE PERSISTENTE 
   * DATA PLAATSEN WE HIERONDER
   ************************************/    
   async function loadGames() {
      await fetch('https://games-api.ao-alfacollege.nl/api/games')
      .then(response => response.json())
      .then(data => games.value = data)
      .catch(error => console.log(error))
   }

   function addToCart(id)
   {
      let game_index = games.value.findIndex(game => game.id == id)
      let cart_item_index = cart.value.findIndex(item => item.game_id == id)
      
      if(cart_item_index >= 0)
      {
      // item already in cart, so increase amount
      cart.value[cart_item_index].amount++
      cart.value[cart_item_index].total = 
         parseFloat(cart.value[cart_item_index].amount) * parseFloat(games.value[game_index].price)
      } else {
      // Increase amount of item already in cart
      let new_cart_item = {
         game_id: games.value[game_index].id,
         amount: 1,
         total: parseFloat(games.value[game_index].price)
      }

      cart.value.push(new_cart_item);
      }
   }

   function findGame(id)
   {
      return games.value.find(game => game.id == id);
   }

   function increaseAmountInCart(id)
   {
      let index = cart.value.findIndex(item => item.game_id == id)
      let game_price = findGame(cart.value[index].game_id).price

      cart.value[index].amount++
      cart.value[index].total = 
         parseFloat(cart.value[index].amount) * parseFloat(game_price)
   }

   function decreaseAmountInCart(id)
   {
      let index = cart.value.findIndex(item => item.game_id == id)
      let game_price = findGame(cart.value[index].game_id).price

      if(cart.value[index].amount > 0) {
      cart.value[index].amount--
      cart.value[index].total = 
         parseFloat(cart.value[index].amount) * parseFloat(game_price)
      }

      if(cart.value[index].amount == 0)
      cart.value.splice(index, 1)
   }

   function removeFromCart(id)
   {
      let index = cart.value.findIndex(item => item.game_id == id)
      cart.value.splice(index, 1)
   }

   return { 
    getGames, 
    getCart, 
    countItemsInCart, 
    calcTotal,
    loadGames, 
    addToCart, 
    findGame, 
    increaseAmountInCart, 
    decreaseAmountInCart, 
    removeFromCart 
   }
})