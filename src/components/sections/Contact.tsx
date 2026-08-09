import { contact } from '../../content/contact'
import { site } from '../../content/site'
import './Contact.css'

export function Contact() {
  const hasEmail = site.email.length > 0
  const hasGithub = site.github.length > 0
  const hasLinkedin = site.linkedin.length > 0
  const hasResume = site.resume.length > 0
  const hasActions = hasEmail || hasGithub || hasLinkedin || hasResume

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__inner">
        <p className="contact__eyebrow">{contact.eyebrow}</p>

        <h2 id="contact-title">{contact.heading}</h2>

        <p className="contact__intro">{contact.intro}</p>

        {hasActions ? (
          <div className="contact__actions">
            {hasEmail ? (
              <a className="button button--primary" href={`mailto:${site.email}`}>
                Email
              </a>
            ) : null}

            {hasGithub ? (
              <a
                className="button button--secondary"
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in new tab)"
              >
                GitHub
              </a>
            ) : null}

            {hasLinkedin ? (
              <a
                className="button button--secondary"
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            ) : null}

            {hasResume ? (
              <a
                className="button button--secondary"
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
