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
      class="navbar navbar fixed-top navbar-expand-lg my-nav"
      :class="changeColor == true ? 'scrolled' : ''"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Portfolio</a>
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
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Progetti</a>
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
          </ul>
          <form class="d-flex" role="search">
            <div class="searchbar">
              <input
                class="search_input"
                type="text"
                name=""
                placeholder="Search..."
              />
              <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
            </div>
          </form>
        </div>
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
.navbar-brand {
  width: 285.62px;
}
.scrolled {
  background-color: red;
  transition: 0.3s ease-in-out;
}
.my-nav {
  padding: 20px;
  transition: 0.3s ease-in-out;
  .nav-item {
    font-size: 1.3em;
  }
}
.jumbotron {
  height: 500px;
  background-size: cover;

  h1 {
    font-size: 3em;
    text-shadow: 3px 3px 2px black;
  }
}
.searchbar {
  margin-bottom: auto;
  margin-top: auto;
  height: 60px;
  background-color: #353b48;
  border-radius: 30px;
  padding: 10px;
}

.search_input {
  border: 0;
  outline: 0;
  background: none;
  width: 0;
  caret-color: transparent;
  line-height: 40px;
  transition: width 0.4s linear;
}

.searchbar:hover > .search_input {
  padding: 0 10px;
  width: 450px;
  caret-color: red;
  transition: width 0.4s linear;
}

.searchbar:hover > .search_icon {
  background: white;
  color: #e74c3c;
}

.search_icon {
  height: 40px;
  width: 40px;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: white;
  text-decoration: none;
}
</style>
