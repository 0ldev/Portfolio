import { Link } from 'react-router-dom';

const projects = [
  { id: 1, name: 'Pyhton Sprint', description: 'Projeto focado no desenvolvimento de uma API utilizando Python para gerenciar uma aplicação de Fantasy Racing' },
  { id: 2, name: 'Checkpoint WebDev', description: 'Projeto para criar um portifolio usando react e rotas dinamicas' },
  { id: 3, name: 'Projeto 3', description: 'Descrição do Projeto 3' },
  // Add more projects as needed
];

function Projects() {
  return (
    <div className="p-6 centered">
      <h1 className="text-3xl font-bold mb-4 text-center">Meus Projetos</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border p-4 rounded-md shadow hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-darkSecondary text-black dark:text-white"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
            <p className="mb-4">{project.description}</p>
            <Link
              to={`/projects/${project.id}`}
              className="text-secondary dark:text-primary hover:underline"
            >
              Ver mais
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
