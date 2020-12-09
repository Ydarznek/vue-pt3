<template>
  <v-app>
    <NavBar @toggleTheme="toggleTheme" />
    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
    <BaseFooter />
  </v-app>
</template>

<script>

import NavBar from '@/components/NavBar'
import BaseFooter from '@/components/BaseFooter'

export default {
  name: 'App',
  components: { NavBar, BaseFooter },
  methods: {
    toggleTheme () {
      this.$vuetify.theme.themes.dark.anchor = '#41b883'
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }

}
</script>
