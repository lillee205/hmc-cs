<template>
  <v-app>
    <v-navigation-drawer>
      <v-list-item title="HMC CS Site" subtitle="cs.hmc.edu"></v-list-item>
      <v-divider></v-divider>
      <v-list-item link title="Home" to="/"></v-list-item>
      <v-list-item link title="Second page" to="/secondpage"></v-list-item>
    </v-navigation-drawer>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>
