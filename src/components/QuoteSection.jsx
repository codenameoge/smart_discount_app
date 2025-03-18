import styles from "./ProductDescription.module.css";
import { services } from "../content/services";

function Services() {
  console.log('Services component rendered')
  return (
    <section className={styles.container}>
      {/* Left Side - Listed Products */}
      <div className={styles.left}>
        {services.map((service, index) => (
          <div className={styles.card} key={index}>
            <h2 className={styles.title}>{service.title}</h2>
            <p className={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Right Side - Picture */}
      <div className={styles.right}>
        <img className={styles.image} src="/images/serviceimage.jpg" alt="Product" />
      </div>
    </section>
  );
}

export default Services;
