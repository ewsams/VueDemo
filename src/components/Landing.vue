<template>
    <div class="container">
        <h1>
            {{msg}}
        </h1>
        <div class="row justify-content-center">
            <div class="col-md-6 col-sm-12 col-xs-12 mt-2">
                <img src="@\assets\Vue.png" alt="vueImg">
                <img src="@\assets\Firebase.png" alt="firebaseImg">
                <img src="@\assets\Bootstrap.png" alt="bootstrapImg">
            </div> 
        </div>   
    </div>
    <PotentialClients/>
</template>


<script>
import PotentialClients from '@/components/PotentialClients.vue'

export default {
    name: 'Landing',
    components:{
        PotentialClients
    },
    props: {
       msg:String
   }
}
</script>

<style scoped>
img{
    width: 80px;
    height: 80px;
}
h1{
    font-family: 'Dela Gothic One';
}
</style>