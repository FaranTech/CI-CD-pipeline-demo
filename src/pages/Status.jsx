import { useState } from 'react'
import './Status.css'

const STATUSES = ['pending', 'running', 'passed', 'failed']

const initialStages = [
  { id: 'install', label: 'Install dependencies', status: 'passed' },
  { id: 'lint', label: 'Lint', status: 'passed' },
  { id: 'test', label: 'Run tests', status: 'passed' },
  { id: 'build', label: 'Build', status: 'running' },
  { id: 'deploy', label: 'Deploy', status: 'pending' },
]

function nextStatus(current) {
  const i = STATUSES.indexOf(current)
  return STATUSES[(i + 1) % STATUSES.length]
}

function StatusBadge({ status }) {
  return <span className={`badge badge-${status}`}>{status}</span>
}

function Status() {
  const [stages, setStages] = useState(initialStages)

  const cycleStage = (id) => {
    setStages((prev) =>
      prev.map((stage) =>
        stage.id === id ? { ...stage, status: nextStatus(stage.status) } : stage
      )
    )
  }

  const resetStages = () => setStages(initialStages)

  return (
    <section className="status">
      <div className="container">
        <p className="status-eyebrow">live view</p>
        <h1>Pipeline status</h1>
        <p className="status-sub">
          Click a stage to cycle its status — this is here to give the UI something
          stateful to test, the same way you'd click through a real dashboard.
        </p>

        <ul className="stage-list">
          {stages.map((stage) => (
            <li key={stage.id} className="stage-row">
              <button className="stage-btn" onClick={() => cycleStage(stage.id)}>
                <span className="stage-label">{stage.label}</span>
                <StatusBadge status={stage.status} />
              </button>
            </li>
          ))}
        </ul>

        <button className="btn btn-ghost reset-btn" onClick={resetStages}>
          Reset
        </button>
      </div>
    </section>
  )
}

export default Status
