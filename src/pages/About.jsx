function About() {
    return (
      <div className="p-6 centered">
        <div className="flex flex-col md:flex-row items-center max-w-4xl">
          <img
            src="/path-to-your-photo.jpg"
            alt="Minha Foto"
            className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">Sobre Mim</h1>
            <p>
              Olá! Eu sou um engenheiro de software com experiência em desenvolvimento web e
              apaixonado por novas tecnologias.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  