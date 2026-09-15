import './About.css'

function About() {
  return (
    <section className="about">
      <div className="container">
        <p className="about-eyebrow">how this works</p>
        <h1>Two ways to ship the same app</h1>
        <p className="about-lead">
          The repo behind this page ships with two GitHub Actions workflows that
          do the same job differently.
        </p>

        <div className="about-block">
          <h2>Manual pipeline</h2>
          <p>
            Every step — install, lint, test, build, and deploy — is a plain
            command written out by hand. The deploy step pushes the build to
            the <code>gh-pages</code> branch using raw git commands, with no
            packaged deploy action involved.
          </p>
        </div>

        <div className="about-block">
          <h2>Automated pipeline</h2>
          <p>
            The same install, lint, test, and build steps run, but caching and
            deploy are handed off to ready-made actions from the GitHub
            Marketplace. Less to maintain, at the cost of some visibility into
            what's happening underneath.
          </p>
        </div>

        <div className="about-block">
          <h2>Why this page exists</h2>
          <p>
            A pipeline that only touches the terminal is hard to eyeball. This
            small UI gives every push something visible to check: did the
            build still render correctly, do the pages still route, does
            state still update on click.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
