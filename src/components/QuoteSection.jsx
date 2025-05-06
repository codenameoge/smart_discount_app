import styles from "./ProductDescription.module.css";
import { services } from "../content/services";

function Services() {
  console.log('Services component rendered');
  return (
    <section
      className={`${styles.container} flex flex-col md:flex-row justify-between items-center p-6 gap-6`}
      style={{
        backgroundColor: "#f9f9f6", // off-white background
        backgroundImage: "url('src/assets/bubble.png')", // path to your bubble image
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "cover",
      }}
    >
      {/* Left Side - Listed Products */}
      <div className={`${styles.left} w-full md:w-1/2 space-y-4`}>
        {services.map((service, index) => (
          <div
            key={index}
            className={`${styles.card} bg-white p-4 shadow-md rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
          >
            <h2 className={`${styles.title} text-xl text-center font-semibold text-gray-900`}>
              {service.title.split('||').map((part, i) => (
                <span key={i} className="block mb-2">
                  {part}
                </span>
              ))}
            </h2>
            <p className={`${styles.description} text-gray-700 mt-2`}>{service.description}</p>
            <div className="mt-4 text-center">
              <button className="bg-gradient-to-r from-[#FABC08] to-[#FF4500] text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Picture */}
      <div className={`${styles.right} w-full md:w-1/2 flex justify-center`}>
        <img 
          src="src/assets/cardandbag.png" 
          alt="Product" 
          className={`${styles.image} object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
          style={{ width: "80%", height: "60%" }}
        />
      </div>
    </section>
  );
}

export default Services;
