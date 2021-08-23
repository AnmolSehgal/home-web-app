import firebase from "firebase/app";
import "firebase/firestore";

export async function fetchData() {
  const ref = await firebase.firestore().collection("products");
  const data = await ref
    .get()
    .then((value) => value.docs.map((value) => value.data()));
  return data;
}

export async function addToWishList(productId: string) {
  const db = await firebase.firestore();
  const docRef = await db.collection("products").doc(productId);
  const ref = await db
    .collection("users")
    .doc(localStorage.getItem("uid") as string);
  const isExist = (await ref.get()).exists;
  if (!isExist) {
    ref.set({ wishlist: [docRef] });
  } else
    await ref.update({
      wishlist: firebase.firestore.FieldValue.arrayUnion(docRef),
    });
}

export async function fetchWishList() {
  const db = await firebase.firestore();
  const ref = await db
    .collection("users")
    .doc(localStorage.getItem("uid") as string)
    .get();
  if (ref.exists) {
    const data = await Promise.all(
      (ref.data() as any).wishlist.map(async (value: any) => {
        const item = await value.get();
        return item.data();
      })
    );
    console.log(data);
    return data;
  } else return [];
}

export async function removeWishListItem(productId: string) {
  const db = await firebase.firestore();
  const docRef = await db.collection("products").doc(productId);
  await db
    .collection("users")
    .doc(localStorage.getItem("uid") as string)
    .update({
      wishlist: firebase.firestore.FieldValue.arrayRemove(docRef),
    });
}

export async function addItemToCart(productId: string, quantity: number) {
  const db = await firebase.firestore();
  const ref = await db
    .collection("users")
    .doc(localStorage.getItem("uid") as string);
  ref.collection("cart").doc(productId).set({ productId, quantity });
}

export async function removeItemFromCart(productId: string) {
  const db = await firebase.firestore();
  await db
    .collection("users")
    .doc(localStorage.getItem("uid") as string)
    .collection("cart")
    .doc(productId)
    .delete();
}

export async function fetchCart() {
  const db = await firebase.firestore();

  const ref = await db
    .collection("users")
    .doc(localStorage.getItem("uid") as string);
  const userRef = await ref.get();
  if (userRef.exists) {
    const userData = await ref.collection("cart").get();
    const data = await Promise.all(
      await userData.docs.map(async (value) => {
        const docRef = await db
          .collection("products")
          .doc(value.data().productId)
          .get();
        return { ...docRef.data(), quantity: value.data().quantity };
      })
    );
    return data;
  } else return [];
}
