import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      className="p-6 centered bg-cover bg-center"
      style={{ backgroundImage: 'url(https://techcrunch.com/wp-content/uploads/2014/12/matrix.jpg)', minHeight: '80vh' }}
    >
      <h1 className="title">
        Bem-vindo ao meu portfólio!
      </h1>
      <p className="subtitle">
        Engenheiro de software apaixonado por tecnologia e inovação.
      </p>
      <Link to="/projects" className="btn">
        Veja meus projetos
      </Link>
    </div>
  );
}

export default Home;
