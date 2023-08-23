<template>
<<<<<<< HEAD
  <div>
    <h1>Finalizar Compra</h1>
    <!-- Itens do carrinho -->
    <div v-for="item in cartItems" :key="item.id" class="cart-item">
      <p>{{ item.title }}</p>
      <p>{{ item.description }}</p>
      <p>{{ item.price }} R$</p>
      <p>Quantidade: {{ item.quantity }}</p>
    </div>
    <h2>Dados do usuário</h2>

    <div class="user-info">
      <p>Email: {{ user.email }}</p>
    </div>
    <h2>Dados pessoais</h2>

    <!-- <div class="person-info">
      <p>Nome: {{ person.nome }}</p>
      <p>Rua: {{ person.rua }}</p>
      <p>Número: {{ person.numero }}</p>
      <p>Complemento: {{ person.complemento }}</p>
      <p>Documento: {{ person.documento }}</p>
      <p>CEP: {{ person.cep }}</p>
    </div> -->
    <b-button
      @click="finalizePurchase"
      variant="secondary"
      class="finalize-button"
    >
      Finalizar Compra
    </b-button>
  </div>
</template>

<script>
import UserService from "@/services/user.service";
import PersonService from "@/services/person.service";
import Swal from "sweetalert2";

export default {
  name: "FinalizarCompras",
  data() {
    return {
      cartItems: [], // Insira os itens do carrinho aqui
      user: {},
      person: {},
    };
  },
  async created() {
    try {
      const user = await UserService.getUserProfile();
      this.user = user;
      const userId = this.user._id;
      console.log("ID do usuário no componente:", userId);
      const person = await PersonService.getPersonByUserId(userId);
      this.person = person;
    } catch (error) {
      console.error("Erro ao buscar informações:", error);
    }
  },
  methods: {
    async fetchUserInfo() {
      try {
        const user = await UserService.getUserProfile();
        this.user = user;
      } catch (error) {
        console.error("Erro ao buscar informações do usuário:", error);
      }
    },
    async fetchPersonInfo() {
      try {
        const personId = this.person._id;
        console.log("ID da pessoa no componente:", personId); // Adicione essa linha
        const person = await PersonService.getPersonById(personId);
        this.person = person;
      } catch (error) {
        console.error("Erro ao buscar informações da pessoa:", error);
      }
    },

    finalizePurchase() {
      Swal.fire({
        title: "Compra Finalizada",
        text: "Sua compra foi finalizada com sucesso!",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style scoped>
/* Adicione os estilos do seu componente aqui */
</style>
=======
    <div>
      <h1>Finalizar Compra</h1>
      <!-- Itens do carrinho -->
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <p>{{ item.title }}</p>
        <p>{{ item.description }}</p>
        <p>{{ item.price }} R$</p>
        <p>Quantidade: {{ item.quantity }}</p>
      </div>
      <h2>Dados do usuário</h2>
  
      <div class="user-info">
        <p>Email: {{ user.email }}</p>
      </div>
      <h2>Dados pessoais</h2>
  
      <div class="person-info">
        <p>Nome: {{ person.nome }}</p>
        <p>Rua: {{ person.rua }}</p>
        <p>Número: {{ person.numero }}</p>
        <p>Complemento: {{ person.complemento }}</p>
        <p>Documento: {{ person.documento }}</p>
        <p>CEP: {{ person.cep }}</p>
      </div>
      <b-button
        @click="finalizePurchase"
        variant="secondary"
        class="finalize-button"
      >
        Finalizar Compra
      </b-button>
    </div>
  </template>
  
  <script>
  import UserService from "@/services/user.service";
  import PersonService from "@/services/person.service";
  import Swal from "sweetalert2";
  
  export default {
    name: "FinalizarCompras",
    data() {
      return {
        cartItems: [], // Insira os itens do carrinho aqui
        user: {},
        person: {},
      };
    },
    async created() {
      try {
        const user = await UserService.getUserProfile();
        this.user = user;
        const userId = this.user._id;
        console.log("ID do usuário no componente:", userId);
        const person = await PersonService.getPersonByUserId(userId);
        this.person = person;
      } catch (error) {
        console.error("Erro ao buscar informações:", error);
      }
    },
    methods: {
      async fetchUserInfo() {
        try {
          const user = await UserService.getUserProfile();
          this.user = user;
        } catch (error) {
          console.error("Erro ao buscar informações do usuário:", error);
        }
      },
      async fetchPersonInfo() {
        try {
          const personId = this.person._id;
          console.log("ID da pessoa no componente:", personId); // Adicione essa linha
          const person = await PersonService.getPersonById(personId);
          this.person = person;
        } catch (error) {
          console.error("Erro ao buscar informações da pessoa:", error);
        }
      },
  
      finalizePurchase() {
        Swal.fire({
          title: "Compra Finalizada",
          text: "Sua compra foi finalizada com sucesso!",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          this.$router.push("/");
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione os estilos do seu componente aqui */
  </style>
  
>>>>>>> cf66af24a5dba8ec05f08a7487f8735907b49216
