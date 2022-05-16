<template>
  <div class="Container">
    <div class="mt-10">SignUp Page</div>
    <div class="mt-10">Name : <input v-model="Name" /></div>
    <div class="mt-10">Email : <input v-model="Email" /></div>
    <div class="mt-10">Password : <input v-model="Password" /></div>
    <div class="mt-10">
      <button class="button" @click="SignUp">SignUp</button>
      <div>
        <span class="ErrorMsg">{{ this.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SigninPage",
  data() {
    return {
      Name: "",
      Email: "",
      Password: null,
      message: "",
    };
  },
  methods: {
    SignUp() {
      if (this.Email && this.Password) {
        var payload = {
          UserName: this.Name,
          UserEmail: this.Email,
          UserPassword: this.Password,
        };
        localStorage.setItem("UserData", JSON.stringify(payload));
        this.$router.push("/");
      } else this.message = "Fiels can't be empty";
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