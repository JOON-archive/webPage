document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Dynamic project loading (example with static data)
    const projects = [
        {
            title: '프로젝트 3',
            description: '',
            github: 'https://github.com/yourusername/project3'
        },

    ];

    const projectSection = document.querySelector('#projects');
    
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
        projectDiv.appendChild(projectTitle);
        
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectDiv.appendChild(projectDescription);
        
        const projectLink = document.createElement('a');
        projectLink.href = project.github;
        projectLink.textContent = 'GitHub 리포지토리';
        projectLink.target = '_blank';
        projectDiv.appendChild(projectLink);
        
        projectSection.appendChild(projectDiv);
    });
});
