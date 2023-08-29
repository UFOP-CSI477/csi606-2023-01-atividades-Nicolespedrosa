<template>
<<<<<<< HEAD
  <div>
    <h2 class="text-center mb-4">Ofertas</h2>
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
              <p class="card-text">
                <template v-if="book.discount > 0">
                  <strong>Preço:</strong>
                  <span class="original-price">{{ book.price }} R$</span>
                  <span class="discount-price"
                    >{{ discountedPrice(book) }} R$</span
                  >
                </template>
                <template v-else>
                  <strong>Preço:</strong> {{ book.price }} R$
                </template>
              </p>
              <b-button @click="addToCart(book)" variant="secondary">
                Add to Cart
              </b-button>
=======
    <div>
      <h2 class="text-center mb-4">Ofertas</h2>
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
                <p class="card-text">
                  <template v-if="book.discount > 0">
                    <strong>Preço:</strong>
                    <span class="original-price">{{ book.price }} R$</span>
                    <span class="discount-price"
                      >{{ discountedPrice(book) }} R$</span
                    >
                  </template>
                  <template v-else>
                    <strong>Preço:</strong> {{ book.price }} R$
                  </template>
                </p>
                <b-button @click="addToCart(book)" variant="secondary">
                  Add to Cart
                </b-button>
              </div>
>>>>>>> cf66af24a5dba8ec05f08a7487f8735907b49216
            </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  </div>
</template>

<script>
import BookService from "@/services/book.service";

export default {
  name: "CardOfertas",
  data() {
    return {
      books: [],
      defaultImageUrl:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZED8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
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
    discountedPrice(book) {
      return (book.price * (1 - book.discount / 100)).toFixed(2);
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
.original-price {
  text-decoration: line-through;
  color: red;
  font-size: 0.9rem;
  margin-right: 0.5rem;
}
.discount-price {
  font-size: 1.2rem;
}
</style>
=======
  </template>
  
  <script>
  import BookService from "@/services/book.service";
  
  export default {
    name: "CardOfertas",
    data() {
      return {
        books: [],
        defaultImageUrl:
          "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZED8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
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
      discountedPrice(book) {
        return (book.price * (1 - book.discount / 100)).toFixed(2);
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
  .original-price {
    text-decoration: line-through;
    color: red;
    font-size: 0.9rem;
    margin-right: 0.5rem;
  }
  .discount-price {
    font-size: 1.2rem;
  }
  </style>
  
>>>>>>> cf66af24a5dba8ec05f08a7487f8735907b49216
