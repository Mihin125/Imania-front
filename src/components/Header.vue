<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<router-link to="/"><a class="navbar-brand" href="">94 Corner</a></router-link>
	<button class="navbar-toggler" id="toggle-btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>

	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav ml-auto text-center">
			<li class="nav-item mr-lg-5" @click="toggleBack" v-bind:class="{'active': currentNav=='HomePage'}">
				<router-link to="/" class="nav-link">All</router-link>
			</li>
			<li class="nav-item mr-lg-5">
				<a class="nav-link" href="#">Mobile Phones</a>
			</li>
			<li class="nav-item mr-lg-5">
				<a class="nav-link" href="#">Accessories</a>
			</li>
			

			<hr class="bg-secondary g-lg-none">
			
			<li v-if="isSigned" class="nav-item dropdown" @click="toggleBack">
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<i class="fas fa-user"></i> {{ "nsadisha" }}
				</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
					<a class="dropdown-item" href="#" @click="toggleBack">
						<router-link to="/account">My Ads</router-link>
					</a>
					<div class="dropdown-divider"></div>
					<a class="dropdown-item text-danger" href="#" @click="toggleBack">Sign out</a>
				</div>
			</li>
			<li v-else class="nav-item" @click="toggleBack">
				<router-link to="/signup" class="nav-link">Signin/ Signup</router-link>
			</li>
			<li class="px-3 nav-item d-lg-none">
				<router-link to="post" class='no-link'>
				<button class=" btn btn-light btn-block h5 my-sm-0 p-2 my-2" type="button"><span class="h5">Post an ad</span></button>
				</router-link>
			</li>
		</ul>
	</div>
</nav>
</template>

<script>
export default {
	name: 'Header',
	data(){
		return{
			isSigned: true,
			currentNav: this.$route.name
		}
	},
	methods:{
		toggleBack(){
			document.getElementById('toggle-btn').click();
		}
	},
	watch:{
		$route (){
			this.currentNav = this.$route.name;
		}
	} 
}
</script>

<style scoped>
/* Global css */
@import url("../assets/css/styles.css");

/* Page css */
a{
	font-size: 1.2rem;
}
.navbar-brand{
	font-size: 2rem;
}
.dropdown-menu{min-width:0;}
.dropdown-menu .dropdown-item{white-space:normal;}
.dropdown-item{
	font-size: 1.02rem !important;
}

</style>