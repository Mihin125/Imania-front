<template>
	<div class="signin-form">
		<form action="" method="post">
			<h2>Sign in</h2>
			<p class="hint-text">Sign in with your social media account</p>
			<div class="social-btn text-center">
				<a href="#" class="btn btn-primary btn-lg" title="Facebook"><i class="fa fa-facebook"></i></a>
				<a href="#" class="btn btn-info btn-lg" title="Twitter"><i class="fa fa-twitter"></i></a>
				<a href="#" class="btn btn-danger btn-lg" title="Google"><i class="fa fa-google"></i></a>
			</div>
			<div class="or-seperator"><b>or</b></div>
			<div class="form-group">
				<input type="email" class="form-control input-lg" name="username" placeholder="Username" required="required">
			</div>
			<div class="form-group">
				<input type="password" class="form-control input-lg" name="password" placeholder="Password" required="required">
			</div>  
			<div class="form-group">
				<button type="submit" class="btn btn-success btn-lg btn-block signin-btn">Sign in</button>
			</div>
			<div class="text-center small"><a href="#">Forgot Your password?</a></div>
		</form>
		<div class="text-center small">Don't have an account? <a href=""><router-link to="/signup">Sign up</router-link></a></div>
	</div>
</template>

<script>
export default {
    name: 'SignIn'
}
</script>

<style scoped>

	.form-control {
		font-size: 16px;
		transition: all 0.4s;
		box-shadow: none;
	}
	.form-control:focus {
		border-color: #5cb85c;
	}
	.form-control, .btn {
		border-radius: 50px;
		outline: none !important;
	}
	.signin-form {
		width: 400px;
		margin: 0 auto;
		padding: 30px 0;
	}
	.signin-form form {
		border-radius: 5px;
		margin-bottom: 20px;
		background: #fff;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
		padding: 40px;
	}
	.signin-form a {
		color: #5cb85c;
	}    
	.signin-form h2 {
		text-align: center;
		font-size: 34px;
		margin: 10px 0 15px;
	}
	.signin-form .hint-text {
		color: #999;
		text-align: center;
		margin-bottom: 20px;
	}
	.signin-form .form-group {
		margin-bottom: 20px;
	}
	.signin-form .btn {        
		font-size: 18px;
		line-height: 26px;        
		font-weight: bold;
		text-align: center;
	}
	.signin-form .small {
		font-size: 17px;
		color: #000; 
	}
	.signin-btn {
		text-align: center;
		border-color: #5cb85c;
		transition: all 0.4s;
	}
	.signin-btn:hover {
		background: #5cb85c;
		opacity: 0.8;
	}
	.or-seperator {
		margin: 50px 0 15px;
		text-align: center;
		border-top: 1px solid #e0e0e0;
	}
	.or-seperator b {
		padding: 0 10px;
		width: 40px;
		height: 40px;
		font-size: 16px;
		text-align: center;
		line-height: 40px;
		background: #fff;
		display: inline-block;
		border: 1px solid #e0e0e0;
		border-radius: 50%;
		position: relative;
		top: -22px;
		z-index: 1;
	}
	.social-btn .btn {
		color: #fff;
		margin: 10px 0 0 30px;
		font-size: 15px;
		width: 55px;
		height: 55px;
		line-height: 45px;
		border-radius: 50%;
		font-weight: normal;
		text-align: center;
		border: none;
		transition: all 0.4s;
	}	
	.social-btn .btn:first-child {
		margin-left: 0;
	}
	.social-btn .btn:hover {
		opacity: 0.8;
	}
	.social-btn .btn-primary {
		background: #507cc0;
	}
	.social-btn .btn-info {
		background: #64ccf1;
	}
	.social-btn .btn-danger {
		background: #df4930;
	}
	.social-btn .btn i {
		font-size: 20px;
	}

	@media only screen and (max-width: 400px){
		.signin-form {
			width: 100%;
		}
	}

</style>