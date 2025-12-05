export default function Contact() {
  return (
    <div className="page">
      <h1>Contact EliteAbroad</h1>

      <form className="contact-form">
        <input placeholder="Full Name" />
        <input placeholder="Email" />
        <input placeholder="Phone" />
        <select>
          <option>Germany</option>
          <option>UK</option>
          <option>Canada</option>
        </select>
        <button type="submit">Submit Enquiry</button>
      </form>
    </div>
  );
}
