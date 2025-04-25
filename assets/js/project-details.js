// Project details handler
document.addEventListener('DOMContentLoaded', function() {
  // Get project parameter from URL
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('project');
  
  // Project data (in a real project, this would come from a database or API)
  const projectData = {
    'app1': {
      title: 'Mobile Task Management App',
      category: 'App Development',
      date: 'January 15, 2024',
      client: 'TaskMaster Inc.',
      startDate: 'November 10, 2023',
      endDate: 'January 10, 2024',
      teamSize: '4 members',
      categoryDetail: 'Mobile App',
      url: 'https://taskmaster-app.example.com',
      githubUrl: 'https://github.com/username/taskmaster-app',
      image: 'assets/img/portfolio/app-1.jpg',
      description: 'A comprehensive task management application designed to help users organize their work and personal tasks efficiently. Features include customizable categories, priority levels, due dates, and progress tracking.',
      prev: 'branding1',  // Previous project ID
      next: 'product1'    // Next project ID
    },
    'product1': {
      title: 'E-commerce Product Platform',
      category: 'Web Development',
      date: 'February 22, 2024',
      client: 'ShopEasy',
      startDate: 'December 5, 2023',
      endDate: 'February 15, 2024',
      teamSize: '6 members',
      categoryDetail: 'E-commerce',
      url: 'https://shopeasy.example.com',
      githubUrl: 'https://github.com/username/shopeasy-platform',
      image: 'assets/img/portfolio/product-1.jpg',
      description: 'A full-featured e-commerce platform with inventory management, secure payment processing, customer accounts, and an intuitive admin dashboard. The system supports multiple product categories, discount codes, and detailed analytics.',
      prev: 'app1',       // Previous project ID
      next: 'branding1'   // Next project ID
    },
    'branding1': {
      title: 'Corporate Branding Project',
      category: 'Branding',
      date: 'March 10, 2024',
      client: 'InnovateTech',
      startDate: 'January 20, 2024',
      endDate: 'March 1, 2024',
      teamSize: '3 members',
      categoryDetail: 'Branding & Identity',
      url: 'https://innovatetech.example.com',
      githubUrl: 'https://github.com/username/innovatetech-brand-assets',
      image: 'assets/img/portfolio/branding-1.jpg',
      description: 'A complete corporate rebranding project that included logo design, color scheme development, typography selection, brand guidelines documentation, and creation of various marketing materials.',
      prev: 'product1',   // Previous project ID
      next: 'app1'        // Next project ID
    }
  };
  
  // Default to first project if no parameter is provided
  const currentProject = projectData[projectId] || projectData['app1'];
  
  // Update page elements with project data
  document.getElementById('projectTitle').textContent = currentProject.title;
  document.getElementById('projectCategory').textContent = currentProject.category;
  document.getElementById('projectDate').textContent = currentProject.date;
  document.getElementById('projectClient').textContent = currentProject.client;
  document.getElementById('projectStartDate').textContent = currentProject.startDate;
  document.getElementById('projectEndDate').textContent = currentProject.endDate;
  document.getElementById('projectTeamSize').textContent = currentProject.teamSize;
  document.getElementById('projectCategoryDetail').textContent = currentProject.categoryDetail;
  document.getElementById('projectUrl').href = currentProject.url;
  document.getElementById('githubLink').href = currentProject.githubUrl;
  document.getElementById('projectImage').src = currentProject.image;
  document.getElementById('projectDescription').textContent = currentProject.description;
  
  // Set up next/previous project links
  const prevProjectBtn = document.querySelector('.prev-project');
  const nextProjectBtn = document.querySelector('.next-project');
  
  if (prevProjectBtn) {
    prevProjectBtn.href = `portfolio-details.html?project=${currentProject.prev}`;
  }
  
  if (nextProjectBtn) {
    nextProjectBtn.href = `portfolio-details.html?project=${currentProject.next}`;
  }
  
  // Update page title
  document.title = currentProject.title + ' - Portfolio Details';
});
