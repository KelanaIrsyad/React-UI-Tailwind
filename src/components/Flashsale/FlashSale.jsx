import { IoIosFlash } from "react-icons/io";
import Product1 from "../../assets/product/p-1.jpg";
import Product2 from "../../assets/product/p-2.jpg";
import Product3 from "../../assets/product/p-3.jpg";
import Product4 from "../../assets/product/p-4.jpg";
import Product5 from "../../assets/product/p-5.jpg";
import Product7 from "../../assets/product/p-7.jpg";
import Product9 from "../../assets/product/p-9.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FlashSaleData = [
  {
    id: 1,
    img: Product1,
    name: "Product 1",
    price: 999_999,
    discount: 1_999_999,
    stock: 70, // Maybe replace with remaining stock percentage
  },
  {
    id: 2,
    img: Product2,
    name: "Product 2", // Add more details for each product
    price: 999_999,
    discount: 1_999_999,
    stock: 50,
  },
  {
    id: 3,
    img: Product3,
    name: "Product 3", // Add more details for each product
    price: 999_999,
    discount: 1_999_999,
    stock: 50,
  },
  {
    id: 4,
    img: Product4,
    name: "Product 4", // Add more details for each product
    price: 999_999,
    discount: 1_999_999,
    stock: 50,
  },
  {
    id: 5,
    img: Product5,
    name: "Product 5", // Add more details for each product
    price: 999_999,
    discount: 1_999_999,
    stock: 50,
  },
  {
    id: 6,
    img: Product7,
    name: "Product 6", // Add more details for each product
    price: 999_999,
    discount: 1_999_999,
    stock: 50,
  },
  {
    id: 7,
    img: Product9,
    name: "Product 7", // Add more details for each product
    price: 999_999,
    discount: 1_999_999,
    stock: 100,
  },
];

function FlashSale() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    slidesToShow: 6, // Show 2 slides on smaller screens
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: true,
    arrows: true,
    responsive: [
      // Responsive settings
      {
        breakpoint: 1024, // Adjust breakpoint for tablet/mobile
        settings: {
          slidesToShow: 6, // Show 2 slides on smaller screens
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // Adjust breakpoint for tablet/mobile
        settings: {
          slidesToShow: 2, // Show 2 slides on smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Adjust breakpoint for smaller devices
        settings: {
          slidesToShow: 2, // Show 1 slide on very small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-5">
      <div className="heading font-bold flex items-center">
        <IoIosFlash className="text-2xl text-red-600 ml-10" />
        <h1 className="text-2xl ml-2">Flash Sale</h1>
      </div>
      <div className="container mt-2 mb-5">
        <Slider {...settings}>
          {FlashSaleData.map((product) => (
            <div
              key={product.id}
              className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4 lg:mt-0"
            >
              <img
                src={product.img}
                alt={product.name}
                className="h-40 object-cover rounded-xl object-center"
              />
              <div className="p-2">
                <h2 className="font-bold text-lg mb-2">{product.name}</h2>
                <div className="flex items-center">
                  <span className="text-xl font-semibold">
                    Rp. {product.price.toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="flex items-center">
                  {product.discount && ( // Conditionally render discount price
                    <span className="text-sm line-through opacity-75 ml-2">
                      Rp. {product.discount.toLocaleString("id-ID")}
                    </span>
                  )}
                </div>
              </div>
              <div
                className="progress-bar bg-red-600 h-2 rounded-full mt-3 mb-3"
                style={{ width: `${product.stock}%` }}
              />{" "}
              {/* Consider using remaining stock percentage */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FlashSale;
