import React from 'react';

const Work = () => {
  // Array of demo projects
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "Developed a responsive e-commerce website using React for the frontend and Node.js with Express for the backend. Integrated payment gateways and implemented user authentication and authorization functionalities.",
      client: "ABC Company",
      duration: "January 2022 - March 2022"
    },
    {
      id: 2,
      title: "Social Media Platform",
      description: "Built a social media platform from scratch using MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented features like user profiles, post creation, commenting, and liking functionality.",
      client: "XYZ Corporation",
      duration: "April 2022 - June 2022"
    },
    {
      id: 3,
      title: "Task Management Application",
      description: "Designed and developed a task management application with React for the frontend and Django for the backend. Implemented features like task creation, assignment, and tracking.",
      client: "QRS Industries",
      duration: "July 2022 - September 2022"
    },
    // Add more projects here
    {
      id: 4,
      title: "Real Estate Listing Website",
      description: "Developed a real estate listing website using React and Redux for state management. Integrated Google Maps API for property location visualization and implemented search and filter functionalities.",
      client: "DEF Corporation",
      duration: "October 2022 - December 2022"
    },
    {
      id: 5,
      title: "Online Learning Platform",
      description: "Built an online learning platform using Django for the backend and React for the frontend. Implemented features like course management, user enrollment, and progress tracking.",
      client: "GHI Company",
      duration: "January 2023 - March 2023"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Created a personal portfolio website using HTML, CSS, and JavaScript. Designed and developed a responsive layout to showcase projects, skills, and experience.",
      client: "JKL Industries",
      duration: "April 2023 - June 2023"
    },
    {
      id: 7,
      title: "Blog Platform",
      description: "Developed a blog platform with React for the frontend and Flask for the backend. Implemented features like user registration, post creation, and commenting functionality.",
      client: "MNO Corporation",
      duration: "July 2023 - September 2023"
    },
    {
      id: 8,
      title: "Inventory Management System",
      description: "Designed and developed an inventory management system using MERN stack. Implemented features like product catalog, order management, and reporting functionalities.",
      client: "PQR Company",
      duration: "October 2023 - December 2023"
    },
    {
      id: 9,
      title: "Appointment Scheduling App",
      description: "Built an appointment scheduling application using React Native for cross-platform mobile development. Integrated calendar APIs for scheduling and reminders.",
      client: "STU Industries",
      duration: "January 2024 - March 2024"
    },
    {
      id: 10,
      title: "Restaurant Management System",
      description: "Developed a restaurant management system using Angular for the frontend and Spring Boot for the backend. Implemented features like table booking, order management, and menu customization.",
      client: "VWX Corporation",
      duration: "April 2024 - June 2024"
    },
    {
      id: 11,
      title: "E-learning Platform",
      description: "Designed and developed an e-learning platform using Vue.js for the frontend and Laravel for the backend. Integrated video streaming and assessment features.",
      client: "YZA Solutions",
      duration: "July 2024 - September 2024"
    },
    {
      id: 12,
      title: "Fitness Tracking App",
      description: "Built a fitness tracking application using Flutter for mobile app development. Integrated sensors for activity tracking and implemented workout planning and progress tracking features.",
      client: "Fitify Inc.",
      duration: "October 2024 - December 2024"
    },
    
  ];

  return (
    <div className=' text-white mt-10' id='work'>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4 ">MY ALL Work HERE : </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map through the projects array and render each project */}
          {projects.map(project => (
            <div key={project.id} className="border border-gray-600 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <p className="text-gray-400">Client: {project.client}</p>
              <p className="text-gray-400">Duration: {project.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
