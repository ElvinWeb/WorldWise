import styles from "./Css/Product.module.css";
import pricingSideImg from "../../assets/img-2.jpg";
import PageNav from "../../components/Nav/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Explore the world with ease and affordability. For just $9 a month,
            gain access to all the features and benefits WorldWise has to offer.
            Enjoy personalized travel recommendations, comprehensive guides, and
            a vibrant community of fellow explorers, all at a price that fits
            your budget.Join WorldWise today and start your adventure with
            confidence. No hidden fees, no complicated plans—just one simple
            price for endless possibilities.
          </p>
          <p></p>
        </div>
        <img
          src={pricingSideImg}
          alt="overview of a large city with skyscrapers"
        />
      </section>
    </main>
  );
}
