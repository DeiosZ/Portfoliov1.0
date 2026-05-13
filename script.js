
const allProjects = [
    {
        name: "API de Tareas (Task Manager)",
        description: "CRUD completo de tareas con Spring Boot, MySQL y Postman. Endpoints RESTful, validaciones y manejo de errores.",
        icon: "fas fa-tasks",
        tech: ["Java", "Spring Boot", "MySQL", "Postman", "JPA"],
        status: "completo",
        statusText: "Completado",
        demo: "https://deiosz.github.io/DemoSpring_Front/",
        type: "backend"
    },
    {
        name: "Northwind API",
        description: "API para gestión de pedidos, productos y clientes. Aplicando patrones de diseño (Repository, DTO, Service Layer).",
        icon: "fas fa-database",
        tech: ["Java", "Spring Boot", "JPA/Hibernate", "PostgreSQL"],
        status: "progress",
        statusText: "En desarrollo",
        demo: "https://deiosz.github.io/ProjectNorthBack_Front/",
        type: "backend"
    },
    {
        name: "MarketingPro",
        description: "Landing page para agencia de marketing digital. Desarrollada con React, Bootstrap y formulario funcional.",
        icon: "fas fa-chart-line",
        tech: ["React", "Bootstrap", "JavaScript", "HTML5", "CSS3"],
        status: "completo",
        statusText: "Completado",
        demo: "https://deiosz.github.io/MarketingProFront/",
        type: "frontend"
    },
    {
        name: "Nexus Academy",
        description: "Landing page para academia de matemáticas y ciencias. Incluye botón flotante de WhatsApp y formulario de contacto.",
        icon: "fas fa-graduation-cap",
        tech: ["React", "Bootstrap", "JavaScript", "FormSubmit"],
        status: "completo",
        statusText: "Completado",
        demo: "https://deiosz.github.io/NexusAcademyFront/",
        type: "frontend"
    }
];

let currentFilter = 'all';

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    const filtered = currentFilter === 'all' 
        ? allProjects 
        : allProjects.filter(p => p.type === currentFilter);
    
    container.innerHTML = '';
    filtered.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        let linksHtml = '';
        if (project.demo && project.demo !== '#') {
            linksHtml = `
                <div class="project-links">
                    <a href="${project.demo}" target="_blank" class="demo-link">
                        <i class="fas fa-external-link-alt"></i> Ver Demo
                    </a>
                </div>
            `;
        }
        
        card.innerHTML = `
            <div class="project-icon"><i class="${project.icon}"></i></div>
            <span class="project-status ${project.status === 'completo' ? 'status-complete' : 'status-progress'}">${project.statusText}</span>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
            </div>
            ${linksHtml}
        `;
        container.appendChild(card);
    });
}

function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderProjects();
        });
    });
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    
    const skillsData = [
        { name: "Java", icon: "fab fa-java" },
        { name: "Spring Boot", icon: "fas fa-leaf" },
        { name: "MySQL", icon: "fas fa-database" },
        { name: "Postman", icon: "fas fa-paper-plane" },
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "Python", icon: "fab fa-python" },
        { name: "Power BI", icon: "fas fa-chart-line" },
        { name: "Flutter", icon: "fab fa-android" },
        { name: "React", icon: "fab fa-react" },
        { name: "Bootstrap", icon: "fab fa-bootstrap" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" }
    ];
    
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
    if (facebookLink) facebookLink.href = 'https://www.facebook.com/tuperfil';
}


document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    setupFilters();
    renderSkills();
    setupSocialLinks();
});