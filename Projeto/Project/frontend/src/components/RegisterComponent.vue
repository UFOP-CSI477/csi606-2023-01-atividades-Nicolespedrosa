<template>
  <div>
    <h2 class="text-center mb-4">Cadastro de Usuário</h2>
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
        <b-button type="submit" variant="secondary">Cadastrar</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import UserService from "@/services/user.service";

export default {
  name: "RegisterComponent",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async handleSubmit(event) {
      event.preventDefault();

      try {
        await UserService.registerUser(this.user);

        this.$router.push("/register-people");
      } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
      }
    },
  },
};
</script>

<style>
.container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
}
</style>
