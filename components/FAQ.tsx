import Image from 'next/image'

export default function FAQ() {
  const faqs = [
    {
      question: "When is the next Street Hockey Night in America?",
      answer: "The date for the next tournament is TBD. Sign up for updates above to be the first to know!"
    },
    {
      question: "Can I play if I play in the Wharton Wildmen (WHL)?",
      answer: "Absolutely! Street Hockey Night in America is for everyone - not to mention a great time to showcase your stick skills."
    },
    {
      question: "Is this a recurring commitment?",
      answer: "Absolutely not! The only mandatory time commitment is the time you spend bragging about your team. Come as you are, bring what you can."
    },
    {
      question: "What should I wear/bring?",
      answer: "Wear the color of your team and sneakers. Bring your A-game (or ___-game if you're from Wharton) and a positive attitude. We provide all the equipment (sticks, balls, goals)."
    },
    {
      question: "I've never played hockey before. Can I still play?",
      answer: "Absolutely! Half our players have never held a stick before their first game. You'll fit right in."
    },
    {
      question: "How do I stay in the loop for all things Street Hockey Of Wharton?",
      answer: "Join the Wharton Mildmen WhatsApp Group",
      link: "https://chat.whatsapp.com/GddBQzPvItfJYh7IYm2t7X"
    },
    {
      question: "Who should I contact if I have more questions?",
      answer: "The Qeeper of the Qup (Ryan Bergamini - rmb1@wharton.upenn.edu)"
    }
  ]

  return (
    <div className="section">
      <h2 className="section-heading">FREQUENTLY ASKED QUESTIONS</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: '1.5rem',
              padding: '1.5rem',
              background: '#f8f8f8',
              borderRadius: '8px',
              borderLeft: '4px solid #ae000f'
            }}
          >
            <h3 style={{
              color: '#ae000f',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              marginBottom: '0.75rem'
            }}>
              {faq.question}
            </h3>
            <p style={{
              color: '#001f3f',
              fontSize: '1rem',
              lineHeight: '1.6',
              margin: 0
            }}>
              {faq.answer}
              {faq.link && (
                <>
                  {': '}
                  <a
                    href={faq.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#ae000f', textDecoration: 'underline', wordBreak: 'break-all' }}
                  >
                    {faq.link}
                  </a>
                </>
              )}
            </p>
          </div>
        ))}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Image
            src="/Keeper of The Qup.png"
            alt="Qeeper of The Qup"
            width={400}
            height={533}
            style={{ borderRadius: '8px', maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  )
}
