<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-3">
				<div class="">
					<div class="text-center py-5">
						<i class="fas fa-user"></i>
						<h5 class="mt=3">{{username}}<br>{{email}}</h5>
					</div>
					<div class="list-group" id="list-tab" role="tablist">
						<a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center active" id="list-my-ads" data-toggle="list" href="#my-ads" role="tab" aria-controls="ads">
							<strong>My Ads</strong>
							<span class="badge badge-secondary badge-pill">{{posted.length}}</span>
							</a>
						<a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" id="list-promoted-ads" data-toggle="list" href="#promoted-ads" role="tab" aria-controls="promoted">
							<strong>Promoted Ads</strong>
							<span class="badge badge-secondary badge-pill">{{promoted.length}}</span>
							</a>
						<a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" id="list-saved-ads" data-toggle="list" href="#saved-ads" role="tab" aria-controls="saved">
							<strong>Saved Ads</strong>
							<span class="badge badge-secondary badge-pill">{{saved.length}}</span>
							</a>
						<a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" id="list-account-settings" data-toggle="list" href="#account-settings" role="tab" aria-controls="settings">
							<strong>Account Settings</strong>
							</a>
					</div>
				</div>
			</div>
			<div class="col-md-9">
				<div class="tab-content mt-4" id="nav-tabContent">
					<div class="tab-pane fade show active" id="my-ads" role="tabpanel" aria-labelledby="list-my-ads">
						<h2>My Ads</h2>
						<hr>
						<div class="row mt-3">
							<h1 v-if="posted.length==0" class="mx-auto">You have no ads!</h1>
							<div v-else class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" v-for="post in posted" :key="post.id">
								<Post :data="post" edit="true"/>
							</div>
						</div>
					</div>
					<div class="tab-pane fade" id="promoted-ads" role="tabpanel" aria-labelledby="list-promoted-ads">
						<h2>Promoted Ads</h2>
						<hr>
						<div class="row mt-3">
							<h1 v-if="promoted.length==0" class="mx-auto">You have no promoted ads!</h1>
							<div v-else class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" v-for="post in promoted" :key="post.id">
								<Post :data="post" edit="true"/>
							</div>
						</div>
					</div>
					<div class="tab-pane fade" id="saved-ads" role="tabpanel" aria-labelledby="list-saved-ads">
						<h2>Saved Ads</h2>
						<hr>
						<div class="row mt-3">
							<h1 v-if="saved.length==0" class="mx-auto">You have no saved ads!</h1>
							<div v-else class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" v-for="post in saved" :key="post.id">
								<Post :data="post"/>
							</div>
						</div>
					</div>
					<div class="tab-pane fade" id="account-settings" role="tabpanel" aria-labelledby="list-account-settings">
						<h2>Account Settings</h2>
						<hr>
						<h3>Personal Information</h3>
						<section>
							<p><strong>Email: </strong>{{ "lakshanrz@gmail.com" }}</p>

							<form action="">
								<div class="row">
									<div class="col-md-5">
										<label for="name">Name</label>
										<div class="input-group mb-3">
											<input type="text" class="form-control" id="name" placeholder="Name" aria-describedby="basic-addon3">
										</div>
									</div>
									<div class="w-100"></div>
									<div class="col-md-5">
										<label for="district">District</label>
										<div class="input-group mb-3">
											<select name="district" id="district" class="form-control" @change="setCities">
												<option value="" selected>Select District</option>
												<option value="Ampara">Ampara</option>
												<option value="Anuradhapura">Anuradhapura</option>
												<option value="Badulla">Badulla</option>
												<option value="Batticaloa">Batticaloa</option>
												<option value="Colombo">Colombo</option>
												<option value="Galle">Galle</option>
												<option value="Gampaha">Gampaha</option>
												<option value="Hambantota">Hambantota</option>
												<option value="Jaffna">Jaffna</option>
												<option value="Kalutara">Kalutara</option>
												<option value="Kandy">Kandy</option>
												<option value="Kegalle">Kegalle</option>
												<option value="Kilinochchi">Kilinochchi</option>
												<option value="Kurunegala">Kurunegala</option>
												<option value="Mannar">Mannar</option>
												<option value="Matale">Matale</option>
												<option value="Matara">Matara</option>
												<option value="Moneragala">Moneragala</option>
												<option value="Mullaitivu">Mullaitivu</option>
												<option value="Nuwara Eliya">Nuwara Eliya</option>
												<option value="Polonnaruwa">Polonnaruwa</option>
												<option value="Puttalam">Puttalam</option>
												<option value="Ratnapura">Ratnapura</option>
												<option value="Trincomalee">Trincomalee</option>
												<option value="Vavuniya">Vavuniya</option>
											</select>
										</div>
									</div>
									<div class="col-md-5">
										<label for="city">City</label>
										<div class="input-group mb-3">
											<select name="city" id="city" class="form-control">
												<option value="">Select city</option>
												<option value="" v-for="city in cities[selectedIndex]" :key="city">{{city}}</option>
											</select>
										</div>
									</div>
									<div class="w-100"></div>
									<div class="col-md-5">
										<label for="name">Phone 1</label>
										<div class="input-group mb-3">
											<input type="text" class="form-control" id="phone1" placeholder="Phone 1" aria-describedby="basic-addon3">
										</div>
									</div>
									<div class="col-md-5">
										<label for="name">Phone 2</label>
										<div class="input-group mb-3">
											<input type="text" class="form-control" id="phone1" placeholder="Phone 2" aria-describedby="basic-addon3">
										</div>
									</div>
									<div class="w-100"></div>
									<div class="col">
										<button type="button" class="btn btn-outline-secondary"><strong>Update details</strong></button>
									</div>
								</div>
							</form>
						</section>
						<h3 class="mt-4">Change password</h3>
						<section>
							<div class="row">
								<div class="col-md-5">
									<form>
										<div class="input-group mb-3">
											<input type="password" class="form-control" id="currentpass" placeholder="Current password">
										</div>
										<div class="input-group mb-3">
											<input type="password" class="form-control" id="newpass" placeholder="New password">
										</div>
										<div class="input-group mb-3">
											<input type="password" class="form-control" id="confirmpass" placeholder="Confirm password">
										</div>
										<div class="w-100"></div>
										<button type="submit" class="btn btn-outline-danger"><strong>Change password</strong></button>
									</form>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>		
	</div>
</template>

<script>
export default {
    name: 'MyAccount',
	data(){
		return{
			selectedIndex:'',
            cities:  [
                [ "Akkarepattu","Ampara","Kalmunai","Sainthamaruthu"], //this contains cities for Ampara district
                [ "Anuradhapura","Eppawala","Galenbindunuwewa","Galnewa","Habarana","Kekirawa","Medawachchiya","Mihintale","Nochchiyagama","Talawa","Tambuttegama"], //this contains cities for Anuradapura district
                ["Badulla", "Bandarawela","Diyatalawa","Ella","Hali Ela","Haputale","Mahiyanganaya","Passara","Welimada"], //this contains cities for badulla district
                ["Batticaloa"],
                ["Angoda", "Athurugiriya","Avissawella","Battaramulla","Boralesgamuwa","Colombo 1","Colombo 10","Colombo 11","Colombo 12","Colombo 13","Colombo 14","Colombo 15","Colombo 2","Colombo 3","Colombo 4","Colombo 5","Colombo 7","Colombo 8","Colombo 9","Godagama","Hanwella","Homagama","Kaduwela","Kesbewa","Kohuwala","Kolonnawa","Kottawa","Kotte","Malabe","Meegoda","Moratuwa","Mount Lavinia","Nawala","Padukka","Pannipitiya","Rajagiriya","Rathmalana","Talawatugoda","Wellampitiya"],
                ["Galle","Ambalangoda","Elpitiya","Hikkaduwa","Baddegama","Ahangama","Batapola","Bentota","Karapitiya"],
                ["Gampaha","Negambo","Kiribathgoda","Kadawatha","Wattala","Delgoda","Divulapitiya","Ganemulla","Ja-Ela","Kandana","Katunayake","Kelaniya","Minuwangoda","Mirigama","Nittambuwa","Ragama","Seeduwa","Veyangoda"],
                ["Hambantota","Tangalla","Beliatta","Ambalantota","Tissamaharama"],
                ["Jaffna","Nallur","Chavakachcheri"],
                ["Panadura","Horana","Kalutara","Bandaragama","Matugama","Alutgama","Beruwala","Ingiriya","Wadduwa"],
                ["Kandy","Katugastota","Peradeniya","Akurana","Ampitiya","Digana","Galagedara","Gelioya","Kadugannawa","Kundasale","Madawala Bazaar","Nawalapitiya","Pilimatalawa","Wattegama"],
                ["Kegalle","Mawanella","Rambukkana","Warakapola","Ruwanwella","Dehiowita","Deraniyagala","Galigamuwa","Kitulgala","Yatiyantota"],
                ["Kilinochchi",],
                ["Kurunegala","Kuliyapitiya","Polgahawela","Pannala","Narammala","Alawwa","Bingiriya","Galgamuwa","Giriulla","Hettipola","Ibbangamuwa","Mawathagama","Nikaweratiya","Wariyapola"],
                ["Mannar"],
                ["Matale", "Dambulla","Galewela","Ukuwela","Sigiriya","Palapathwela","Pallepola","Rattota","Ytawatta"],
                ["Matara", "Akuressa","Weligama","Hakmana","Dikwella","Deniyaya","Gandara","Kamburugamuwa","Kamburupitiya","Kekanadurra"],
                ["Monaragala", "Bibile","Wellawaya","Buttala","Kataragama"],
                ["Mullativu",],
                ["Nuwara Eliya", "Hatton","Ginigathhena","Madulla"],
                ["Polonnaruwa", "Kaduruwela","Hingurakgoda","Medirigiriya"],
                ["Chilaw", "Nattandiya","Wennappuwa","Puttalam","Marawila","Anamaduwa","Dankotuwa"],
                ["Ratnapura", "Embilipitiya","Balangoda","Pelmadulla","Eheliyagoda","Kuruwita"],
                ["Trincomalee", "Kinniya"],
                ["Vavuniya",]
			],
			
			username: 'user',
			email: 'user@user.com',
			posted: [
				{
					id: 1,
					image: 'https://media.jumiadeals.com/tz_live/867fa4353e5e94d31ce1e6c.mobile-gallery-large.jpg',
					title: 'Iphone 5s',
					location: 'Colombo',
					time: 1,
					price: '35,000',
					views: 25
				},
				{
					id: 1,
					image: 'https://media.jumiadeals.com/tz_live/867fa4353e5e94d31ce1e6c.mobile-gallery-large.jpg',
					title: 'Iphone 5s',
					location: 'Colombo',
					time: 1,
					price: '35,000',
					views: 25
				},
				{
					id: 1,
					image: 'https://media.jumiadeals.com/tz_live/867fa4353e5e94d31ce1e6c.mobile-gallery-large.jpg',
					title: 'Iphone 5s',
					location: 'Colombo',
					time: 1,
					price: '35,000',
					views: 25
				},
				{
					id: 2,
					image: 'https://cdn.vox-cdn.com/thumbor/knNvJjFeXpjJpvt-2WpUt47lHps=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/12802749/DSC_8696-1024.1419979889.jpg',
					title: 'Iphone 5',
					location: 'Gampaha',
					time: 1.5,
					price: '30,000',
					views: 20
				},
				{
					id: 2,
					image: 'https://cdn.vox-cdn.com/thumbor/knNvJjFeXpjJpvt-2WpUt47lHps=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/12802749/DSC_8696-1024.1419979889.jpg',
					title: 'Iphone 5',
					location: 'Gampaha',
					time: 1.5,
					price: '30,000',
					views: 20
				},
				{
					id: 1,
					image: 'https://media.jumiadeals.com/tz_live/867fa4353e5e94d31ce1e6c.mobile-gallery-large.jpg',
					title: 'Iphone 5s',
					location: 'Colombo',
					time: 1,
					price: '35,000',
					views: 25
				},
				{
					id: 2,
					image: 'https://cdn.vox-cdn.com/thumbor/knNvJjFeXpjJpvt-2WpUt47lHps=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/12802749/DSC_8696-1024.1419979889.jpg',
					title: 'Iphone 5',
					location: 'Gampaha',
					time: 1.5,
					price: '30,000',
					views: 20
				},
				{
					id: 2,
					image: 'https://cdn.vox-cdn.com/thumbor/knNvJjFeXpjJpvt-2WpUt47lHps=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/12802749/DSC_8696-1024.1419979889.jpg',
					title: 'Iphone 5',
					location: 'Gampaha',
					time: 1.5,
					price: '30,000',
					views: 20
				},
			],
			promoted: [
				{
					id: 1,
					image: 'https://media.jumiadeals.com/tz_live/867fa4353e5e94d31ce1e6c.mobile-gallery-large.jpg',
					title: 'Iphone 5s',
					location: 'Colombo',
					time: 1,
					price: '35,000',
					views: 25
				},
				{
					id: 2,
					image: 'https://cdn.vox-cdn.com/thumbor/knNvJjFeXpjJpvt-2WpUt47lHps=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/12802749/DSC_8696-1024.1419979889.jpg',
					title: 'Iphone 5',
					location: 'Gampaha',
					time: 1.5,
					price: '30,000',
					views: 20
				},
			],
			saved: []
		}
	},
	methods:{
        setCities(){
            var e = document.getElementById("district");
            var index = e.options[e.selectedIndex].index;
            this.selectedIndex = index-1
        },
    }
}
</script>

<style scoped>
	section{
		padding-left: 1rem;
	}
	.fa-user{
		font-size: 5rem;
	}
	@media only screen and (max-width: 500px){
		h1{
			font-size: 1.5rem;
		}
		h2{
			font-size: 1.7rem;
		}
		h3{
			font-size: 1.4rem;
		}
		section{
			padding-left: 0;
		}
	}
</style>