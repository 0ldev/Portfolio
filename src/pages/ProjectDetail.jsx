import { useParams } from 'react-router-dom';

const projectData = {
  1: { name: 'Pyhton Sprint', description: 'Detalhes sobre o Projeto 1' },
  2: { name: 'Projeto 2', description: 'Detalhes sobre o Projeto 2' },
  3: { name: 'Projeto 3', description: 'Detalhes sobre o Projeto 3' },
  // Add more project details as needed
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return <div className="p-6 text-center">Projeto não encontrado</div>;
  }

  return (
    <div className="p-6 centered">
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <p className="max-w-2xl text-center">{project.description}</p>
    </div>
  );
}

export default ProjectDetail;
