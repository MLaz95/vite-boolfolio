<script>
export default {
  data() {
    return {
      scrollPosition: 0,
      changeColor: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },

  methods: {
    //method that will check if the scroll position is changed and update the boolean value
    updateScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 100) {
        this.changeColor = true;
      } else {
        this.changeColor = false;
      }
    },
  },
};
</script>

<template>
  <header>
    <nav
      class="navbar navbar fixed-top navbar-expand-lg bg-transparent my-nav"
      :class="changeColor == true ? 'bg-white' : ''"
    >
      <div class="container-fluid d-flex align-items-center">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex justify-content-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div
      class="jumbotron bg-body-secondary d-flex align-items-center justify-content-center"
    >
      <h1 class="text-center m-0">PROJECTS</h1>
    </div>
  </header>
</template>

<style lang="scss">
.my-nav {
  padding: 20px;

  .scrolled {
    background: red !important;
  }

  .nav-item {
    font-size: 1.3em;
  }
}
.jumbotron {
  height: 400px;
  background-image: url("/public/img/wallpaper-header.jpg");
  background-size: cover;
}
</style>
