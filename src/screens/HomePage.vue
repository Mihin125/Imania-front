<template>
  <section>
      <br>
      <div class="container-fluid">
          <div class="row d-flex justify-content-center">
              <div class="col-md-3 d-none d-lg-block">
                  <router-link to="post" class='no-link'>
                      <button class=" btn btn-dark btn-block h5 my-sm-0 p-2 my-2" type="button"><span class="h5">Post an ad</span></button>
                  </router-link>
                  <div class="sticky-top mt-3">
                        <h3 class="text-center">Filter search</h3>

                        <form class="mx-3">
                            <div class="form-group input-group-sm">
                                <label for="aa">Lable here</label>
                                <select class="form-control" id="aa">
                                    <option disabled="" selected="">- Brands-</option>
                                                        <option value="">APPLE</option>
                                                        <option value="">ASUS</option>
                                                        <option value="">BLACKBERRY</option>
                                                        <option value="">CAT</option>
                                                        <option value="">DIALOG</option>
                                                        <option value="">E-TEL</option>
                                                        <option value="">ENERGIZER</option>
                                                        <option value="">FORME</option>
                                                        <option value="">GOOGLE</option>
                                                        <option value="">GREENTEL</option>
                                                        <option value="">HTC</option>
                                                        <option value="">HUAWEI</option>
                                                        <option value="">INTEX</option>
                                                        <option value="">LAVA</option>
                                                        <option value="">LENOVO</option>
                                                        <option value="">LG</option>
                                                        <option value="">MEIZU</option>
                                                        <option value="">MICROMAX</option>
                                                        <option value="">MICROSOFT</option>
                                                        <option value="">MOTROLA</option>
                                                        <option value="">NOKIA</option>
                                                        <option value="">ONEPLUS</option>
                                                        <option value="">OPPO</option>
                                                        <option value="">PANASONIC</option>
                                                        <option value="">REALME</option>
                                                        <option value="">SAMSUNG</option>
                                                        <option value="">SONY</option>
                                                        <option value="">VIVO</option>
                                                        <option value="">XIAOMI</option>
                                                        <option value="">ZIGO</option>
                                                        <option value="">ZTE</option>
                                                        
                                                        

                                </select>
                            </div>
                            <div class="form-group input-group-sm">
                                <label for="location">Location</label>
                                <select class="form-control" name="district" id="district" v-model="selectedDistrict" @change="setCities()">
                                    <option value="" selected disabled>Select District</option>
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
                                <select v-if="selectedDistrict" name="city" id="city" class="form-control mt-1">
                                    <option value="" selected>Select city</option>
                                    <option value="" v-for="city in cities[selectedIndex]" :key="city">{{city}}</option>
                                </select>
                            </div>
                            <div class="form-group custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="o1" style="cursor:pointer;">
                                <label class="custom-control-label" for="o1" style="cursor:pointer;">Warrenty Remaining / include</label>
                            </div>
                            <div class="form-group custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="o2" style="cursor:pointer;">
                                <label class="custom-control-label" for="o2" style="cursor:pointer;">Exchange possibility</label>
                            </div>
                            <div class="form-group input-group-sm">
                                <label for="condition">Condition</label>
                                <select class="form-control" id="condition">
                                    <option>Brand new</option>
                                    <option>Used</option>
                                </select>
                            </div>
                            <div class="form-group input-group-sm">
                                <label for="priceRange">Price range</label>
                                <select class="form-control" id="priceRange" v-model="range">
                                    <option value="" disabled>Select range</option>
                                    <option value="low2high">Low to high</option>
                                    <option value="high2low">High to low</option>
                                    <option value="customrange">Custom range</option>
                                </select>
                            </div>
                            <div class="form-group input-group-sm mt-1" v-if="range=='customrange'">
                                <div class="row">
                                    <div class="col">
                                        <input type="number" name="from" id="from" class="form-control" placeholder="From">
                                    </div>
                                    <div class="col-auto text-center">-</div>
                                    <div class="col">
                                        <input type="number" name="to" id="to" class="form-control" placeholder="To">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group input-group-sm">
                                <label for="sort">Sort</label>
                                <select class="form-control" id="sort">
                                    <option value="newest">Newest first</option>
                                    <option value="oldest">Oldest first</option>
                                </select>
                            </div>
                            <div class="modal-footer">
                                <button type="reset" class="btn btn-secondary" @click="range=''">Reset</button>
                                <button type="submit" class="btn btn-primary" style="border-radius: 5px">Filter</button>
                            </div>
                        </form>
                    </div>
              </div>
              <div class="col-md-9">
                  <div class="row">
                      <!-- search bar -->
                      <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
                            </div>
                      </div>
                      <div class="col-12 col-md-12 mt-2 align-middle">
                      <strong>Popular searches : <span class="popular">{{ "Iphone 11" }}</span> <span class="popular">{{ "Iphone 12 mini" }}</span></strong>
                      <br>
                      <span>Showing 56 results. (1-10)</span>
                          <!-- Button trigger modal -->
                            <button type="button" class="btn float-right d-lg-none" data-toggle="modal" data-target="#filterr">
                                <i class="fas fa-filter"></i>
                            </button>
                      </div>
                      <div class="col-md-1"></div>
                  </div>
                  <br>

                  <!-- Modal -->
                    <div class="modal fade" id="filterr" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="title">Filter</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form class="">
                        <div class="modal-body">
                            <div class="from-group input-group-sm">
                                <label for="aa">Lable here</label><br>
                                <select name="" id="" class="form-control">
                                    <option value="" selected disabled>Select</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                </select>
                            </div>
                            <div class="form-group input-group-sm">
                                <label for="location">Location</label>
                                <select class="form-control" name="district" id="districtm" v-model="selectedDistrict" @change="setCitiesm()">
                                    <option value="" selected disabled>Select District</option>
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
                                <select v-if="selectedDistrict" name="city" id="city" class="form-control mt-1">
                                    <option value="" selected disabled>Select city</option>
                                    <option value="" v-for="city in cities[selectedIndex]" :key="city">{{city}}</option>
                                </select>
                            </div>
                            <div class="form-group custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="o1" style="cursor:pointer;">
                                <label class="custom-control-label" for="o1" style="cursor:pointer;">Warrenty include</label>
                            </div>
                            <div class="form-group custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="o2" style="cursor:pointer;">
                                <label class="custom-control-label" for="o2" style="cursor:pointer;">Exchange possibility</label>
                            </div>
                            <div class="form-group input-group-sm">
                                <label for="condition">Condition</label>
                                <select class="form-control" id="condition">
                                    <option>Brand new</option>
                                    <option>Used</option>
                                </select>
                            </div>
                            <div class="form-group input-group-sm">
                                <label for="priceRange">Price range</label>
                                <select class="form-control" id="priceRange" v-model="range">
                                    <option value="" disabled>Select range</option>
                                    <option value="low2high">Low to high</option>
                                    <option value="high2low">High to low</option>
                                    <option value="customrange">Custom range</option>
                                </select>
                            </div>
                            <div class="form-group input-group-sm mt-1" v-if="range=='customrange'">
                                <div class="row">
                                    <div class="col">
                                        <input type="number" name="from" id="from" class="form-control" placeholder="From">
                                    </div>
                                    <div class="col-auto text-center">-</div>
                                    <div class="col">
                                        <input type="number" name="to" id="to" class="form-control" placeholder="To">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group input-group-sm">
                                <label for="sort">Sort</label>
                                <select class="form-control" id="sort">
                                    <option value="newest">Newest first</option>
                                    <option value="oldest">Oldest first</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="reset" class="btn btn-secondary" @click="reset">Reset</button>
                            <button type="submit" class="btn btn-primary" style="border-radius: 5px">Filter</button>
                        </div>
                        </form>
                            
                        </div>
                    </div>
                    </div>

                    <!-- Posts -->
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" v-for="post in posts" :key="post.id">
                            <Post :data="post"/>
                        </div>
                        <Pagination class="mx-auto" />
                    </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    name: 'HomePage',
    data(){
        return{
            range: '',
            selectedDistrict: '',
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
            posts:[
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
                    image: 'https://media.jumiadeals.com/tz_live/867fa4353e5e94d31ce1e6c.mobile-gallery-large.jpg',
                    title: 'Iphone 5s',
                    location: 'Colombo',
                    time: 1,
                    price: '35,000',
                    views: 25
                },
                {
                    id: 3,
                    image: 'https://media.jumiadeals.com/tz_live/867fa4353e5e94d31ce1e6c.mobile-gallery-large.jpg',
                    title: 'Iphone 5s',
                    location: 'Colombo',
                    time: 1,
                    price: '35,000',
                    views: 25
                },
                {
                    id: 4,
                    image: 'https://cdn.vox-cdn.com/thumbor/knNvJjFeXpjJpvt-2WpUt47lHps=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/12802749/DSC_8696-1024.1419979889.jpg',
                    title: 'Iphone 5',
                    location: 'Gampaha',
                    time: 1.5,
                    price: '30,000',
                    views: 20
                },
                {
                    id: 5,
                    image: 'https://cdn.vox-cdn.com/thumbor/knNvJjFeXpjJpvt-2WpUt47lHps=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/12802749/DSC_8696-1024.1419979889.jpg',
                    title: 'Iphone 5',
                    location: 'Gampaha',
                    time: 1.5,
                    price: '30,000',
                    views: 20
                },
                {
                    id: 6,
                    image: 'https://media.jumiadeals.com/tz_live/867fa4353e5e94d31ce1e6c.mobile-gallery-large.jpg',
                    title: 'Iphone 5s',
                    location: 'Colombo',
                    time: 1,
                    price: '35,000',
                    views: 25
                },
                {
                    id: 7,
                    image: 'https://cdn.vox-cdn.com/thumbor/knNvJjFeXpjJpvt-2WpUt47lHps=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/12802749/DSC_8696-1024.1419979889.jpg',
                    title: 'Iphone 5',
                    location: 'Gampaha',
                    time: 1.5,
                    price: '30,000',
                    views: 20
                },
                {
                    id: 8,
                    image: 'https://cdn.vox-cdn.com/thumbor/knNvJjFeXpjJpvt-2WpUt47lHps=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/12802749/DSC_8696-1024.1419979889.jpg',
                    title: 'Iphone 5',
                    location: 'Gampaha',
                    time: 1.5,
                    price: '30,000',
                    views: 20
                },
            ]
        }
    },
    methods:{
        setCities(){
            var e = document.getElementById("district");
            var index = e.options[e.selectedIndex].index;
            this.selectedIndex = index-1
        },
        setCitiesm(){
            var e = document.getElementById("districtm");
            var index = e.options[e.selectedIndex].index;
            this.selectedIndex = index-1
        },
        reset(){
            this.range=''
            this.selectedDistrict=''
            this.selectedIndex=''
        }
    }
}
</script>

<style scoped>
/* Global css */
@import url("../assets/css/styles.css");


/* Page css */
.nav-list{
    list-style: none;
    font-size: 1.4rem;
}
li{
    margin-bottom: 0.5rem;
}
.popular{
    background: black;
    color: white;
    padding: 0.2rem 0.7rem;
    margin-right: 0.7rem;
    border-radius: 10px;
    cursor: pointer;
}

/* Responsive css */
@media only screen and (max-width:1200px){}

@media only screen and (max-width:900px){}

@media only screen and (max-width:764px){}

@media only screen and (max-width:500px){
    .nav-list{
        display: none;
    }
}
@media only screen and (max-width:364px){
    .nav-list{
        display: none;
    }
    
}
</style>