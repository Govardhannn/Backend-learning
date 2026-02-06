import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/products")
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleBuyNow = () => {
    alert("Proceeding to payment 🚀");
  };


  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-semibold">
        Loading product...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-sm">
      
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-xl"
        />

    
        <h1 className="text-2xl font-bold mt-4">{product.title}</h1>

        <p className="text-gray-600 mt-2">{product.desc}</p>

        <h2 className="text-3xl font-semibold text-green-600 mt-4">
          ₹ {product.price?.amount}
        </h2>

        <p className="text-sm text-gray-500">{product.category}</p>

       
        <button
          onClick={handleBuyNow}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
