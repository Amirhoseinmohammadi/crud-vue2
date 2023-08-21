<template>
  <div id="app">
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item>
            <router-link class="btn btn-info" to="/">users</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="btn btn-warning" to="/about"
              >Go to about</router-link
            >
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>

    <div><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: "App",
}
</script>

<style></style>
