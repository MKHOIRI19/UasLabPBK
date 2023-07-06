<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/weather">Weather</router-link></li>
          <li><router-link to="/location">Location</router-link></li>
          <li><router-link to="/stopwatch">Stopwatch</router-link></li>
          <li><router-link to="/tictactoe">Tic Tac Toe</router-link></li>
          <li><router-link to="/photo">Photo</router-link></li>
        </ul>
      </nav>
    </header>
    <marquee> Copyright : M.KHOIRI </marquee>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  background-color: cadetblue;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  background-color: paleturquoise;
  padding: 20px;
}

nav {
  padding: 30px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
  margin-right: 10px;
}

nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
  padding: 5px 10px;
}

nav a.router-link-exact-active {
  color: palevioletred;
}

nav a:hover {
  text-decoration: underline;
}

marquee{
  color: black;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
