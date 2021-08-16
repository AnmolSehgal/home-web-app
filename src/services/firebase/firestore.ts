import firebase from "firebase/app";
import "firebase/firestore";

export async function fetchData() {
  var ref = await firebase.firestore().collection("products");
  const dataCheck = await ref
    .get()
    .then((value) => value.docs.map((value) => value.data()));
  return dataCheck;
}
