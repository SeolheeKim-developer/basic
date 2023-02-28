import React, { useEffect, useState } from "react";

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥Took the data from network");
        setProducts(data);
      })
      .catch((e) => setError("error!"))
      .finally(() => setLoading(false));
    return () => {
      console.log("clean");
    };
  }, [salesOnly]);

  return [loading, error, products];
}
