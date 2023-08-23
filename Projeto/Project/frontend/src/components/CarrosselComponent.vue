<template>
  <div>
    <div class="row p-0">
      <div class="col-md-1 bg-warning p-0 border-right">
        <!-- Coluna lateral esquerda amarela -->
      </div>
      <div class="col-md-10 p-0">
        <!-- Componente do carrossel -->
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          img-width="1024"
          img-height="480"
          style="
            background-color: rgb(240, 204, 66);
          "
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide v-for="book in books" :key="book.id">
            <template #img>
              <div class="d-flex">
                <img
                  class="d-block img-fluid"
                  width="512"
                  height="480"
                  :src="book.imageUrl || defaultImageUrl"
                  alt="Book Image"
                />
                <div
                  class="d-flex flex-column justify-content-center w-100 p-3"
                  style="background-color: rgb(240, 204, 66)"
                >
                  <h3>{{ book.title }}</h3>
                  <p>{{ book.description }}</p>
                  <p><strong>Autor:</strong> {{ book.author }}</p>
                  <p><strong>Preço:</strong> {{ book.price }} R$</p>
                  <p><strong>Desconto:</strong> {{ book.discount }}%</p>
                  <p>
                    <strong>Quantidade em Estoque:</strong>
                    {{ book.quantityInStock }}
                  </p>
                  <b-button @click="addToCart(book)" variant="secondary"
                    >Add to Cart</b-button
                  >
                </div>
              </div>
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
      <div class="col-md-1 bg-warning p-0 border-left">
        <!-- Coluna lateral direita amarela -->
      </div>
    </div>
  </div>
</template>

<script>
import { BCarousel, BCarouselSlide, BButton } from "bootstrap-vue";
import BookService from "@/services/book.service"; // Substitua pelo caminho correto

export default {
  components: {
    BCarousel,
    BCarouselSlide,
    BButton,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
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
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
/* Estilos personalizados podem ser adicionados aqui */
.border-left {
  border-left: 1px solid white;
}
.border-right {
  border-right: 1px solid white;
}
</style>
