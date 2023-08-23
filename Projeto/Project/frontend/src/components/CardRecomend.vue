<template>
  <div>
    <h2 class="text-center mb-4">Recomendações</h2>
    <div class="d-flex flex-wrap justify-content-between">
      <div class="book-card" v-for="book in books" :key="book.id">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              :src="book.imageUrl || defaultImageUrl"
              alt="Book Image"
              class="card-img"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ book.title }}</h5>
              <p class="card-text">{{ book.description }}</p>
              <p class="card-text"><strong>Preço:</strong> {{ book.price }} R$</p>
              <b-button @click="addToCart(book)" variant="secondary">
                Add to Cart
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookService from "@/services/book.service";

export default {
  name: "CardRecomend",
  data() {
    return {
      books: [],
      defaultImageUrl:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    };
  },
  created() {
    this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      try {
        const books = await BookService.getAllNoAuthBooks();
        this.books = books;
      } catch (error) {
        console.error("Erro ao buscar os livros:", error);
      }
    },
    addToCart(book) {
      this.$store.dispatch("addToCart", book);
    },
  },
};
</script>

<style scoped>
.book-card {
  border: 1px solid #dee2e6;
  margin-bottom: 1rem;
  flex: 0 0 calc(33.333% - 1rem);
  box-sizing: border-box;
}
.card-body {
  padding: 1.25rem;
}
.card-title {
  margin-bottom: 0.75rem;
}
.card-text {
  margin-bottom: 1rem;
}
</style>
