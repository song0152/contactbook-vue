<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title>Contact Book</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/" tag="router-link">Home</v-btn>
      <v-btn text to="/add" tag="router-link">Add Contact</v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="mt-5">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
</script>

<style scoped>
</style>
