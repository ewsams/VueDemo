<template>
    <div class="container">
  <form @submit.prevent="onSubmit">
    <h2>Contact Us</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="first">First Name</label>
          <input  v-model="form.first" type="text" class="form-control" placeholder="first name" id="first">
        </div>
      </div>
      <!--  col-md-6   -->

      <div class="col-md-6">
        <div class="form-group">
          <label for="last">Last Name</label>
          <input  v-model="form.last" type="text" class="form-control" placeholder="last name" id="last">
        </div>
      </div>
      <!--  col-md-6   -->
    </div>


    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="company">Company</label>
          <input  v-model="form.company" type="text" class="form-control" placeholder="company" id="company">
        </div>


      </div>
      <!--  col-md-6   -->

      <div class="col-md-6">

        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input  v-model="form.phone" type="tel" class="form-control" id="phone" placeholder="phone">
        </div>
      </div>
      <!--  col-md-6   -->
    </div>
    <!--  row   -->


    <div class="row">
      <div class="col-md-6">

        <div class="form-group">
          <label for="email">Email Address</label>
          <input  v-model="form.email" type="email" class="form-control" id="email" placeholder="email">
        </div>
      </div>
      <!--  col-md-6   -->

      <div class="col-md-6">
        <div class="form-group">
          <label for="url">Your Website <small>Please include http://</small></label>
          <input  v-model="form.url" type="url" class="form-control" id="url" placeholder="url">
        </div>

      </div>
      <!--  col-md-6   -->
    </div>
    <!--  row   -->

    <div class="mt-3">
    <label for="contact-preference">When is the best time of day to reach you?</label>
    <div class="radio">
      <label>
        <input  v-model="form.amSelected" type="radio" name="contact-preference" id="contact-preference" value="am" checked>Morning
      </label>
    </div>
    <div class="radio">
      <label>
        <input v-model="form.pmSelected" type="radio" name="contact-preference" id="contact-preference" value="pm" checked>Evening
      </label>
    </div>

    <label class="mt-2" for="newsletter">Would you like to recieve our email newsletter?</label>
    <div class="checkbox">

      <label>
        <input v-model="form.newsSelected" type="checkbox" value="Sure!" id="newsletter"> Sure!
      </label>
    </div>


    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</div>
</template>

<script>
    import { createUser } from '@/firebase'
    import { reactive } from 'vue'
    
    export default {
        name: 'CreateUser',
  setup() {
    const form = reactive({
        first:'',
        last:'',
        company:'', 
        phone:'',
        email: '',
        url:'', 
        amSelected:false,
        pmSelected:false,
        newsSelected:false 
        });
    const onSubmit = async () => {
      await createUser({ ...form })
    form.first;
    form.last;
    form.company;
    form.phone;
    form.email;
    form.url;
    form.amSelected;
    form.pmSelected;
    form.newsSelected;
    }
    return { form, onSubmit }
  }
};
</script>

<style scoped>
h2,label{
     font-family: 'Dela Gothic One';
}
</style>