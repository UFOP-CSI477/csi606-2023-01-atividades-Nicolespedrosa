<template>
<<<<<<< HEAD
  <div class="container">
    <h2 class="text-center mb-4">Login de Usuário</h2>
    <b-alert variant="danger" v-if="errorMessage">{{ errorMessage }}</b-alert>
    <!-- Adicione esta linha -->
    <b-form @submit="handleSubmit">
      <b-form-group label="Email" label-for="email">
        <b-form-input
          id="email"
          v-model="user.email"
          type="email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Senha" label-for="password">
        <b-form-input
          id="password"
          v-model="user.password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>

      <div class="d-flex justify-content-center py-2">
        <b-button type="submit" variant="secondary">Entrar</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import UserService from "@/services/user.service";

export default {
  name: "LoginComponent",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      errorMessage: "", // Para exibir uma mensagem de erro
    };
  },
  methods: {
    async handleSubmit(evt) {
      evt.preventDefault();
      try {
        const response = await UserService.loginUser(this.user);
        const token = response.token; // Suponho que o token seja retornado na resposta
        localStorage.setItem("token", token);
        this.$router.push({ name: "finalizarcompra" }); // Redirecione o usuário para a página inicial após o login bem-sucedido
      } catch (error) {
        console.error("Erro ao tentar fazer login:", error);
        this.errorMessage =
          "Falha ao fazer login. Verifique seu email e senha."; // Exiba uma mensagem de erro
      }
    },
  },
};
</script>
=======
    <div class="container">
      <h2 class="text-center mb-4">Login de Usuário</h2>
      <b-alert variant="danger" v-if="errorMessage">{{ errorMessage }}</b-alert>
      <!-- Adicione esta linha -->
      <b-form @submit="handleSubmit">
        <b-form-group label="Email" label-for="email">
          <b-form-input
            id="email"
            v-model="user.email"
            type="email"
            required
          ></b-form-input>
        </b-form-group>
  
        <b-form-group label="Senha" label-for="password">
          <b-form-input
            id="password"
            v-model="user.password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
  
        <div class="d-flex justify-content-center py-2">
          <b-button type="submit" variant="secondary">Entrar</b-button>
        </div>
      </b-form>
    </div>
  </template>
  
  <script>
  import UserService from "@/services/user.service";
  
  export default {
    name: "LoginComponent",
    data() {
      return {
        user: {
          email: "",
          password: "",
        },
        errorMessage: "", // Para exibir uma mensagem de erro
      };
    },
    methods: {
      async handleSubmit(evt) {
        evt.preventDefault();
        try {
          const response = await UserService.loginUser(this.user);
          const token = response.token; // Suponho que o token seja retornado na resposta
          localStorage.setItem("token", token);
          this.$router.push({ name: "home" }); // Redirecione o usuário para a página inicial após o login bem-sucedido
        } catch (error) {
          console.error("Erro ao tentar fazer login:", error);
          this.errorMessage =
            "Falha ao fazer login. Verifique seu email e senha."; // Exiba uma mensagem de erro
        }
      },
    },
  };
  </script>
  
>>>>>>> cf66af24a5dba8ec05f08a7487f8735907b49216
