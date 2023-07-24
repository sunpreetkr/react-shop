import firestore from "../firebase";

import {
  getDocs,
  doc,
  getDoc,
	setDoc
} from 'firebase/firestore';


export const getAllCart = async () => {
  const collectionRef = firestore.collection("cart");
  const querySnapshot = await getDocs(collectionRef);
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}));
  return data.filter((item) => !("first" in item));
}

export const addOneToCart = async (current) => {
  const collectionRef = firestore.collection("cart");
  const id = current.product.id + 
              (current.size? current.size : "") ;

  const available = await reduceQuantity(current.product.id);

  if(available) {

    const docRef = doc(collectionRef, id)
    let cartItem = (await getDoc(docRef)).data();

    cartItem ? (cartItem = {
      product: current.product, 
      size: current.size,
      quantity: cartItem.quantity + 1,
    }) : (cartItem = {
      product: current.product, 
      size: current.size,
      quantity: 1,
    });

    await setDoc(doc(collectionRef, id), cartItem)

  } else {
    console.log("Not available !")
  }
}


export const getProducts = async () => {
	const collectionRef = firestore.collection("products");
	const querySnapshot = await getDocs(collectionRef);
	return querySnapshot.docs.map(doc =>({id:doc.id, ...doc.data()}))
}

export const getProductById = async (productId) => {
  const collectionRef = firestore.collection("products");
	const docRef = collectionRef.doc(productId);
  const snapshot = await getDoc((docRef));
  if(!snapshot.exists()) {
    throw new Error("Product was not found.")
  }

  return {id: snapshot.id, ...snapshot.data()};
}

export const favProduct = async (productId, boolean) => {
  const productRef = firestore.collection('products').doc(productId);
  await productRef.update({ favourite: boolean });
};


export const reduceQuantity = async (productId) => {
  const collectionRef = firestore.collection("products");
  const docRef = doc(collectionRef, productId)
  const item = (await getDoc(docRef)).data();
  if(item.quantity > 0) {
    item.quantity -= 1
    await setDoc(docRef, { quantity: item.quantity }, { merge: true });
    return true;
  } else {
    return false
  }
}

