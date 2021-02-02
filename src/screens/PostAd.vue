<template>
    <section v-if="post.category==''">
        <div class="container pt-3">
            <h1 class="text-center">Step 1/2</h1>
            <h5 class="text-center mb-5 text-secondary">Select your category</h5>
            <div class="row">
                <div class="col-sm-6">
                    <div class="category text-center mx-auto" @click="post.category='devices'">
                        <i class="fas fa-mobile-alt"></i>
                        <h2>Devices</h2>
                    </div>
                </div>
                <div class="col-sm-6 mx-auto mt-3 mt-sm-0">
                    <div class="category text-center mx-auto" @click="post.category='accessories'">
                        <i class="fas fa-headphones-alt"></i>
                        <h2>Accessories</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-else>
        <div class="container pt-3">
            <form>
                <h1 class="text-center">Step 2/2</h1>
                <h5 class="text-center mb-5 text-secondary">Your details</h5>
                <div class="row">
                    <div class="col-md-5">
                        <label for="brand">Brand</label>
                        <div class="input-group mb-3">
                           <select class="form-control" id="sort" required>
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
                    </div>
                    <div class="col-md-5">
                        <label for="model">Modal name</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="model" placeholder="model" aria-describedby="basic-addon3" required>
                        </div>
                    </div>
                    <div class="w-100"></div>
                    <div class="col-md-5">
                        <label for="condition">Condition</label>
                        <div class="input-group mb-3">
                            <select class="form-control" id="sort" required>
                                <option value="">Select condition</option>
                                <option value="new">Brand new</option>
                                <option value="used">Used</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <label for="price">Price</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="price" placeholder="Price" aria-describedby="basic-addon3" required>
                        </div>
                    </div>
                    <div class="w-100"></div>
                    <div class="col-md-7">
                        <label for="model">Description</label>
                        <div class="input-group mb-3">
                            <textarea name="description" id="description" cols="30" rows="13" class="form-control" required></textarea>
                        </div>
                    </div>
                    <div class="w-100"></div>
                    <div class="col-md-5">
                        <label for="district">District</label>
                        <div class="input-group mb-3">
                            <select name="district" id="district" class="form-control" @change="setCities" required>
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
                            <select class="form-control" required>
                                <option value="">Select city</option>
                                <option value="" v-for="city in cities[selectedIndex]" :key="city">{{city}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="w-100"></div>
                    <div class="col-md-5">
                        <label for="phone1">Phone 1</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="phone1" placeholder="Phone 1" aria-describedby="basic-addon3" required>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <label for="phone2">Phone 2</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="phone2" placeholder="Phone 2" aria-describedby="basic-addon3" required>
                        </div>
                    </div>
                    <div class="w-100"></div>
                    <div class="col-md-5">
                        <label for="price mb-2">Options</label>
                        <div class="form-group custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="o1" style="cursor:pointer;">
                            <label class="custom-control-label" for="o1" style="cursor:pointer;">Warrenty Remaining / Include</label>
                        </div>
                        <div class="form-group custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="o2" style="cursor:pointer;">
                            <label class="custom-control-label" for="o2" style="cursor:pointer;">Exchange possibility</label>
                        </div>
                    </div>
                    <div class="w-100"></div>
                    <div class="col-sm-12 col-md-8 col-lg-6">
                        <label for="phone2">Photos</label>
                        <div class="input-group justify-content-around ml-0">
                            <div class="col-md-auto photo-in" id="pr1" @click="click('p1')" v-bind:style="{ 'background-image': 'url(' + imgs.i1 + ')' }"><span v-if="!imgs.i1">+</span></div>
                            <div class="col-md-auto photo-in" id="pr2" @click="click('p2')" v-bind:style="{ 'background-image': 'url(' + imgs.i2 + ')' }"><span v-if="!imgs.i2">+</span></div>
                            <div class="w-100 d-sm-none"></div>
                            <div class="col-md-auto photo-in" id="pr3" @click="click('p3')" v-bind:style="{ 'background-image': 'url(' + imgs.i3 + ')' }"><span v-if="!imgs.i3">+</span></div>
                            <div class="col-md-auto photo-in" id="pr4" @click="click('p4')" v-bind:style="{ 'background-image': 'url(' + imgs.i4 + ')' }"><span v-if="!imgs.i4">+</span></div>
                            <input type="file" name="p1" id="p1" class="d-none" @change="getURL1" accept="image/*">
                            <input type="file" name="p2" id="p2" class="d-none" @change="getURL2" accept="image/*">
                            <input type="file" name="p3" id="p3" class="d-none" @change="getURL3" accept="image/*">
                            <input type="file" name="p4" id="p4" class="d-none" @change="getURL4" accept="image/*">
                        </div>
                    </div>
                    <div class="col-md-6"></div>
                </div>
                <button class="btn btn-secondary mt-3" @click="goBack"><i class="fas fa-arrow-left"></i>&nbsp;<strong>Back</strong></button>
                <button type="submit" class="btn btn-primary mt-3 ml-3"><strong>Submit</strong></button>
            </form>
        </div>
    </section>

</template>

<script>

export default {
    name: 'Post',
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
            
            imgs:{
                i1:'',
                i2:'',
                i3:'',
                i4:''
            },
            post:{
                category: ''
            }
        }
    },
    methods:{
        setCities(){
            var e = document.getElementById("district");
            var index = e.options[e.selectedIndex].index;
            this.selectedIndex = index-1
        },

        click(_id){
            document.getElementById(_id).click();
        },
        goBack(){
            this.post.category='';
            this.imgs.i1='';
            this.imgs.i2='';
            this.imgs.i3='';
            this.imgs.i4='';
        },
        getURL1(e) {
            const file = e.target.files[0];
            this.imgs.i1 = URL.createObjectURL(file);
        },
        getURL2(e) {
            const file = e.target.files[0];
            this.imgs.i2 = URL.createObjectURL(file);
        },
        getURL3(e) {
            const file = e.target.files[0];
            this.imgs.i3 = URL.createObjectURL(file);
        },
        getURL4(e) {
            const file = e.target.files[0];
            this.imgs.i4 = URL.createObjectURL(file);
        }
    }
}
</script>

<style scoped>
/* Global css */
@import url("../assets/css/styles.css");

.category{
    border: solid 1px black;
    background: rgba(245, 245, 245, 0.432);
    border-radius: 20px;
    cursor: pointer;
    width: 30rem;
    height: fit-content;
    font-size: 17rem;
    transition: 0.1s;
}
.category:hover{
    box-shadow: 2px 2px 8px #747474;
}

label{
    margin-bottom: 0 !important;
    font-weight: 600;
    font-size: 0.9rem;
}

.photo-in{
    width: 130px;
    height: 100px;
    background: #eee;
    background-size: cover;
    background-clip: border-box;
    background-position: center;
    border: solid 2px rgb(150, 150, 150);
    color: rgb(150, 150, 150);
    font-size: 3rem;
    display: grid;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
}


/* Responsive css */
@media only screen and (max-width:1000px){
    .category{
        font-size: 12rem;
        width: 20rem;
    }
}
@media only screen and (max-width:768px){
    .category{
        font-size: 10rem;
        width: 17rem;
    }
}
@media only screen and (max-width:450px){
    .category{
        font-size: 14rem;
        width: 100%;
    }
}
</style>