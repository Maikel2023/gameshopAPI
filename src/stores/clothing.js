// alles met games naar clothing zetten
// games => clothing


import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useClothingStore = defineStore('clothingStore', () => {
   /*********************************
   * STATE
   *********************************/
   const clothing = ref([])
   const cart = ref([])

   /**********************************
   * GETTERS
   * TOEGANG GEVEN TOT DE PERSISTENTE 
   * DATA PLAATSEN WE HIERONDER
   **********************************/
   const getClothing = computed(() => { return clothing.value; })
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

   async function loadClothing(){
      await fetch('https://www2.hm.com/nl_nl/heren/shop-op-item/vesten-truien/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=model&offset=36&page-size=36')
      .then(response => response.json())
      .then(data => clothing.value = data)
      .catch(error => console.log(error))
   }

   function addToCart(id)
   {
      let clothing_index = clothing.value.findIndex(clothing => clothing.id == id)
      let cart_item_index = cart.value.findIndex(item => item.clothing_id == id)
      
      if(cart_item_index >= 0)
      {
      // item already in cart, so increase amount
      cart.value[cart_item_index].amount++
      cart.value[cart_item_index].total = 
         parseFloat(cart.value[cart_item_index].amount) * parseFloat(clothing.value[clothing_index].price)
      } else {
      // Increase amount of item already in cart
      let new_cart_item = {
         clothing_id: clothing.value[clothing_index].id,
         amount: 1,
         total: parseFloat(clothing.value[clothing_index].price)
      }

      cart.value.push(new_cart_item);
      }
   }

   function findClothing(id)
   {
      return clothing.value.find(clothing => clothing.id == id);
   }

   function increaseAmountInCart(id)
   {
      let index = cart.value.findIndex(item => item.clothing_id == id)
      let clothing_price = findClothing(cart.value[index].clothing_id).price

      cart.value[index].amount++
      cart.value[index].total = 
         parseFloat(cart.value[index].amount) * parseFloat(clothing_price)
   }

   function decreaseAmountInCart(id)
   {
      let index = cart.value.findIndex(item => item.clothing_id == id)
      let clothing_price = findClothing(cart.value[index].clothing_id).price

      if(cart.value[index].amount > 0) {
      cart.value[index].amount--
      cart.value[index].total = 
         parseFloat(cart.value[index].amount) * parseFloat(clothing_price)
      }

      if(cart.value[index].amount == 0)
      cart.value.splice(index, 1)
   }

   function removeFromCart(id)
   {
      let index = cart.value.findIndex(item => item.clothing_id == id)
      cart.value.splice(index, 1)
   }

   return { 
    getClothing, 
    getCart, 
    countItemsInCart, 
    calcTotal,
    loadClothing, 
    addToCart, 
    findClothing, 
    increaseAmountInCart, 
    decreaseAmountInCart, 
    removeFromCart 
   }
})