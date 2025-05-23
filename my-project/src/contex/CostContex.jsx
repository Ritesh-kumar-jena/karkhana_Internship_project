import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const CostContext = createContext();

export function CostProvider({ children }) {
  const [items, setItems] = useState([]);
  const [costs, setCosts] = useState([]);

  const fetchData = async () => {
    const itemsRes = await axios.get('/api/items');
    const costsRes = await axios.get('/api/costs');
    setItems(itemsRes.data);
    setCosts(costsRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CostContext.Provider value={{ items, costs, setItems, setCosts, fetchData }}>
      {children}
    </CostContext.Provider>
  );
}

export const useCostContext = () => useContext(CostContext);
