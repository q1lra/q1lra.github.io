const projects = [
    {
        name: "sec-chat",
        description: "An encrypted communication tool",
        language: "Go",
        langColor: "#00ADD8",
        url: "https://github.com/q1lra/sec-chat"
    },
    {
        name: "typer",
        description: "A keyboard emulator to bypass copy-paste restrictions in websites and apps.",
        language: "AutoHotkey",
        langColor: "#657b83",
        url: "https://github.com/q1lra/typer"
    },
    {
        name: "reaction-trainer",
        description: "An application to measure and track reaction speed by clicking a randomly moving target.",
        language: "C#",
        langColor: "#178600",
        url: "https://github.com/q1lra/reaction-trainer"
    },
    {
        name: "matrix-rain",
        description: "The Matrix digital rain simulation",
        language: "Python",
        langColor: "#3572A5",
        url: "https://github.com/q1lra/matrix-rain"
    }
];

function renderProjects() {
    const grid = document.getElementById('repo-grid');
    if (!grid) return;

    grid.innerHTML = projects.map(project => `
        <a href="${project.url}" target="_blank" class="repo-card">
            <div>
                <div class="repo-header">
                    <svg class="repo-icon" height="16" viewBox="0 0 16 16" width="16">
                        <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 16.7a.25.25 0 0 1-.4-.2Z"></path>
                    </svg>
                    <span class="repo-title">${project.name}</span>
                </div>
                <p class="repo-desc">${project.description}</p>
            </div>
            <div class="repo-footer">
                <span class="lang-dot" style="background-color: ${project.langColor};"></span>
                <span>${project.language}</span>
            </div>
        </a>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);
