<template>
  <div class="apple-homepage">
    <div class="header">
      <h1>Welcome to the IE Bank Homepage</h1>
    </div>
    <nav>
      <ul>
        <li><router-link to="/skull">Skull Page</router-link></li>
        <li><router-link to="/accounts">Accounts Page</router-link></li>
      </ul>
    </nav>
    <div class="circle"></div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.apple-homepage {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(45deg, #f06, #9f6);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.header {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px 20px;
  border-radius: 10px;
}

h1 {
  color: white;
  font-size: 2.5em;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
}

nav ul li {
  margin: 0 20px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 5px;
}

router-link {
  text-decoration: none;
  color: white;
  transition: color 0.3s, background-color 0.3s;
  padding: 5px 10px;
  border-radius: 5px;
}

router-link:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.circle {
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>
