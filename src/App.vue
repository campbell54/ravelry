
<template>
  <div id="app">
    <div id="myLogo">
      <h1>Caitlin's Personal Ravelry</h1>
    </div>
    <div id="nav">
      <router-link to="/currentProject">Current Project</router-link> |
      <router-link to="/patterns">Patterns</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#myLogo {
  margin-top: 20px;
}

#myLogo h1 {
  color: #749799;
  font-family: 'Montserrat', sans-serif;
}

body {
  background-color: #f6f6f6 !important;
  width: 100%;
}

#nav {
  padding-bottom: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
