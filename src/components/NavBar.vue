<template>
  <div>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>
        <v-btn
          text
          rounded
          to="/"
        >
          Vuetify
        </v-btn>
      </v-toolbar-title>

      <v-spacer />

      <v-btn
        text
        rounded
        to="/login"
      >
        Login
      </v-btn>

      <v-btn
        text
        rounded
        to="/signup"
      >
        Signup
      </v-btn>
      <v-btn
        text
        rounded
        @click="toggleTheme"
      >
        Toggle Theme
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    toggleTheme () {
      this.$emit('toggleTheme')
    }
  }
}
</script>
