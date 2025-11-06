function CharacterCard({ character }) {
  const { name, image, race, ki, maxKi } = character;

  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <img
          src={image}
          alt={name}
          className="card-img-top"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{name}</h5>
          <div className="mb-2">
            <span className="badge bg-primary me-2">{race || "Desconocido"}</span>
          </div>
          <p className="card-text">
            <strong>Ki Base:</strong> {ki || "N/A"}
          </p>
          <p className="card-text">
            <strong>Ki Máximo:</strong> {maxKi || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;