import { initializeApp } from 'firebase/app'
import { getFirestore, CollectionReference, collection, DocumentData } from 'firebase/firestore'


// Init the firebase app
export const firebaseApp = initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "topytour.firebaseapp.com",
    projectId: "topytour",
    storageBucket: "topytour.appspot.com",
    messagingSenderId: "760777375695",
    appId: "1:760777375695:web:aed72c65abebc67943dcba",
    measurementId: "G-08CDPYVBTV"
})

// const analytics = getAnalytics(app);
export const firestore = getFirestore()

const createCollection = <T = DocumentData>(collectionName: string) => {
    return collection(firestore, collectionName) as CollectionReference<T>
  }

// Import all your model types
import { Products, Order } from '../types/index'

// export all your collections
export const productsCol = createCollection<Products>('products')
export const ordersCol = createCollection<Order>('orders')