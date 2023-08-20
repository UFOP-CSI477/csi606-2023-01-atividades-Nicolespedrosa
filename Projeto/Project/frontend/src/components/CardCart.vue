<template>
    <div class="card-cart">
      <div class="book-info">
        <img :src="item.imageUrl || defaultImageUrl" alt="Book Image" class="book-image" />
      </div>
      <div class="info-section">
        <h4>{{ item.title }}</h4>
        <p>{{ item.description }}</p>
        <p>{{ item.price }} R$</p>
        <p>Quantidade: {{ item.quantity }}</p>
        <b-form-spinbutton v-model="item.quantity" min="1" max="100" size="sm" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardCart",
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        defaultImageUrl:
          "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZeZED8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
      };
    }
  };
  </script>
  
  <style scoped>
  .card-cart {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #dee2e6;
    padding: 1rem;
    box-sizing: border-box;
  }
  
  .book-info {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .book-image {
    width: 100px;
    height: 150px;
    object-fit: cover;
    margin-right: 1rem;
  }
  
  .info-section {
    flex: 2;
  }
  </style>
  