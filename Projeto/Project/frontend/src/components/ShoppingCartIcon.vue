<template>
<<<<<<< HEAD
  <div>
    <b-dropdown class="ml-2" right>
      <template #button-content>
        <b-icon icon="cart"></b-icon>
      </template>
      <b-dropdown-item v-if="isCartEmpty">
        Seu carrinho está vazio
      </b-dropdown-item>
      <template v-else>
        <CardCart v-for="item in cartItems" :key="item._id" :item="item" />
        <b-dropdown-divider></b-dropdown-divider>
        <div class="button-container">
          <b-button @click="finalizePurchase" variant="secondary" class="mx-5">
            Finalizar Compra
          </b-button>
        </div>
      </template>
    </b-dropdown>
  </div>
</template>

<script>
import CardCart from "@/components/CardCart.vue"; // ajuste o caminho conforme necessário
import Swal from "sweetalert2"; // Importe a biblioteca

export default {
  name: "ShoppingCartIcon",
  components: {
    CardCart,
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    isCartEmpty() {
      return !this.cartItems || this.cartItems.length === 0;
    },
  },
  methods: {
    finalizePurchase() {
      // Verificar se o usuário está autenticado
      if (!this.isUserAuthenticated()) {
        // Exibir alerta para fazer o login
        Swal.fire({
          title: "Atenção!",
          text: "Você precisa estar logado para finalizar a compra.",
          icon: "warning",
          confirmButtonText: "Fazer Login",
        }).then((result) => {
          if (result.isConfirmed) {
            // Redirecionar para a rota de login
            this.$router.push("/register-user");
          }
        });
      } else {
        this.$router.push("/finalizar");
      }
    },
    isUserAuthenticated() {
      // Verificar se o token de autenticação está presente no local storage
      return !!localStorage.getItem("token");
    },
  },
};
</script>

<style>
.button-container {
  display: grid;
  place-items: center;
  min-height: 100px;  /* Ajuste de acordo com sua necessidade */
}
</style>
=======
    <div>
      <b-dropdown class="ml-2" right>
        <template #button-content>
          <b-icon icon="cart"></b-icon>
        </template>
        <b-dropdown-item v-if="isCartEmpty">
          Seu carrinho está vazio
        </b-dropdown-item>
        <template v-else>
          <CardCart v-for="item in cartItems" :key="item._id" :item="item" />
          <b-dropdown-divider></b-dropdown-divider>
          <div class="button-container">
            <b-button @click="finalizePurchase" variant="secondary" class="mx-5">
              Finalizar Compra
            </b-button>
          </div>
        </template>
      </b-dropdown>
    </div>
  </template>
  
  <script>
  import CardCart from "@/components/CardCart.vue"; // ajuste o caminho conforme necessário
  import Swal from "sweetalert2"; // Importe a biblioteca
  
  export default {
    name: "ShoppingCartIcon",
    components: {
      CardCart,
    },
    computed: {
      cartItems() {
        return this.$store.getters.cartItems;
      },
      isCartEmpty() {
        return !this.cartItems || this.cartItems.length === 0;
      },
    },
    methods: {
      finalizePurchase() {
        // Verificar se o usuário está autenticado
        if (!this.isUserAuthenticated()) {
          // Exibir alerta para fazer o login
          Swal.fire({
            title: "Atenção!",
            text: "Você precisa estar logado para finalizar a compra.",
            icon: "warning",
            confirmButtonText: "Fazer Login",
          }).then((result) => {
            if (result.isConfirmed) {
              // Redirecionar para a rota de login
              this.$router.push("/register-user");
            }
          });
        } else {
          this.$router.push("/finalizar");
        }
      },
      isUserAuthenticated() {
        // Verificar se o token de autenticação está presente no local storage
        return !!localStorage.getItem("token");
      },
    },
  };
  </script>
  
  <style>
  .button-container {
    display: grid;
    place-items: center;
    min-height: 100px;  /* Ajuste de acordo com sua necessidade */
  }
  </style>
  
>>>>>>> cf66af24a5dba8ec05f08a7487f8735907b49216
