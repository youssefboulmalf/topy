import React from "react";
import Layout from "../layouts/Main";
import Beaches from "../components/destinations/beaches";
import South from "../components/destinations/south";
import North from "../components/destinations/north";
import Footer from "components/footer";
const destinations = () => {
  return (
    <Layout>
      <section className="destination-page">
        <div className="container">
          <div className="card-section">
            <h2>The north:</h2>
                <North/>
            <h2>The south & west:</h2>
          <South/>
            <h2>Beaches & islands:</h2>
            <Beaches/>
          </div>
        </div>
      </section>
      <Footer/>
    </Layout>
  );
};

export default destinations;
