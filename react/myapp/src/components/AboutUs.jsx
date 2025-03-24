import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us – Green Cart</h1>
        <p>Welcome to Green Cart, where freshness meets sustainability!</p>
      </div>
      <div className="about-us-content">
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to revolutionize the way you shop for groceries. We’re committed to providing
            <strong> farm-fresh produce</strong>, <strong>organic staples</strong>, and
            <strong> eco-conscious products</strong> that nourish your body and protect the planet.
          </p>
        </section>
        <section className="unique-section">
          <h2>What Makes Us Unique?</h2>
          <ul>
            <li><strong>Farm-to-Table Freshness</strong>: Every item is carefully selected from local farms.</li>
            <li><strong>Eco-Friendly Practices</strong>: We use biodegradable packaging and energy-efficient operations.</li>
            <li><strong>Community-Centric</strong>: We support local businesses and foster connections.</li>
            <li><strong>Curated Selection</strong>: A thoughtfully curated range for every lifestyle.</li>
          </ul>
        </section>
        <section className="story-section">
          <h2>Our Story</h2>
          <p>
            Green Cart began as a small dream to make healthy, sustainable groceries accessible to everyone.
            Founded in [Year], we’ve grown into a beloved destination for conscious shoppers.
          </p>
        </section>
        <section className="join-section">
          <h2>Join the Green Cart Family</h2>
          <p>
            Explore our store, both online and in-person, and experience the difference that fresh,
            sustainable groceries can make. Together, let’s create a healthier, greener world – one cart at a time.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;