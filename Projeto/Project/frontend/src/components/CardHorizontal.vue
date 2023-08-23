<template>
  <div v-if="book" class="d-flex justify-content-center">
    <b-card no-body class="overflow-hidden" style="max-width: 540px">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="book.imageUrl || defaultImageUrl"
            alt="Book Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="book?.title">
            <b-card-text>
              {{ book?.description }}
            </b-card-text>
            <b-button @click="addToCart(book)" variant="primary">Add to Cart</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CardHorizontal",
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      defaultImageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
    };
  },
  methods: {
    addToCart(book) {
    this.$emit("add-to-cart", book);
    this.$store.dispatch("addToCart");
  }
  }
};
</script>
