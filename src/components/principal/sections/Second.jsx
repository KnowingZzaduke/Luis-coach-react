import FondoBenefits from "/img/fondo-beneficios.png";
export function Second() {
  const benefits = [
    {
      id: 1,
      img: "/img/beneficio-1.webp",
      description: "Administra correctamente tus finanzas",
    },
    {
      id: 2,
      img: "/img/beneficio-2.webp",
      description: "Ahorra tiempo",
    },
    {
      id: 3,
      img: "/img/beneficio-3.webp",
      description: "Aprende nuevas habilidades financieras",
    },
  ];
  return (
    <section className="section_benefits">
      <h2>Beneficios</h2>
      <div className="content_benefits">
        {benefits.map((bene) => (
          <div className="benefit" key={bene.id}>
            <div className="img">
              <img src={FondoBenefits} className="img_found" />
              <img src={bene.img} className="img_b"/>
            </div>
            <p>{bene.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
