<template>
    <div class="container-fluid px-3 px-sm-3 px-md-3">
        <div class="row mt-4 mx-md-3 mx-lg-3">
            <div class="col-lg-8">
                <h1 class="caption mx-1 mx-sm-0 mb-3">Iphone 5s 64GB</h1>
                <!--Carousel Wrapper-->
                <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails bg-dark mr-lg-5" data-ride="carousel">
                    <!--Slides-->
                    <div class="carousel-inner bg-dark" role="listbox">
                        <div v-for="(img, index) in images" :key="index" class="carousel-item" v-bind:class="{ 'active': index==0 }">
                            <img class="d-block w-100 mx-auto" :src="img" alt="Slide">
                        </div>
                    </div>
                    <!--/.Slides-->
                    <!--Controls-->
                    <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    <!--/.Controls-->
                    <ol class="carousel-indicators">
                        <li v-for="(img, index) in images" :key="index" data-target="#carousel-thumb" data-slide-to="1" v-bind:class="{ 'active': index==0 }">
                        <img :src="img" width="100">
                        </li>
                    </ol>
                </div>
                <!--/.Carousel Wrapper-->
                <h1 class="mt-4 caption mx-1 mx-sm-0 text-primary">Rs 25,000</h1>
                <hr class="mt-3">
                <div class="row details mt-3 mb-3 mx-1 mx-sm-0">
                    <div class="col-auto ml-0 ml-sm-2 pr-2 pr-lg-5">
                        <h3 class=""><i class="fas fa-map-marker-alt"></i> Kalutara, Mathugama</h3>
                    </div>
                    <div class="col-auto pr-2 pr-lg-5">
                        <h3><i class="far fa-calendar-alt"></i> 19 oct 10:20 am</h3>
                    </div>
                    <div class="col-auto">
                        <h3><i class="fas fa-user"></i> by Supun</h3>
                    </div>
                </div>
                <hr>
                <div class="row mt-5">
                    <div class="col-12"><h2 class="caption-s mx-1 mx-sm-0">Desciption</h2></div>
                    <div class="col-12 mx-1 mx-sm-0 mt-2">
                        <p class="description">
                            Hello this is the description. Hello this is the description. Hello this is the description. Hello this is the description. Hello this is the description. 
                            Hello this is the description. Hello this is the description. Hello this is the description. Hello this is the description. Hello this is the description. 
                            Hello this is the description. Hello this is the description. Hello this is the description. Hello this is the description. Hello this is the description. 
                            Hello this is the description. Hello this is the description. Hello this is the description. Hello this is the description. Hello this is the description. 
                        </p>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-12">
                        <h2 class="caption-s mx-1 mx-sm-0">Contact us</h2>
                        <button type="button" class="btn btn-light">Report Ad</button>
                    </div>
                    <div class="col-12 mx-1 mx-sm-0 mt-3 pl-3">
                        <ul>
                            <li class="mb-1"><h5 class="phones"><i class="fas fa-phone-alt"></i> +94563245896</h5></li>
                            <li class="mb-1"><h5 class="phones"><i class="fas fa-phone-alt"></i> +64789658213</h5></li>
                        </ul>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-12 text-center">
                        <hr>
                        <h3 class="caption-s mt-3 mx-auto">Share this ad</h3>
                        <div class="d-flex justify-content-around mt-2 mb-3 share-panel mx-auto">
                            <a href="#facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="#instagram"><i class="fab fa-instagram"></i></a>
                            <a href="#whatsapp"><i class="fab fa-whatsapp"></i></a>
                            <a href="#whatsapp"><i class="far fa-bookmark"></i></a>
                        </div>
                        <hr>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 px-0 pl-sm-4 mt-5 mt-lg-0">
                <h3 class="text-center mb-3">Related Ads</h3>
                    <Post v-for="post in posts" :key="post.id" :data="post"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OverView',
    data(){
        return{
            id: 1,
            user: 'user',
            images:[
                'https://wallpaperaccess.com/full/109666.jpg',
                'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png',
                'https://krbdigital.com.ng/wp-content/uploads/2020/09/109672.jpg',
                'https://images4.alphacoders.com/810/thumb-1920-81006.jpg',
                'https://i0.wp.com/cdnssl.ubergizmo.com/wp-content/uploads/2020/04/Apple_new-iphone-se-white_04152020.jpg',
                'http://www.pngmart.com/files/13/iPhone-12-PNG-File.png'
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
            ]
        }
    },
    mounted(){
        window.scrollTo(0,0)
    },
    computed: {
        userd () {
            return this.$route.params.user
        },
        idd () {
            return this.$route.params.id
        }
    },
    created() {
        this.user = this.userd;
        this.id = this.idd;
    }
}
</script>

<style scoped>
    /* Global css */

    /* local css */
    *{margin: 0; padding: 0;}
    .caption{
        font-size: 1.5rem;
    }
    .caption-s{
        font-size: 1.3rem;
    }
    .carousel-item{
        width: auto !important;
        height: 35vw;
    }
    .carousel-item img{
        height: 100% !important;
        width: auto !important;
    }
    .details h3{
        font-size: 0.9rem;
    }
    ul{
        list-style: none;
    }
    .phones{
        font-size: 1.1rem;
    }
    .share-panel{
        width: 12rem;
    }

    .fa-facebook-f, .fa-instagram, .fa-whatsapp, .fa-bookmark{
        font-size: 1.7rem;
        color: white !important;
        background: black;
        clip-path: circle(1.3rem);
        width: 40px;
        height: 40px;
        display: grid;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 991px){
        .carousel-item{
            height: 52.5vw;
        }
    }
    @media only screen and (max-width: 500px){
        .details h3{
            font-size: 0.8rem;
        }
    }
</style>