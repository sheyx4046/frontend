<template>
  <div class="register-page">
    <div class="register-box">
      <h1>Sign Up</h1>

      <form @submit.prevent="registerUser">

        <div class="input-group">
          <label>Username</label>
          <input
            type="text"
            v-model="username"
            placeholder="Enter username"
            required
          />
        </div>

        <div class="input-group">
          <label>Email</label>
          <input
            type="email"
            v-model="email"
            placeholder="Enter email"
            required
          />
        </div>

        <div class="input-group">
          <label>Password</label>
          <input
            type="password"
            v-model="password"
            placeholder="Enter password"
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>

      <p class="message">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "SignUpPage",

  data() {
    return {
      username: "",
      email: "",
      password: "",
      message: ""
    }
  },

  methods: {
    async registerUser() {

      const newUser = {
        username: this.username,
        email: this.email,
        password: this.password
      }

      try {

        const response = await axios.post(
          "https://69e8890155d62f3479793293.mockapi.io/api/users/users",
          newUser
        )

        console.log(response.data)

        this.message = "Ro‘yxatdan o‘tish muvaffaqiyatli"

        // boshqa page ga o'tish
        this.$router.push("/login")

      } catch (error) {

        console.log(error)

        this.message = "Xatolik yuz berdi"
      }
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.register-page {
  width: 100%;
  height: 100vh;
  background: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-box {
  width: 400px;
  background: white;
  padding: 35px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.register-box h1 {
  text-align: center;
  margin-bottom: 25px;
  color: #333;
}

.input-group {
  margin-bottom: 18px;
}

.input-group label {
  display: block;
  margin-bottom: 7px;
  font-weight: bold;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
}

.input-group input:focus {
  border-color: #2563eb;
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  background: #2563eb;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}

.message {
  margin-top: 15px;
  text-align: center;
  color: green;
}
</style>