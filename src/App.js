import React, {useState} from 'react';
import logo from './logo.svg';
import test from './undraw_work_time_lhoj.svg';
import './App.css';
import {
  Navbar, Nav, NavDropdown, Form, FormControl, Button, Row, Col, Container
  , Tabs, Tab
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

  const [activeTab,setActiveTab] = useState("tab1");

  const handleSelect = (selectedTab) => {
    setActiveTab(selectedTab)
  }
  
  return (
    <div className="App">

      <header>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Row style={{ width: "100%" }}>
              <Col lg={4}>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
              </Col>
              <Col lg={8}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#candidates">Candidates</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Button variant="primary" className="margin-right">Post a Job</Button>
                    <Button variant="danger">Want a Job</Button>
                  </Nav>
                </Navbar.Collapse>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </header>
      <main>
        <Row>
          <Col style={{ paddingTop: "180px" }}>
            <div>We have 200,000 great job offers you deserve!</div>
            <div style={{ marginBottom: "130px" }}>Get Your Dream Job</div>
            <div style={{ marginLeft: "30px" }}>
              <Tabs defaultActiveKey="tab1" className="myClass" activeKey={activeTab} onSelect={handleSelect}>
                <Tab eventKey="tab1" title="Find a Job">
                  <Form style={{ padding: "10px" }}>
                    <Form.Row>
                      <Col>
                        <Form.Control placeholder="eg. Graphic, Web developer" />
                      </Col>
                      <Col>
                        <Form.Control as="select" defaultValue="Category">
                          <option>Category</option>
                          <option>Information Technology</option>
                          <option>Sales</option>
                        </Form.Control>
                      </Col>
                      <Col>
                        <Form.Control placeholder="Location" />
                      </Col>
                      <Col>
                        <Button variant="danger">Search</Button>
                      </Col>
                    </Form.Row>
                  </Form>
                </Tab>
                <Tab eventKey="tab2" title="Find a Candidate">
                  <Form style={{ padding: "10px" }}>
                    <Form.Row>
                      <Col>
                        <Form.Control placeholder="eg. Graphic, Web developer" />
                      </Col>
                      <Col>
                        <Form.Control as="select" defaultValue="Experience">
                          <option>Experience</option>
                          <option>0-2 yrs</option>
                          <option>2-5 yrs</option>
                          <option>5-10 yrs</option>
                          <option>>10 yrs</option>
                        </Form.Control>
                      </Col>
                      <Col>
                        <Form.Control placeholder="Location" />
                      </Col>
                      <Col>
                        <Button variant="danger">Search</Button>
                      </Col>
                    </Form.Row>
                  </Form>
                </Tab>
              </Tabs>
            </div>

          </Col>
          <Col>
            <img src={test} className="App-logo" alt="logo" style={{ height: "84vmin" }} />
          </Col>
        </Row>
      </main>
    </div>
  );
}

export default App;
