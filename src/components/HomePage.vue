<template>
  <div>
    <span> Wellcome to Home Page </span>
    <div>
      <button class="button" @click="Logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    Logout() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.button {
  transition-duration: 0.4s;
  background-color: rgb(226, 86, 86);
  width: 80px;
  height: 30px;
  margin-bottom: 20px;
  margin-top: 50px;
}
</style>