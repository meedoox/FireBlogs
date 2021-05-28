<template>
  <div class="reset-password">
      <div class="form-wrap">
          <form class="reset">
              <h2>Reset Password</h2>
              <p>Forgot your password? Enter your email to reset it</p>
              <div class="inputs">
                  <div class="input">
                      <input type="text" placeholder="Email" v-model="email" />
                      <email class="icon" />
                  </div>
              </div>
              <button>Reset</button>
              <div class="angle"></div>
          </form>
          <div class="background"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: "ForgotPassword",
}
</script>

<style lang="scss" scoped>

</style>