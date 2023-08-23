<template>
<<<<<<< HEAD
  <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-warning">
    <div class="container">
      <div class="navbar-collapse">
        <form
          class="d-flex justify-content-center align-items-center w-100"
          @submit.prevent="search"
        >
          <a  href="/" class="navbar-brand mx-2 fs-1">BookStore</a>
          <b-input-group class="mx-2">
            <b-form-input
              v-model="searchQuery"
              type="search"
              placeholder="Procurar"
              aria-label="Procurar"
              @input="handleInput"
            />
            <b-input-group-append> </b-input-group-append>
          </b-input-group>
          <button class="btn btn-secondary mx-2" type="submit">Buscar</button>
        </form>
        <ShoppingCartIcon :cartItems="cartItems" />
        <CartCounter />
        
					<button class="btn btn-danger text-dark" @click="logOutUser()">
						Logout
					</button>
      </div>
    </div>
  </nav>
  <hr class="navbar-divider" />
  </div>

</template>

<script>
import ShoppingCartIcon from "@/components/ShoppingCartIcon.vue";
import CartCounter from "@/components/CartCounter.vue";

export default {
  name: "NavbarComponent",
  components: {
    ShoppingCartIcon,
    CartCounter,
  },
  data() {
    return {
      searchQuery: "",
      cartItems: [],
    };
  },
  computed: {
    cartItemCount() {
      return this.$store.state.cartItemCount;
    },
  },
  methods: {
    search() {
      this.$store.dispatch("updateSearchQuery", this.searchQuery);
      this.$store.dispatch("updateSearchClicked", true);
      this.$store.dispatch("searchBooks", this.searchQuery); // Dispara a action searchBooks
    },
    clearSearch() {
      this.searchQuery = ""; // Limpa o campo de pesquisa
      this.$store.dispatch("updateSearchClicked", false);
    },
    handleInput() {
      if (!this.searchQuery) {
        this.clearSearch();
      }
    },
    logOutUser() {
      localStorage.clear("jwt");
      if (this.$router.currentRoute.path !== "/login") {
        this.$router.push("/login").catch((err) => {
          if (err.name !== "NavigationDuplicated") {
            throw err;
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.navbar-divider {
  margin: 0;
  border: none;
  border-top: 1px solid white;
}
</style>
=======
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-warning">
      <div class="container">
        <div class="navbar-collapse">
          <form
            class="d-flex justify-content-center align-items-center w-100"
            @submit.prevent="search"
          >
            <a class="navbar-brand mx-2 fs-1">BookStore</a>
            <b-input-group class="mx-2">
              <b-form-input
                v-model="searchQuery"
                type="search"
                placeholder="Procurar"
                aria-label="Procurar"
                @input="handleInput"
              />
              <b-input-group-append> </b-input-group-append>
            </b-input-group>
            <button class="btn btn-secondary mx-2" type="submit">Buscar</button>
          </form>
          <ShoppingCartIcon :cartItems="cartItems" />
          <CartCounter />
        </div>
      </div>
    </nav>
    <hr class="navbar-divider" />
    </div>
  
  </template>
  
  <script>
  import ShoppingCartIcon from "@/components/ShoppingCartIcon.vue";
  import CartCounter from "@/components/CartCounter.vue";
  
  export default {
    name: "NavbarComponent",
    components: {
      ShoppingCartIcon,
      CartCounter,
    },
    data() {
      return {
        searchQuery: "",
        cartItems: [],
      };
    },
    computed: {
      cartItemCount() {
        return this.$store.state.cartItemCount;
      },
    },
    methods: {
      search() {
        this.$store.dispatch("updateSearchQuery", this.searchQuery);
        this.$store.dispatch("updateSearchClicked", true);
        this.$store.dispatch("searchBooks", this.searchQuery); // Dispara a action searchBooks
      },
      clearSearch() {
        this.searchQuery = ""; // Limpa o campo de pesquisa
        this.$store.dispatch("updateSearchClicked", false);
      },
      handleInput() {
        if (!this.searchQuery) {
          this.clearSearch();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar-divider {
    margin: 0;
    border: none;
    border-top: 1px solid white;
  }
  </style>
  
>>>>>>> cf66af24a5dba8ec05f08a7487f8735907b49216
