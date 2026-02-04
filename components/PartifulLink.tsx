export default function PartifulLink() {
  return (
    <div className="section">
      <h2 className="section-heading">
        SIGN UP NOW
      </h2>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <img
            src="/Street Hockey Night In America II.jpg"
            alt="Street Hockey Night In America II"
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px' }}
          />
        </div>
        <p style={{ fontSize: '1.1rem', color: '#001f3f', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          Back by popular demand. Join the movement on Saturday, February 28th.
        </p>
        <a
          href="https://partiful.com/e/KhLNHmYBjcz0li0lOxCy"
          className="partiful-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          RSVP on Partiful
        </a>
      </div>
    </div>
  )
}
