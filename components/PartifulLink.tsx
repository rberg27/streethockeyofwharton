export default function PartifulLink() {
  return (
    <div className="section">
      <h2 className="section-heading">
        INTERESTED IN NEXT YEAR?
      </h2>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <img
            src="/The Quaker Qup.png"
            alt="The Quaker Cup"
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px' }}
          />
        </div>
        <p style={{ fontSize: '1.1rem', color: '#001f3f', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          Want to be part of the next Street Hockey Night in America?<br />
          Sign up to stay in the loop for the next tournament!
        </p>
        <a
          href="https://forms.gle/w6xAfnqekGy4cvbE8"
          className="partiful-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign Up for Updates
        </a>
      </div>
    </div>
  )
}