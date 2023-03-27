import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="py-3">
      <Container>
        <Row>
          <Col xs={12} sm={6}>
            <p>&copy; 2023 Miku Portfolio. All rights reserved.</p>
          </Col>
          <Col xs={12} sm={6}>
            <ul className="list-inline text-end text-sm-right mb-0">
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/miku-fujiwara/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com/miku.22"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://github.com/mikufujiwara"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-square-github"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
