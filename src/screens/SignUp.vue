<template>
    <div class="signup-form">
        <form action="" method="post">
            <h2>Register</h2>
            <p class="hint-text">Create your account. It's free and only takes a minute.</p>
            <div class="form-group">
                <div class="row">
                    <div class="col"><input type="text" class="form-control" name="first_name" placeholder="User Name" required="required"></div>
                    
                </div>        	
            </div>
            <div class="form-group">
                <input type="email" class="form-control" name="email" placeholder="Email" required="required">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" name="password" placeholder="Password" required="required">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required">
            </div>        
            <div class="form-group">
                <label class="form-check-label"><input type="checkbox" required="required"> I accept the <a href=""><router-link to="/terms">Terms of Use</router-link></a> &amp; <a href=""><router-link to="/privacy">Privacy Policy</router-link></a></label>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-success btn-lg btn-block signup-btn">Register Now</button>
            </div>
        </form>
        <div class="text-center small">Already have an account? <a href=""><router-link to="/signin">Sign in</router-link></a></div>
    </div>
</template>

<script>
export default {
    name: 'SignUp'
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
    .signup-form {
        width: 400px;
        margin: 0 auto;
        padding: 30px 0;
        font-size: 15px;
    }
    .signup-form h2 {
        /* color: #636363; */
        font-size: 34px;
        margin: 0 0 15px;
        position: relative;
        text-align: center;
    }
    .signup-form h2:before, .signup-form h2:after {
        content: "";
        height: 2px;
        width: 30%;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 50%;
        z-index: 2;
    }	
    .signup-form h2:before {
        left: 0;
    }
    .signup-form h2:after {
        right: 0;
    }
    .signup-form .hint-text {
        color: #999;
        margin-bottom: 30px;
        text-align: center;
    }
    .signup-form form {
        border-radius: 5px;
		margin-bottom: 20px;
		background: #fff;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
		padding: 40px;
    }
    .signup-form .form-group {
        margin-bottom: 20px;
    }
    .signup-form input[type="checkbox"] {
        margin-top: 3px;
    }
    .signup-form .btn {
        font-size: 18px;
		line-height: 26px;        
		font-weight: bold;
		text-align: center;
    }
    .signup-btn {
		text-align: center;
		border-color: #5cb85c;
		transition: all 0.4s;
	}
	.signup-btn:hover {
		background: #5cb85c;
		opacity: 0.8;
	}
    .signup-form .small {
		font-size: 17px;
		color: #000; 
	}  	
    .signup-form a {
        color: #5cb85c;
    }
    .signup-form a:hover {
        text-decoration: none;
    }
    .signup-form form a {
        color: #5cb85c;
        text-decoration: none;
    }	
    .signup-form form a:hover {
        text-decoration: underline;
    }

    @media only screen and (max-width: 400px){
		.signup-form {
			width: 100%;
		}
	}
</style>