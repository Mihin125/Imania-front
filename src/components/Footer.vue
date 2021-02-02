<template>
	<footer class="footer-dark bg-dark">
		<div class="container">
			<div class="row">
				<div class="col-12 col-sm-6 col-md-3">
					<h5>Help & Support</h5>
					<ul>
						<li><router-link to="/contact" class="no-link"><strong class="link">Contact us</strong></router-link></li>
						<li><router-link to="/terms" class="no-link"><strong class="link">Terms & conditions</strong></router-link></li>
					</ul>
				</div>
				<div class="col-12 col-sm-6 col-md-3 mt-3 mt-sm-0">
					<h5>Follow Us</h5>
					<ul>
						<li><a href="#" class="no-link" target="_blank"><strong class="link">Facebook</strong></a></li>
						<li><a href="#" class="no-link" target="_blank"><strong class="link">Instagram</strong></a></li>
						<li><a href="#" class="no-link" target="_blank"><strong class="link">Youtube</strong></a></li>
						<li><a href="#" class="no-link" target="_blank"><strong class="link">Twitter</strong></a></li>
					</ul>
				</div>
				<div class="col-12 col-sm-6 col-md-3 mt-3 mt-sm-0">
					<h5>About Us</h5>
					<ul>
						<li><router-link to="/contact" class="no-link"><strong class="link">About</strong></router-link></li>
						<li><router-link to="/privacy" class="no-link"><strong class="link">Privacy policy</strong></router-link></li>
					</ul>
				</div>
				<div class="col-12 col-sm-6 col-md-3 mt-3 mt-sm-0">
					<h5>Quick Links</h5>
					<ul>
						<li><a href="#" class="no-link" target="_blank"><strong class="link">Apple</strong></a></li>
						<li><a href="#" class="no-link" target="_blank"><strong class="link">iCloude</strong></a></li>
						<li><a href="#" class="no-link" target="_blank"><strong class="link">Appstore</strong></a></li>
					</ul>
				</div>
			</div>
			<hr class="bg-secondary">
			<div class="row justify-content-center mt-3">
				<p>Copyright &copy; iClassified</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
}
</script>

<style scoped>
/* Global css */
@import url("../assets/css/styles.css");

/* Page css */
	footer{
		padding-top: 2.5rem;
		padding-bottom: 0.5rem;
		text-align: center;
		text-align: start;
	}
	h5{
		color: white !important;
		font-size: 1.5rem;
	}
	ul{
		list-style: none;
	}
	.link{
		color: rgb(156, 156, 156);
		transition: 0.2s;
	}
	.link:hover{
		color: white;
	}
	p{
		font-size: 1.1rem;
		color: white !important;
	}
</style>
