function Hero() {
  return (
    <div className="bg-primary text-white py-5">
      <div className="container text-center">
        <h1 className="display-3 fw-bold mb-3"> dragon ball API</h1>
        <p className="lead mb-4">
          dragon balll con tus personajes favoritos 
        </p>
        <div className="d-flex gap-3 justify-content-center">
          <a href="#characters" className="btn btn-light btn-lg">
            ver personajes
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;