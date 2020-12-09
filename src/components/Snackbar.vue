<template>
  <div
    class="text-center ma-2"
  >
    <v-snackbar
      :value="show"
      :left="$vuetify.breakpoint.lgAndUp"
      timeout="-1"
    >
      {{ text }}

      <template #action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="closeSnackbar"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeSnackbar () {
      this.$emit('closeSnackbar')
    }
  }
}
</script>
