<template>
  <div class="card mt-4 table-responsive">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
           <th scope="col">Prefered Contact Time</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, first, email, phone, amSelected } in users" :key="id">
          <td>{{ first }}</td>
          <td>{{ email }}</td>
          <td>{{ phone }}</td>
          <td>{{amSelected ? 'Am': 'Pm'}} </td>
          <td>
            <button class="btn btn-danger btn-sm" @click="deleteUser(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadUsers, deleteUser } from '@/firebase'
export default {
    name:'PotentialClients',
    setup() {
    const users = useLoadUsers()
    return { users, deleteUser }
    }
}
</script>