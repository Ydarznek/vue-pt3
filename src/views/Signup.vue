<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Signup</h1>
        <v-form
          ref="signupForm"
          v-model="formValidity"
        >
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            :rules="emailRules"
          />

          <v-autocomplete
            label="Which browser do you use?"
            :items="browsers"
          />

          <v-file-input label="Attach profile picture" />

          <v-text-field
            v-model="birthday"
            label="Birthday"
            readonly
          />
          <v-date-picker v-model="birthday" />

          <v-checkbox
            v-model="agreeToTerms"
            :rules="agreeToTermsRules"
            label="Agree to terms and conritions"
            class="mb-5"
          />

          <v-row>
            <v-btn
              type="submit"
              color="primary"
              class="mr-4"
              :disabled="!formValidity"
            >
              Submit
            </v-btn>

            <v-btn
              color="success"
              class="mr-4"
              @click="validateForm"
            >
              Validate form
            </v-btn>

            <v-btn
              color="error"
              class="mr-4"
              @click="resetForm"
            >
              Reset
            </v-btn>

            <v-btn
              color="warning"
              @click="resetValidation"
            >
              Reset Validation
            </v-btn>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    agreeToTerms: false,
    agreeToTermsRules: [value => !!value || 'You must agree to the  and rules'],
    birthday: '',
    browsers: [
      'Chrome',
      'Firefox',
      'Safari',
      'Opera',
      'Edge',
      'Internet Explorer'
    ],
    email: '',
    emailRules: [
      value => !!value || 'Email is required',
      value => value.indexOf('@') !== 0 || 'Email should have a username.',
      value => value.includes('@') || 'Email should include an @ symbol.',
      value =>
        value.indexOf('.') - value.indexOf('@') > 1 ||
        'Email should contain a valid domain.',
      value => value.includes('.') || 'Email should include a period symbol.',
      value =>
        value.indexOf('.') <= value.length - 3 ||
        'Email should contain a valid domain extension.'

    ],
    formValidity: false
  }),
  methods: {
    resetForm () {
      this.$refs.signupForm.reset()
    },
    resetValidation () {
      this.$refs.signupForm.resetValidation()
    },
    validateForm () {
      this.$refs.signupForm.validate()
    }
  }
}
</script>
