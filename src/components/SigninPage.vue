<template>
  <div class="Container">
    <div class="mt-10">Login Page</div>
    <div class="mt-10">Email: <input v-model="Email" /></div>
    <div class="mt-10">Password: <input v-model="Password" /></div>
    <div class="mt-10">
      <button class="button" @click="Login">Login</button>
    </div>
    <div class="mt-5">
      <a href="#" @click="ToSignupPage"> Don't have an account ?</a>
    </div>
    <div class="ErrorMsg">{{ this.ErrorMsg }}</div>
  </div>
</template>

<script>
export default {
  name: "SigninPage",
  data() {
    return {
      Email: "",
      Password: null,
      ErrorMsg: "",
    };
  },
  methods: {
    Login() {
      var UserData = JSON.parse(localStorage.getItem("UserData"));
      if (UserData) {
        if (
          UserData.UserEmail == this.Email &&
          UserData.UserPassword == this.Password
        ) {
          this.$router.push("/HomePage");
        } else this.ErrorMsg = "Incorrect Email or Password";
      }
    },
    ToSignupPage() {
      this.$router.push("/SignupPage");
    },
  },
};
</script>

<style scoped>
.Container {
  width: 40%;
  margin-left: 30%;
  border: 1px solid;
  border-radius: 10px;
  height: 250px;
  background-color: rgb(231, 230, 227);
}
.mt-5 {
  margin-top: 5px;
}
.mt-10 {
  margin-top: 10px;
}
.button {
  transition-duration: 0.4s;
  width: 80px;
  height: 30px;
  margin-bottom: 20px;
  margin-top: 50px;
}
.button:hover {
  background-color: #4caf50; /* Green */
  color: white;
}
.ErrorMsg {
  color: red;
  font-size: 20px;
  font-style: italic;
}
</style>