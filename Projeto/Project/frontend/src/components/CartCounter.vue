<template>
<<<<<<< HEAD
  <span v-if="cartItemCount > 0" class="cart-counter">
    {{ cartItemCount }}
  </span>
</template>

<script>
export default {
  name: "CartCounter",
  computed: {
    cartItemCount() {
      return this.$store.state.cartItemCount;
    },
  },
};
</script>

<style>
.cart-counter {
  position: relative;
  display: inline-block;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 10px;
  font-weight: bold;
}
</style>
=======
    <span v-if="cartItemCount > 0" class="cart-counter">
      {{ cartItemCount }}
    </span>
  </template>
  
  <script>
  export default {
    name: "CartCounter",
    computed: {
      cartItemCount() {
        return this.$store.state.cartItemCount;
      },
    },
  };
  </script>
  
  <style>
  .cart-counter {
    position: relative;
    display: inline-block;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 5px 10px;
    font-size: 10px;
    font-weight: bold;
  }
  </style>
  
>>>>>>> cf66af24a5dba8ec05f08a7487f8735907b49216
