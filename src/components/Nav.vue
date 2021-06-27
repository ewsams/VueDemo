<template>
    <nav class="navbar navbar-light bg-none d-flex">
        <span>
             <router-link to="/">
                <img src="@\assets\EWS.svg" width="100" height="100" alt="logo">
            </router-link>
        </span>
           
        <span>
                 <router-link to="create-user">
                <img  src="@\assets\FirebaseLink.svg" width="100" height="100" alt="logo">
            </router-link>  
        </span>        
    </nav>
</template>

<script>
export default {
    name: 'Nav',
}
</script>

<style scoped>

</style>