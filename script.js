// Data
const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume' }
];

const aboutSummary = `I am a B.Tech III year CSBS student with strong interest in programming and web development. I have hands-on skills in Python, Java, C, and SQL, and I enjoy building applications using HTML, CSS, JavaScript, React, and Flask. I also have experience working with MySQL, MongoDB, Git, GitHub, Firebase, and VS Code. I understand core computer science concepts like machine learning basics, IoT basics, operating systems, and data structures. I am a quick learner with good problem-solving skills, and I am always ready to explore new technologies and work in a team environment.`;

const skills = {
    'Programming': ['Python', 'Java', 'C', 'SQL'],
    'Web Development': ['HTML', 'CSS', 'JavaScript', 'React', 'Flask'],
    'Databases': ['MySQL', 'MongoDB'],
    'Tools': ['Git', 'GitHub', 'Firebase', 'VS Code'],
    'Concepts': ['Machine Learning', 'IoT Basics', 'Operating Systems', 'Data Structures']
};

const projects = [
    {
        title: 'Portfolio Website',
        points: [
            'Built a responsive personal portfolio with smooth navigation and modern UI',
            'Showcases projects, skills, education, certifications, and contact details in a single-page layout',
            'Implemented interactive animations, particle effects, and smooth transitions'
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
        link: 'https://github.com/POOVARASAN0713',
        github: 'https://github.com/POOVARASAN0713'
    },
    {
        title: 'Farmer Marketplace App',
        points: [
            'Proposed an app that connects farmers directly to consumers for selling fruits and vegetables locally',
            'Designed features like weather updates, market prices, and on-demand delivery using part-time agents',
            'Inspired by Swiggy/Zomato-style delivery systems tailored for farmers'
        ],
        technologies: ['React', 'Flask', 'MySQL', 'Firebase'],
        link: null,
        github: null
    }
];

const education = [
    {
        year: '2023 – 2027',
        degree: 'B.Tech in Computer Science and Business Systems',
        institution: 'KPR Institute of Engineering and Technology, Coimbatore'
    },
    {
        year: '2023',
        degree: 'Class 12',
        institution: 'SRNV Higher Secondary School, Coimbatore'
    },
    {
        year: '2021',
        degree: 'Class 10',
        institution: 'SRNV Higher Secondary School, Coimbatore'
    }
];

const certifications = [
    {
        provider: 'NPTEL',
        courses: [
            { name: 'Introduction to Industry 4.0 and Industrial Internet of Things', link: 'https://drive.google.com/file/d/10wmDd9ZoNCer8kfTzH_rkNYmzA8Hzmlt/view?usp=drive_link' },
            { name: 'Business Ethics', link: 'https://drive.google.com/file/d/1A3hBl4rMqihuWQxK-L_8Mt4_q_TjxyRh/view?usp=drive_link' },
            { name: 'Deep Learning', link: 'https://drive.google.com/file/d/1kj5figtxKm1aT3R0aMgp0sXvZ1SutNL5/view?usp=drive_link' }
        ]
    },
    {
        provider: 'Oracle',
        courses: [
            { name: 'Oracle Certified Foundation Associate', link: 'https://drive.google.com/file/d/1IBMAgzAFg9KFceYcoWynDLoHFW9mu8Ig/view?usp=sharing' }
        ]
    }
];

let activeSection = 'home';

// Profile photo: place your image in the portfolio folder as profile.jpg (or .png)
const PROFILE_IMAGE = 'profile.jpg';

// Particle Effect
document.addEventListener('click', (e) => {
    const colors = ['#22c55e', '#000000', '#10b981', '#1a1a1a', '#16a34a'];

    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.boxShadow = `0 0 20px ${colors[Math.floor(Math.random() * colors.length)]}, 0 0 40px ${colors[Math.floor(Math.random() * colors.length)]}`;

        const angle = (Math.PI * 2 * i) / 8;
        const distance = 150;
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;

        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${endX}px, ${endY}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });

        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 1000);
    }
});

// Contact Section HTML
function getContactSection() {
    return `
        <div class="bg-gradient-to-r from-green-50 to-gray-50 rounded-2xl p-8 mt-8 shadow-xl">
            <h3 class="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-gray-800 bg-clip-text text-transparent">
                Get In Touch
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <a href="mailto:poovarasanpalani07@gmail.com" class="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
                    <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3">
                        <span class="text-white text-xl">✉</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-gray-800 text-sm">Email</h4>
                        <p class="text-gray-600 text-xs">Contact me</p>
                    </div>
                </a>

                <a href="tel:8807837233" class="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
                    <div class="w-12 h-12 bg-gradient-to-r from-gray-700 to-black rounded-full flex items-center justify-center mr-3">
                        <span class="text-white text-xl">☎</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-gray-800 text-sm">Phone</h4>
                        <p class="text-gray-600 text-xs">8807837233</p>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/poovarasan-p-a43255272" target="_blank" rel="noopener noreferrer" class="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
                    <div class="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mr-3">
                        <span class="text-white text-xl">in</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-gray-800 text-sm">LinkedIn</h4>
                        <p class="text-gray-600 text-xs">Connect</p>
                    </div>
                </a>

                <a href="https://github.com/POOVARASAN0713" target="_blank" rel="noopener noreferrer" class="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
                    <div class="w-12 h-12 bg-gradient-to-r from-gray-800 to-black rounded-full flex items-center justify-center mr-3">
                        <span class="text-white text-xl">⚡</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-gray-800 text-sm">GitHub</h4>
                        <p class="text-gray-600 text-xs">View Code</p>
                    </div>
                </a>

                <a href="https://leetcode.com/u/Poovu_07/" target="_blank" rel="noopener noreferrer" class="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
                    <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mr-3">
                        <span class="text-white text-xl font-bold">L</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-gray-800 text-sm">LeetCode</h4>
                        <p class="text-gray-600 text-xs">View Profile</p>
                    </div>
                </a>
            </div>
        </div>
    `;
}

// Render Functions
function renderHome() {
    return `
        <div class="min-h-screen flex items-center justify-center px-4">
            <div class="text-center animate-fade-in">
                <div class="mb-8 relative inline-block">
                    <div class="w-40 h-40 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl animate-float ring-4 ring-white/50">
                        <img src="${PROFILE_IMAGE}" alt="Poovarasan P" class="w-full h-full object-cover profile-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <span class="profile-fallback w-full h-full items-center justify-center" style="display:none">PP</span>
                    </div>
                    <div class="absolute -bottom-2 -right-2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                        <span class="text-white text-3xl">💻</span>
                    </div>
                </div>
                <h1 class="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Poovarasan P
                </h1>
                <p class="text-2xl text-gray-600 mb-6">Aspiring Software Developer</p>
                <p class="text-lg text-gray-500 mb-8">B.Tech CSBS III Year Student</p>
                <button onclick="navigateTo('about')" class="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce-gentle focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" aria-label="Explore my work">
                    Explore My Work
                </button>
            </div>
        </div>
    `;
}

function renderAbout() {
    return `
        <div class="animate-fade-in p-8">
            <h2 class="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h2>
            <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <p class="text-gray-700 text-lg leading-relaxed">${aboutSummary}</p>
            </div>
            ${getContactSection()}
        </div>
    `;
}

function renderSkills() {
    let html = `
        <div class="animate-fade-in p-8">
            <h2 class="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    `;

    Object.entries(skills).forEach(([category, items]) => {
        html += `
            <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-up">
                <h3 class="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    <div class="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 animate-pulse"></div>
                    ${category}
                </h3>
                <div class="flex flex-wrap gap-2">
        `;

        items.forEach(skill => {
            html += `
                <span class="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                    ${skill}
                </span>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    html += `
            </div>
            ${getContactSection()}
        </div>
    `;

    return html;
}

function renderProjects() {
    let html = `
        <div class="animate-fade-in p-8">
            <h2 class="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</h2>
            <div class="space-y-6">
    `;

    projects.forEach(project => {
        html += `
            <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-up">
                <div class="flex justify-between items-start mb-4">
                    <h3 class="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                        ${project.title}
                    </h3>
                    <div class="flex space-x-2">
                        ${project.github ? `
                            <a href="${project.github}" target="_blank" rel="noopener noreferrer"
                               class="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                               aria-label="View on GitHub">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        ` : ''}
                        ${project.link ? `
                            <a href="${project.link}" target="_blank" rel="noopener noreferrer"
                               class="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                               aria-label="View live demo">
                                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                            </a>
                        ` : ''}
                    </div>
                </div>
                <ul class="space-y-3 mb-4">
        `;

        project.points.forEach(point => {
            html += `
                <li class="flex items-start text-gray-700">
                    <div class="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>${point}</span>
                </li>
            `;
        });

        html += `
                </ul>
                ${project.technologies ? `
                    <div class="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200">
                        ${project.technologies.map(tech => `
                            <span class="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-xs font-medium">
                                ${tech}
                            </span>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    });

    html += `
            </div>
            ${getContactSection()}
        </div>
    `;

    return html;
}

function renderEducation() {
    let html = `
        <div class="animate-fade-in p-8">
            <h2 class="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</h2>
            <div class="space-y-6">
    `;

    education.forEach(edu => {
        html += `
            <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-up">
                <div class="flex items-center mb-3">
                    <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                        <span class="text-white text-2xl">🎓</span>
                    </div>
                    <span class="text-sm font-semibold text-purple-600">${edu.year}</span>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">${edu.degree}</h3>
                <p class="text-gray-600">${edu.institution}</p>
            </div>
        `;
    });

    html += `
            </div>
            ${getContactSection()}
        </div>
    `;

    return html;
}

function renderCertifications() {
    let html = `
        <div class="animate-fade-in p-8">
            <h2 class="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</h2>
            <div class="space-y-6">
    `;

    certifications.forEach(cert => {
        html += `
            <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-up">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                        <span class="text-white text-2xl">🏆</span>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-800">${cert.provider}</h3>
                </div>
                <ul class="space-y-3 ml-16">
        `;

        cert.courses.forEach(course => {
            const courseName = typeof course === 'string' ? course : course.name;
            const courseLink = typeof course === 'object' && course.link ? course.link : null;
            html += `
                <li class="flex items-center justify-between gap-4 text-gray-700 flex-wrap">
                    <div class="flex items-center min-w-0 flex-1">
                        <div class="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 flex-shrink-0 mt-1.5"></div>
                        <span>${courseName}</span>
                    </div>
                    ${courseLink ? `
                        <a href="${courseLink}" target="_blank" rel="noopener noreferrer" class="cert-view-link inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-white hover:bg-blue-600 rounded-lg border border-blue-600 transition-all duration-300 flex-shrink-0" aria-label="View ${courseName} certificate">
                            <span>View certificate</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        </a>
                    ` : ''}
                </li>
            `;
        });

        html += `
                </ul>
            </div>
        `;
    });

    html += `
            </div>
            ${getContactSection()}
        </div>
    `;

    return html;
}

const RESUME_PDF = 'Poovarasan_Resume.pdf';

function renderResume() {
    return `
        <div class="animate-fade-in p-8 resume-page">
            <h2 class="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">My Resume</h2>
            <div class="resume-pdf-wrapper bg-white rounded-2xl shadow-xl overflow-hidden">
                <iframe src="${RESUME_PDF}#toolbar=1" class="resume-pdf-iframe" title="Poovarasan P Resume"></iframe>
            </div>
        </div>
    `;
}

function renderContact() {
    return `
        <div class="animate-fade-in p-8">
            <h2 class="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contact Me</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a href="mailto:poovarasanpalani07@gmail.com" class="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center animate-slide-up">
                    <div class="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                        <span class="text-white text-3xl">✉</span>
                    </div>
                    <div>
                        <h3 class="font-bold text-gray-800 mb-1">Email</h3>
                        <p class="text-gray-600 text-sm">poovarasanpalani07@gmail.com</p>
                    </div>
                </a>

                <a href="tel:8807837233" class="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center animate-slide-up">
                    <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                        <span class="text-white text-3xl">☎</span>
                    </div>
                    <div>
                        <h3 class="font-bold text-gray-800 mb-1">Phone</h3>
                        <p class="text-gray-600 text-sm">8807837233</p>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/poovarasan-p-a43255272" target="_blank" rel="noopener noreferrer" class="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center animate-slide-up">
                    <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4">
                        <span class="text-white text-3xl">in</span>
                    </div>
                    <div>
                        <h3 class="font-bold text-gray-800 mb-1">LinkedIn</h3>
                        <p class="text-gray-600 text-sm">poovarasan-p-a43255272</p>
                    </div>
                </a>

                <a href="https://github.com/POOVARASAN0713" target="_blank" rel="noopener noreferrer" class="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center animate-slide-up">
                    <div class="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center mr-4">
                        <span class="text-white text-3xl">⚡</span>
                    </div>
                    <div>
                        <h3 class="font-bold text-gray-800 mb-1">GitHub</h3>
                        <p class="text-gray-600 text-sm">POOVARASAN0713</p>
                    </div>
                </a>

                <a href="https://leetcode.com/u/Poovu_07/" target="_blank" rel="noopener noreferrer" class="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center animate-slide-up">
                    <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mr-4">
                        <span class="text-white text-3xl font-bold">L</span>
                    </div>
                    <div>
                        <h3 class="font-bold text-gray-800 mb-1">LeetCode</h3>
                        <p class="text-gray-600 text-sm">Poovu_07</p>
                    </div>
                </a>
            </div>
        </div>
    `;
}

// Navigation
function navigateTo(section) {
    activeSection = section;
    renderContent();
    updateNavigation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderContent() {
    const mainContent = document.getElementById('main-content');

    switch (activeSection) {
        case 'home':
            mainContent.innerHTML = renderHome();
            break;
        case 'about':
            mainContent.innerHTML = renderAbout();
            break;
        case 'skills':
            mainContent.innerHTML = renderSkills();
            break;
        case 'projects':
            mainContent.innerHTML = renderProjects();
            break;
        case 'education':
            mainContent.innerHTML = renderEducation();
            break;
        case 'certifications':
            mainContent.innerHTML = renderCertifications();
            break;
        case 'contact':
            mainContent.innerHTML = renderContact();
            break;
        case 'resume':
            mainContent.innerHTML = renderResume();
            break;
    }
}

function updateNavigation() {
    // Desktop nav
    const desktopNav = document.getElementById('desktop-nav');
    desktopNav.innerHTML = sections.map(section => `
        <button
            onclick="navigateTo('${section.id}')"
            class="px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                activeSection === section.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:bg-gray-100'
            }"
            aria-label="Navigate to ${section.label} section"
            ${activeSection === section.id ? 'aria-current="page"' : ''}
        >
            ${section.label}
        </button>
    `).join('');

    // Mobile nav
    const mobileNav = document.getElementById('mobile-nav');
    mobileNav.innerHTML = sections.map(section => `
        <button
            onclick="navigateTo('${section.id}'); toggleMobileMenu();"
            class="w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                activeSection === section.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
            }"
            aria-label="Navigate to ${section.label} section"
            ${activeSection === section.id ? 'aria-current="page"' : ''}
        >
            <span>${section.label}</span>
        </button>
    `).join('');
}

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menuIcon = document.getElementById('menu-icon');
    const isHidden = mobileNav.classList.contains('hidden');

    mobileNav.classList.toggle('hidden');
    if (!isHidden) {
        mobileNav.classList.add('animate-slide-down');
    }

    // Update ARIA attribute
    menuBtn.setAttribute('aria-expanded', !isHidden);

    // Animate menu icon
    if (isHidden) {
        menuIcon.style.transform = 'rotate(90deg)';
    } else {
        menuIcon.style.transform = 'rotate(0deg)';
    }
}

// Scroll to top functionality
function initScrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Mobile menu button
document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);

// Initialize
renderContent();
updateNavigation();
initScrollToTop();
