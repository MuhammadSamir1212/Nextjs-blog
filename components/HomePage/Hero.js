import styles from "../../styles/hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src="/images/DSCF500313.jpg" alt="me" height={300} width={300} />
      </div>
      <h1>Hello, I am muhammad</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio eaque
        quisquam fugit tempora inventore delectus nulla a voluptatibus enim
        similique ipsa.
      </p>
    </section>
  );
}
