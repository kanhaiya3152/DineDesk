import { collection, doc, setDoc } from "firebase/firestore";
import   restaurantData   from "../store/restaurants";
import { db } from "./firebaseConfig";

const restaurants = restaurantData.slots;
const uploadData = async () => {
  try {
     
    for (let i = 0; i < restaurants.length; i++) {
      const restaurant = restaurants[i];
      const docRef = doc(collection(db, "slots"), `slot_${i + 1}`);
      await setDoc(docRef, restaurant);
    }
    console.log("Data uploaded");
  } catch (e) {
    console.log("Error uploading data", e);
  }
};

export default uploadData;