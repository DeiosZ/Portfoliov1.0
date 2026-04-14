
const projectsData = [
    {
        name: "API de Tareas (Task Manager)",
        description: "CRUD completo de tareas con Spring Boot, MySQL y Postman. Endpoints RESTful, validaciones y manejo de errores.",
        icon: "fas fa-tasks",
        tech: ["Java", "Spring Boot", "MySQL", "Postman", "JPA"],
        status: "completo",
        statusText: "Completado",
        repo: "https://github.com/DeiosZ/DemoSpring",
        demo: "https://deiosz.github.io/DemoSpring_Front/"
    },
    {
        name: "Northwind API (En desarrollo)",
        description: "API para gestión de pedidos, productos y clientes. Aplicando patrones de diseño (Repository, DTO, Service Layer).",
        icon: "fas fa-database",
        tech: ["Java", "Spring Boot", "Patrones de diseño", "JPA/Hibernate", "PostgreSQL"],
        status: "progress",
        statusText: "En desarrollo",
        repo: "https://github.com/DeiosZ/ProjectNorthBack",
        demo: "https://deiosz.github.io/ProjectNorthBack_Front/"
    }
];

// Tecnologías
const skillsData = [
    { name: "Java", icon: "fab fa-java" },
    { name: "Spring Boot", icon: "fas fa-leaf" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "Postman", icon: "fas fa-paper-plane" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "Python", icon: "fab fa-python" },
    { name: "Power BI", icon: "fas fa-chart-line" },
    { name: "Flutter", icon: "fab fa-android" }
];

// Renderizar proyectos
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = '';
    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-icon"><i class="${project.icon}"></i></div>
            <span class="project-status ${project.status === 'completo' ? 'status-complete' : 'status-progress'}">${project.statusText}</span>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.repo}" target="_blank"><i class="fab fa-github"></i> Repositorio</a>
                ${project.demo !== '#' ? `<a href="${project.demo}" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
            </div>
        `;
        container.appendChild(card);
    });
}


function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    
    container.innerHTML = '';
    skillsData.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill-item';
        skillDiv.innerHTML = `<i class="${skill.icon}"></i><span>${skill.name}</span>`;
        container.appendChild(skillDiv);
    });
}


function setupSocialLinks() {
    const githubLink = document.getElementById('github-link');
    const linkedinLink = document.getElementById('linkedin-link');
    const facebookLink = document.getElementById('facebook-link');
    
    if (githubLink) githubLink.href = 'https://github.com/DeiosZ';
    if (linkedinLink) linkedinLink.href = 'https://www.linkedin.com/in/vladimir-angelino-sihuincha-a43823228/';
    if (facebookLink) facebookLink.href = 'https://facebook.com/tuperfil';
}


document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();
    setupSocialLinks();
});