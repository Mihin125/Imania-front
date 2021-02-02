<template>
    <div class="post">
        <div class="row">
            <div v-if="edit" class="dropright" >
                <!-- <svg class="more"   width="15px" height="15px"></svg> -->
                <i class="fas fa-ellipsis-v" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Promote</a>
                    <a class="dropdown-item" href="#" data-toggle="modal" data-target="#deletepost">Delete</a>
                </div>
            </div>
            <div class="col-auto col-sm-auto col-md-auto col-lg-auto col-xl-auto">
                <img :src="data.image" alt="post image" class="photo">
            </div>
            <div class="col col-sm col-md col-lg col-xl" style="padding-left: 0;">
                <div class="col-md-12 title" style="padding-left: 0;">
                    <router-link :to="{ path: '/overview/'+data.id+'/'+data.id}" style="color:black;"><span><strong>{{ data.title }}</strong></span></router-link>
                </div>
                <div class="col-md-12 subtitle" style="padding-left: 0;">
                    <span>{{ data.location }} | {{ data.time+" hour" }}</span>
                </div>
                <div class="col-md-12 price text-primary" style="padding-left: 0;">
                    <span><b>Rs {{ data.price }}</b></span>
                </div>
                <div class="views">
                    <span><i class="far fa-eye"></i> {{ data.views }}</span>
                </div>
            </div>
        </div>
        <!-- Button trigger modal -->
        <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#deletepost">
            <strong>Launch demo modal</strong>
        </button> -->

        <!-- Modal -->
        <div class="modal" id="deletepost" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Delete ad</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Do you want to delete this ad?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"><strong>Close</strong></button>
                        <button type="button" class="btn btn-danger"><strong>Delete</strong></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Post',
    props:{
        data: {},
        edit: Boolean
    }
}
</script>

<style scoped>
/* Global css */

/* page css */
.post{
    position: relative;
    border: solid rgba(128, 128, 128, 0.4) 1px;
    border-radius: 5px;
    width: 100%;
    height: fit-content;
    padding: 0.5rem;
    margin: 0;
    margin-bottom: 1rem;
    transition: 0.2s;
}
.post:hover{
    box-shadow: 2px 2px 8px #747474;
}
.photo{
    width: 10rem;
    height:8rem;
    object-fit:cover;
}
.views{
    text-align: end;
    padding-right: 0.1rem;
    margin-top: calc(2.3rem - 15px) !important;
}
.title span{
    font-size: 1.2rem;
}
.subtitle span{
    font-size: 1rem;
}
.price span{
    font-size: 1rem;
}
.views span{
    font-size: 1rem;
}
.fa-ellipsis-v{
    position: absolute;
    z-index: 1;
    background-size: cover;
    cursor: pointer;
    left:99%;
    transform: translateX(-99%);
}

@media only screen and (max-width:1200px){

}
@media only screen and (max-width:992px){
    .post{
        width: 100%;
    }
}

@media only screen and (max-width:768px){
    .post{
        margin-bottom: 0.5rem;
    }
}

@media only screen and (max-width:500px){
    .photo{
        width:9rem;
        height:7rem;
    }
    .views{
        margin-top: calc(1.6rem - 15px) !important;
    }
    .views span{
        font-size: 0.9rem;
    }
    .title span{
        font-size: 1.1rem ;
    }
    .subtitle span{
        font-size: 0.9rem ;
    }
    .price span{
        font-size: 0.9rem;
    }
}
</style>