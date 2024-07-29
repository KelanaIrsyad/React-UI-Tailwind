import { MdOutlineStar } from "react-icons/md";
import { IoBagCheckSharp } from "react-icons/io5";
import Product1 from "../../assets/product/p-1.jpg";
import Product2 from "../../assets/product/p-2.jpg";
import Product3 from "../../assets/product/p-3.jpg";
import Product4 from "../../assets/product/p-4.jpg";
import Product5 from "../../assets/product/p-5.jpg";
import Product7 from "../../assets/product/p-7.jpg";
import Product9 from "../../assets/product/p-9.jpg";

const ProductData = [
  {
    id: 1,
    img: Product1,
    name: "Product 1",
    price: 999_999,
    discount: 1_999_999,
    stock: 70, 
    rating: 4.5,
    sold: "1rb+",
  },
  {
    id: 2,
    img: Product2,
    name: "Product 2", // Add more details for each product
    price: 999_999,
    discount: 1_999_999,
    stock: 50,
    rating: 4.5,
    sold: "1rb+",
  },
  {
    id: 3,
    img: Product3,
    name: "Product 3", // Add more details for each product
    price: 999_999,
    discount: 1_999_999,
    stock: 50,
    rating: 4.5,
    sold: "1rb+",
  },
  {
    id: 4,
    img: Product4,
    name: "Product 4", // Add more details for each product
    price: 999_999,
    discount: 1_999_999,
    stock: 50,
    rating: 4.5,
    sold: "1rb+",
  },
  {
    id: 5,
    img: Product5,
    name: "Product 5", // Add more details for each product
    price: 999_999,
    discount: 1_999_999,
    stock: 50,
    rating: 4.5,
    sold: "1rb+",
  },
  {
    id: 6,
    img: Product7,
    name: "Product 6", // Add more details for each product
    price: 999_999,
    discount: 1_999_999,
    stock: 50,
    rating: 4.5,
    sold: "1rb+",
  },
  {
    id: 7,
    img: Product9,
    name: "Product 7", // Add more details for each product
    price: 999_999,
    discount: 1_999_999,
    stock: 100,
    rating: 4.5,
    sold: "1rb+",
  },
  {
    id: 8,
    img: Product9,
    name: "Product 8", // Add more details for each product
    price: 999_999,
    discount: 1_999_999,
    stock: 100,
    rating: 4.5,
    sold: "1rb+",
  },
];

function Product() {
  return (
    <div className="mt-10">
        <h1 className="text-2xl pl-20 heading font-bold flex items-center">Our Product</h1>
      <div className="w-full min-h-screen gap-4 flex-wrap flex justify-space-around items-center pl-7 pt-5">
        {ProductData.map((product) => (
          <div
            key={product.id}
            className="w-41 p-1 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4 lg:mt-0"
          >
            <img
              src={product.img}
              alt={product.name}
              className="h-40 object-cover rounded-xl object-center ml-3"
            />
            <div className="p-2">
              <h2 className="font-bold text-lg mb-2">{product.name}</h2>
              <div className="flex items-center">
                <span className="text-xl font-semibold">
                  Rp. {product.price.toLocaleString("id-ID")}
                </span>
                {product.discount && ( // Conditionally render discount price
                  <span className="text-sm line-through opacity-75 ml-2">
                    Rp. {product.discount.toLocaleString("id-ID")}
                  </span>
                )}
              </div>
              <div className="flex items-center mt-2 gap-1">
                <IoBagCheckSharp className="text-violet-900 h-5 w-5" />
                <span className="text-slate-500 mt-1">Jakarta Utara</span>
              </div>
              <div className="flex items-center mt-2 gap-1">
                <MdOutlineStar className="text-yellow-500 h-5 w-5 mr-1" />
                <span className="text-slate-400">
                  {product.rating} | {product.sold} terjual
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
