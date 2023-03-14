<template>
  <div>
    <div class="nav-background">
      
    <nav class="nav nav-tabs flex-column">
        <router-link class="userNav-link userNav-text-color" to="/userProfile"><i class="fa-sharp fa-solid fa-circle-user"></i>User Profile</router-link>
        <form class="d-flex" role="search">
          <button class="btn searchBtn" type="submit"><i class="fa-sharp fa-solid fa-magnifying-glass border border-1" style="color: white; padding: 5px; border-radius: 5px;"></i></button>
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        </form>
        <router-link class="nav-link nav-text-color" to="/"><i class="fa-sharp fa-solid fa-house"></i> Home</router-link>
        <router-link class="nav-link nav-text-color" to="/about"><i class="fa-sharp fa-solid fa-address-card"></i> About</router-link>
        <router-link class="nav-link nav-text-color" to="/communities"><i class="fa-sharp fa-solid fa-users-between-lines"></i> Communities</router-link>
        <router-link class="nav-link nav-text-color" to="/developers"><i class="fa-sharp fa-solid fa-laptop-code"></i> Developers</router-link>
        <router-link class="nav-link nav-text-color" to="/checkout"><i class="fa-sharp fa-solid fa-cart-shopping"></i> Checkout</router-link>
        <router-link class="nav-link nav-text-color" to="/admin"><i class="fa-sharp fa-solid fa-folder-open"></i> Admin</router-link>
        <router-link class="nav-link nav-text-color" to="/login"><i class="fa-sharp fa-solid fa-user-lock"></i> Login</router-link>
        <router-link class="nav-link nav-text-color" to="/contact"><i class="fa-sharp fa-solid fa-phone"></i> Contact Us</router-link>
        <footer class="container-fluid text-light text-center position-fixed" style="height: 45px; margin-bottom: 35px; margin-top: 800px;  width: 75%; z-index:10; background-color:darkorchid; border-radius: 5px; padding-top: 10px;">Jamie-Lee Kinnear 2023</footer>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.nav-background {
  background: rgba(185, 4, 235, 0.479);
  box-shadow: 0 8px 32px 0 rgba(42, 10, 80, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 20px;
}

.nav-tabs {
  width: fit-content;
  height: 65vh;
  /* border-radius: 10px; */
  margin-top: 0px;
  justify-content: space-around;
  text-decoration: none;
  background-color: darkorchid;
  padding: 0 15px !important;
  margin-top: 10px;
}

.nav-text-color {
  color: white;
  width: 100%;
  /* border-bottom-right-radius: 5px; */
  /* border-bottom-left-radius: 5px; */
}

.nav-text-color:hover {
  background-color: orchid !important;
  color: white;
} 

.searchBtn:hover{
  background-color: orchid !important;
  color: white;
}

.searchBtn:visited {
  color: white;
}

.nav-link:visited {
  color: white;
  
}

.nav-link:active {
  background-color: orchid;
  
}

/* ------------------ */

.userNav-link i{
  font-size: 25px;
  color: white;
  margin-right: 5px;
}

.userNav-text-color {
  color: white;
  width: 100%;
  /* border-top-left-radius: 5px; */
  /* border-top-right-radius: 5px; */
  /* border-bottom-right-radius: 5px; */
  /* border-bottom-left-radius: 5px; */
  text-decoration: none;
  padding: 5px;
}

.userNav-text-color:hover {
  background-color: orchid !important;
  color: white;
  text-decoration: underline;
} 

.userNav-link:visited {
  color: white;
}

.userNav-link:active {
  background-color: orchid;
}
Footer{
  font-size: 14px;
}
</style>