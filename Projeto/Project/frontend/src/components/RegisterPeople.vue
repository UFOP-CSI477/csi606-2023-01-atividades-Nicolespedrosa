<template>
<<<<<<< HEAD
  <div class="container">
    <h2 class="text-center mb-4">Cadastro de Pessoa</h2>
    <b-form @submit="handleSubmit">
      <b-form-group label="Documento" label-for="documento">
        <b-form-input
          id="documento"
          v-model="pessoa.documento"
          type="text"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Nome" label-for="nome">
        <b-form-input
          id="nome"
          v-model="pessoa.nome"
          type="text"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Rua" label-for="rua">
        <b-form-input id="rua" v-model="pessoa.rua" type="text"></b-form-input>
      </b-form-group>

      <b-form-group label="Número" label-for="numero">
        <b-form-input
          id="numero"
          v-model="pessoa.numero"
          type="number"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Complemento" label-for="complemento">
        <b-form-input
          id="complemento"
          v-model="pessoa.complemento"
          type="text"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="CEP" label-for="cep">
        <b-form-input id="cep" v-model="pessoa.cep" type="text"></b-form-input>
      </b-form-group>

      <div class="d-flex justify-content-center py-2">
        <b-button type="submit" variant="secondary">Cadastrar</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import PersonService from "@/services/person.service";
import Swal from "sweetalert2";
import router from "@/router";

export default {
  name: "RegisterPerson",
  data() {
    return {
      pessoa: {
        nome: "",
        documento: "",
        rua: "",
        numero: "",
        complemento: "",
        cep: "",
      },
    };
  },
  methods: {
    async handleSubmit(event) {
      event.preventDefault();

      try {
        await PersonService.createPerson(this.pessoa);

        Swal.fire({
          title: "Sucesso!",
          text: "Cadastro realizado com sucesso.",
          icon: "success",
          confirmButtonText: "Ok",
        });
      } catch (error) {
        console.error("Erro ao cadastrar pessoa:", error);

        // Swal.fire({
        //   title: "Erro!",
        //   text: "Erro ao cadastrar pessoa. Tente novamente.",
        //   icon: "error",
        //   confirmButtonText: "Ok",
        // });
      } finally {
        router.push("/login");
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
=======
    <div class="container">
      <h2 class="text-center mb-4">Cadastro de Pessoa</h2>
      <b-form @submit="handleSubmit">
        <b-form-group label="Documento" label-for="documento">
          <b-form-input
            id="documento"
            v-model="pessoa.documento"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
  
        <b-form-group label="Rua" label-for="rua">
          <b-form-input
            id="rua"
            v-model="pessoa.rua"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
  
        <b-form-group label="Número" label-for="numero">
          <b-form-input
            id="numero"
            v-model="pessoa.numero"
            type="number"
            required
          ></b-form-input>
        </b-form-group>
  
        <b-form-group label="Complemento" label-for="complemento">
          <b-form-input
            id="complemento"
            v-model="pessoa.complemento"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
  
        <b-form-group label="CEP" label-for="cep">
          <b-form-input
            id="cep"
            v-model="pessoa.cep"
            type="text"
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
  import PersonService from "@/services/person.service";
  import Swal from 'sweetalert2';
  import router from '@/router';
  
  export default {
    name: "RegisterPerson",
    data() {
      return {
        pessoa: {
          documento: "",
          rua: "",
          numero: "",
          complemento: "",
          cep: ""
        }
      };
    },
    methods: {
      async handleSubmit(event) {
        event.preventDefault();
  
        try {
          await PersonService.createPerson(this.pessoa);
          
          Swal.fire({
            title: 'Sucesso!',
            text: 'Cadastro realizado com sucesso.',
            icon: 'success',
            confirmButtonText: 'Ok'
          }).then(() => {
            router.push('/login');
          });
        } catch (error) {
          console.error("Erro ao cadastrar pessoa:", error);
          
          Swal.fire({
            title: 'Erro!',
            text: 'Erro ao cadastrar pessoa. Tente novamente.',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
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
  
>>>>>>> cf66af24a5dba8ec05f08a7487f8735907b49216
