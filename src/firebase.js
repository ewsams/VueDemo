import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
    apiKey: "AIzaSyByuHNI_qMGANEa94pkwHUVXCeYMYpOcSg",
    authDomain: "vuedemoews.firebaseapp.com",
    projectId: "vuedemoews",
    storageBucket: "vuedemoews.appspot.com",
    messagingSenderId: "118762557094",
    appId: "1:118762557094:web:ffd1799841c5c300336e67",
    measurementId: "G-JVLQR356YS"
  };

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}