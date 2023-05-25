import React from "react";

import {
  Form,
  Row,
  Col,
  Button
} from "react-bootstrap";

function Layout() {
  return (
    <div className="form">
        <div className="div-1">
          <h1>Tailor Appointment Form</h1>
          <h3>Request an appointment at our Studio.</h3>
          <p>What is your personal style and your preffered look</p>
        </div>
          <Form>
          <Form.Group as={Row} controlId="formGridName">
              <Form.Label column sm={3}>
              What's your name?
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="name" placeholder="Type your answer here..." />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formGridServices">
              <Form.Label column sm={3}>
              What services would you like to book?
              </Form.Label>
              <Col sm={9}>
                <Form.Control as="select" defaultValue="Choose...">
                <option>select...</option>
                  <option>Measurement</option>
                  <option>Wardrobe Capsule Design</option>
                  <option>Bridals</option>
                  <option>Personal Shopping</option>
                  <option>Alterations</option>
                  <option>General Consultation</option>

                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formGridPhoneNumber">
              <Form.Label column sm={3}>
              Phone Number
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="phonenumber" placeholder="We'll need this to confirm available times" />
              </Col>
            </Form.Group>
            <br/>

            <Form.Group as={Row} controlId="formGridAddress1">
              <Form.Label column sm={3}>Address</Form.Label>
              <Col sm={9}>
              <Form.Control type="address" placeholder="7a Milverton Rd Ikoyi" />
              </Col>
            </Form.Group>
            <br/>

            <Form.Group as={Row} controlId="formGridDate">
              <Form.Label column sm={3}>
              Appointment date
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="date" placeholder="DD / MM / YYYY"/>
              </Col>
            </Form.Group>
            <br/>


            <Form.Group as={Row} controlId="formGridHairType">
              <Form.Label column sm={3}>
              What's your size?
              </Form.Label>
              <Col sm={9}>
                <Form.Control as="select" defaultValue="Choose...">
                <option>select...</option>
                  <option>0-8</option>
                  <option>10-16</option>
                  <option>16-26</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formGridEmail">
              <Form.Label column sm={3}>
              Provide email to receive special offers and discounts from us?
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="email" placeholder="name@example.com" />
              </Col>

              <Col sm={12} className="btn">
                <Button variant="primary" type="submit">Submit</Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
  );
}

export default Layout;