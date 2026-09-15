import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <section className="home">
      <div className="container">
        <p className="home-eyebrow">demo project</p>
        <h1 className="home-title">
          A small app to watch a pipeline turn code into something shipped.
        </h1>
        <p className="home-sub">
          This is a plain React app wired up with two GitHub Actions workflows —
          one written by hand, one built from ready-made actions. Use these pages
          to click around and confirm the UI actually renders after each build.
        </p>
        <div className="home-actions">
          <Link className="btn btn-primary" to="/status">
            See pipeline status
          </Link>
          <Link className="btn btn-ghost" to="/about">
            How this demo works
          </Link>
        </div>

        <div className="home-grid">
          <div className="home-card">
            <span className="home-card-num">01</span>
            <h3>Install</h3>
            <p>Dependencies get pulled in on every push, same as running npm install by hand.</p>
          </div>
          <div className="home-card">
            <span className="home-card-num">02</span>
            <h3>Test &amp; build</h3>
            <p>Lint, tests, and the production build all run before anything ships.</p>
          </div>
          <div className="home-card">
            <span className="home-card-num">03</span>
            <h3>Deploy</h3>
            <p>The build either goes out through hand-written git commands or a packaged action.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
