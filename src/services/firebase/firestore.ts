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
