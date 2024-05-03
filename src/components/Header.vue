<script>
export default {
  data() {
    return {
      scrollPosition: 0,
      changeColor: false,
      searchInput: "",
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

    search(searchInput) {
      // this.$router.push({name: 'search', params: {query: searchInput}})
      window.location.href =
        "http://localhost:5173/projects/search/" + this.searchInput;
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
      <div class="container">
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-white">
            <li class="nav-item">
              <router-link :to="{ name: 'home' }" class="nav-link text-white"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'home' }" class="nav-link text-white"
                >Progetti</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'contact-us' }"
                class="nav-link text-white"
                >Contattaci</router-link
              >
            </li>
          </ul>
          <!-- <form class="" role="search"> -->
          <div class="searchbar d-flex">
            <input
              class="search_input"
              type="text"
              name=""
              placeholder="Search..."
              v-model="searchInput"
              @keyup.enter="search(searchInput)"
            />
            <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
          </div>
          <!-- </form> -->
        </div>
      </div>
    </nav>
    <div class="jumbotron">
      <h1 class="typing">projects</h1>
    </div>
  </header>
</template>

<style lang="scss">
@use "/src/styles/variables" as *;
.navbar-brand {
  width: 100px;
  color: white;
}

.nav-item:hover {
  color: $tertiaryColor;
}

.my-nav {
  padding: 20px;
  transition: 0.3s ease-in-out;
  background-image: linear-gradient(#082032, #2c394b);

  &.scrolled {
    background-color: red;
    transition: 0.3s ease-in-out;
  }
  .nav-item {
    font-size: 1.3em;
  }

  li {
    color: white;
  }
}

:root {
  --steps: 8; // Char count
  --background: #2c394b;
}

.jumbotron {
  height: 250px;
  // background-image: url(/public/img/wallpaper-header.jpg);
  // background-size: cover;
  display: grid;
  place-content: center;
  // min-height: 100vh;
  background: var(--background);

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
  width: 300px;
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

.typing {
  // Text style
  font-family: "Inconsolata", Consolas, monospace;
  font-size: 6vw;
  color: #ff4c29;
  // Core styles
  position: relative;
  &::after {
    content: "|";
    position: absolute;
    right: 0;
    width: 100%;
    color: white;
    background: var(--background);
    animation: typing 4s steps(var(--steps)) forwards, caret 1s infinite;
  }
}
// Animation
@keyframes typing {
  to {
    width: 0;
  }
}
@keyframes caret {
  50% {
    color: transparent;
  }
}
</style>
