<template>
  <div>
    <section id="carrossel" v-if="shouldRenderCarrossel">
      <CarrosselComponent />
    </section>
    <section id="card" v-else>
      <CardHorizontal v-for="book in searchResults" :key="book.id" :book="book" />
    </section>
    <section id="card-recomenda">
      <CardRecomend/>
    </section>
    <section id="card-oferta">
      <CardOfertas/>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CarrosselComponent from "@/components/CarrosselComponent.vue";
import CardHorizontal from "@/components/CardHorizontal.vue";
import CardRecomend from "@/components/CardRecomend.vue";
import CardOfertas from "@/components/CardOfertas.vue";

export default {
  name: "MainView",
  components: {
    CarrosselComponent,
    CardHorizontal,
    CardRecomend,
    CardOfertas,
  },
  computed: {
    ...mapGetters(["isSearchClicked", "searchResults"]),
    shouldRenderCarrossel() {
      return !this.isSearchClicked && !this.searchQuery;
    },
  },
  data() {
    return {
      searchQuery: "",
    };
  },
};
</script>

<style scoped>
/* Estilos personalizados podem ser adicionados aqui */
</style>
