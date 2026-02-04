export default function GearOrder() {
  return (
    <div className="section">
      <h2 className="section-heading">GEAR ORDER</h2>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <img
            src="/Wharton_Mildmen_Street_Hockey_Hat.png"
            alt="Wharton Mildmen Street Hockey Hat"
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px' }}
          />
        </div>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#001f3f' }}>
          $15 Hats
        </p>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#001f3f' }}>
          Ever wish you bought Apple at $15 a share? Now's your chance.
        </p>

        <a
          href="https://forms.gle/w6xAfnqekGy4cvbE8"
          className="partiful-link"
          target="_blank"
          rel="noopener noreferrer"
        >
         Order Now
        </a>

      </div>
    </div>
  )
}
