import React from 'react'

export default function Projects({ t }) {
  return (
    <section id="projects">
      <p className="section-label">{t.projects.label}</p>
      <h2 className="section-title">{t.projects.title}</h2>
      <p className="section-sub">{t.projects.sub}</p>
      <div className="projects-grid">
        {t.projects.items.map((project, idx) => (
          <article className="project-card" key={`${project.name}-${idx}`}>
            <a className="project-visual" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name}`}>
              <img src={project.image} alt={`${project.name} preview`} />
            </a>
            <div className="project-topline">
              <span className="project-badge">{project.status}</span>
            </div>
            <h3>
              <a className="project-title-link" href={project.url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h3>
            <p>{project.description}</p>
            <div className="project-meta">
              <span>Live commerce</span>
              <span>Mobile optimized</span>
              <span>Fast launch</span>
            </div>
            <a className="project-visit-link" href={project.url} target="_blank" rel="noopener noreferrer">
              Visit project →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}