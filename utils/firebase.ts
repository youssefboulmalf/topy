import { initializeApp } from 'firebase/app'
import { getFirestore, CollectionReference, collection, DocumentData } from 'firebase/firestore'
import { getStorage } from "firebase/storage";


// Init the firebase app
export const firebaseApp = initializeApp({
    apiKey: process.env.FB_API_KEY,
    authDomain: "topytours-736f3.firebaseapp.com",
    projectId: "topytours-736f3",
    storageBucket: "topytours-736f3.appspot.com",
    messagingSenderId: "139196612827",
    appId: "1:139196612827:web:1344eafc0f87338b4b8cfe"
})

// const analytics = getAnalytics(app);
export const firestore = getFirestore()
export const storage = getStorage();

const createCollection = <T = DocumentData>(collectionName: string) => {
    return collection(firestore, collectionName) as CollectionReference<T>
  }

// Import all your model types
import { Products, Order } from '../types/index'

// export all your collections
export const productsCol = createCollection<Products>('products')
export const ordersCol = createCollection<Order>('orders')