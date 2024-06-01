"use client";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: { rate: number }; // Adjusted to match the API structure
  count: number;
  image: string; // Fake Store API uses 'image' instead of 'images'
}

export default function Hello() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        let result = await response.json();
        console.log(result); // Ensure the result is correct
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {/* <Exampleclient /> */}
      {/* <Exampleserver /> */}
      <div className="text-center my-4 text-2xl font-bold">Products List</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.map((product) => (
          <div
            key={product.id}
            className="w-full shadow-lg rounded-2xl p-4 flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              className="w-48 h-48  rounded-xl mt-2 mb-3"
            />
            <p className="text-sm mb-2">{product.description.length.toFixed(8)}</p>
            <p className="text-lg font-semibold mb-2">${product.price}</p>
            <p className="text-sm mb-2">Rating: {product.rating.rate}</p>
            <button className="bg-green-500 text-white p-2 rounded mt-4">
              Buy now
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
