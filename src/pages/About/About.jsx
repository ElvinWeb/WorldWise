import styles from "./Css/About.module.css";
import aboutSideImg from "../../assets/img-1.jpg";
import PageNav from "../../components/Nav/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src={aboutSideImg}
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide</h2>
          <p>
            At WorldWise, we believe that exploring the world should be
            accessible to everyone. Our platform connects adventurers,
            travelers, and explorers with the resources and communities they
            need to make their journeys unforgettable. Whether you’re planning a
            weekend getaway or a year-long expedition, WorldWise offers
            personalized recommendations, detailed guides, and a supportive
            community to help you every step of the way.
          </p>
        </div>
      </section>
    </main>
  );
}
