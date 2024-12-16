
import Image from 'next/image';

type Product = {
  image: string;
  title: string;
  price: string;
  oldPrice?: string;
  tag?: string;
};

type Category = string;

type ProductTag = {
  name: string;
  isActive?: boolean;
};

export default function Ourshop() {
  const products: Product[] = [
    { image: "/s1.png", title: "Fresh Lime", price: "38.00", oldPrice: "45.00" },
    { image: "/s2.png", title: "Chocolate Muffin", price: "28.00", tag: "Sell" },
    { image: "/s3.png", title: "Burger", price: "21.00", oldPrice: "45.00" },
    { image: "/s4.png", title: "Country Burger", price: "45.00" },
    { image: "/s5.png", title: "Drink", price: "23.00", oldPrice: "45.00" },
    { image: "/s6.png", title: "Pizza", price: "43.00" },
    { image: "/s7.png", title: "Cheese Butter", price: "10.00" },
    { image: "/s8.png", title: "Sandwiches", price: "25.00" },
    { image: "/s9.png", title: "Chicken Chup", tag: "Sell", price: "12.00" },
    { image: "/s4.png", title: "Country Burger", price: "45.00" },
    { image: "/s5.png", title: "Drink", price: "23.00", oldPrice: "45.00" },
    { image: "/s6.png", title: "Pizza", price: "43.00" },
  ];

  const categories: Category[] = [
    "Sandwiches",
    "Burger",
    "Chicken Chup",
    "Drink",
    "Pizza",
    "Thi",
    "Non Veg",
    "Uncategorized",
  ];

  const productTags: ProductTag[][] = [
    [
      { name: "Services" },
      { name: "Our Menu" },
      { name: "Pizza" },
    ],
    [
      { name: "Cupcake" },
      { name: "Burger", isActive: true },
      { name: "Cookies" },
    ],
    [
      { name: "Our Shop" },
      { name: "Tandoori Chicken" },
    ],
  ];

  const LatestProduct: Product[] = [
    { image: "/latestproduct.png", title: "Pizza", price: "$35.00" },
    { image: "/latestproduct.png", title: "Cupcake", price: "35.00" },
    { image: "/latestproduct.png", title: "Cookies", price: "35.00" },
    { image: "/latestproduct.png", title: "Burger", price: "35.00" },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-wrap gap-4 mb-6">
            {/* Sort Filters */}
            <h1 className="font-medium mt-2">Sort By:</h1>
            <div className="flex items-center gap-2 border p-2 rounded-md">
              <select className="border-none outline-none">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <h1 className="font-medium mt-2">Show:</h1>
            <div className="flex items-center gap-2 border p-2 rounded-md">
              <select className="border-none outline-none">
                <option>Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="border rounded-md overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                  {product.tag && (
                    <div className="absolute top-2 left-2 bg-amber-500 text-white px-2 py-1 text-xs rounded">
                      {product.tag}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800">{product.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-amber-500 font-semibold">${product.price}</span>
                    {product.oldPrice && (
                      <span className="text-gray-500 line-through">${product.oldPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          {/* Search Bar */}
          <div className="mb-6">
         <form className="flex flex-col sm:flex-row border rounded-md overflow-hidden ">
            <input
            type="search"
           placeholder="Search Product"
           className="flex-1 px-4 py-2 outline-none bg-pink-50 text-sm sm:text-base"
             />
           <button
            type="submit"
             className="px-1 py-2 bg-amber-500 text-white text-sm sm:text-base ">
                Search
               </button>
              </form>
               </div>


          {/* Categories */}
          <div>
            <h2 className="text-lg font-bold mb-4">Category</h2>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Banner */}
          <div
            className="relative flex flex-col items-start p-6 mt-6 text-white bg-cover bg-center aspect-[0.867] rounded-md"
            style={{
              backgroundImage:
                "url('/banner.png')",
            }}
          >
            <h3 className="text-lg">Perfect Taste</h3>
            <h4 className="mt-1 text-xl font-bold">Classic Restaurant</h4>
            <span className="mt-3 text-amber-500">45.00$</span>
            <button className="mt-10 px-4 py-2 bg-amber-500 text-white rounded-md">Shop Now</button>
          </div>

          {/* Latest Products */}
          <h2 className="mt-6 text-xl font-bold text-zinc-800">Latest Products</h2>
          {LatestProduct.map((item, index) => (
            <div key={index} className="flex items-center gap-4 mt-5">
              <Image
                src={item.image}
                alt={`Product image of ${item.title}`}
                width={71}
                height={71}
                className="object-contain"
              />
              <div>
                <h3 className="text-base text-zinc-800">{item.title}</h3>
                <div>
                  <img src="/star.png" alt="Stars" />
                </div>
                <p className="text-sm text-zinc-500 mt-1">${item.price}</p>
              </div>
            </div>
          ))}

          {/* Product Tags */}
          <h2 className="mt-6 text-xl font-bold text-zinc-800">Product Tags</h2>
          {productTags.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-4 mt-4">
              {row.map((tag, index) => (
                <span
                  key={index}
                  className={`text-base ${tag.isActive ? "text-amber-500" : "text-zinc-600"}`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
