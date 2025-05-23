import { useEffect, useState, createContext, useContext } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

const CostContext = createContext();

export function CostProvider({ children }) {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const itemsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setItems(itemsData);
  };

  const addItem = async (name, cost) => {
    await addDoc(collection(db, "items"), { name, cost });
    fetchItems();
  };

  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "items", id));
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <CostContext.Provider value={{ items, addItem, deleteItem }}>
      {children}
    </CostContext.Provider>
  );
}

export const useCostContext = () => useContext(CostContext);
