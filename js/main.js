document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Timeline scroll animation
    const timelineEntries = document.querySelectorAll('.timeline-entry');
    const researchPapers = document.querySelectorAll('.research-paper');
    const githubProjects = document.querySelectorAll('.github-project');
    const skillsEntry = document.querySelectorAll('.skills-entry');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing after element is visible
                // observer.unobserve(entry.target);
            } else {
                // Comment out the line below if you want elements to stay visible once they appear
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);
    
    timelineEntries.forEach(item => {
        observer.observe(item);
    });
    
    // Observe research papers for scroll animation
    researchPapers.forEach(paper => {
        observer.observe(paper);
    });
    
    // Observe GitHub projects for scroll animation
    githubProjects.forEach(project => {
        observer.observe(project);
    });

    skillsEntry.forEach(entry => {
        observer.observe(entry);
    });
});