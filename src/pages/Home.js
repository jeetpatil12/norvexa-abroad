export default function Home() {
  return (
    <div>

      <section className="hero">
        <h1>Welcome to EliteAbroad</h1>
        <p>Your Trusted Study Abroad Partner</p>
        <a href="/contact" className="btn">Book Free Counselling</a>
      </section>

      <section>
        <h2>Our Services</h2>
        <div className="grid">
          <div>Profile Evaluation</div>
          <div>SOP & LOR Writing</div>
          <div>University Shortlisting</div>
          <div>Application Filing</div>
          <div>Visa Assistance</div>
          <div>Education Loans</div>
        </div>
      </section>

      <section>
        <h2>Popular Destinations</h2>
        <div className="grid">
          <div>🇩🇪 Germany</div>
          <div>🇬🇧 United Kingdom</div>
          <div>🇨🇦 Canada</div>
        </div>
      </section>

    </div>
  );
}
