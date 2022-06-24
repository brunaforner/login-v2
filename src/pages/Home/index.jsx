import { LayoutComponents } from "../../components/layoutComponents";

export const Home = () => {
  return (
    <LayoutComponents>
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            <span style={{ color: "#fff" }}>Fianças</span>
          </h1>
          <br />
          <br />
          <p style={{ color: "#f4f4f4" }} className="home-description">
            Aplicativo para auxiliar na organização financeiras.
          </p>
        </div>
      </div>
    </LayoutComponents>
  );
};
