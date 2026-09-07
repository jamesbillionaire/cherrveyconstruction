import { Container } from "@/components/layout/container";

export function CredibilityStrip() {
  return (
    <section className="cv-clients" aria-label="Government and institutional project experience">
      <Container className="cv-client-layout">
        <p className="cv-client-label">Government & institutional project experience</p>
        <div className="cv-client-names">
          <p>Philippine Ports Authority<span>Port of Cagayan de Oro</span></p>
          <p>Civil Service Commission<span>Regional Office X</span></p>
          <p>Department of Trade and Industry<span>Northern Mindanao</span></p>
          <p>Environmental Management Bureau<span>Region IX</span></p>
        </div>
      </Container>
    </section>
  );
}
