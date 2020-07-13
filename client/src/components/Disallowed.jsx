import React from "react";
import styles from "../components/App.module.css";
import {
  Row,
  Col,
  CustomInput,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";

const Disallowed = (props) => {
  return (
    <>
      <Form className={styles.unconfirmedBox}>
        <FormGroup>
          <fieldset>
            <legend style={{ color: "white" }} className={styles.title}>
              {props.title}
            </legend>
            <div className={styles.detailsContext}>
              <p>Ads targeting: </p>
              <Row form>
                <Col md={3}>
                  <Input onChange={props.ads1Handler} type="text" />
                </Col>
                <Col md={3}>
                  <Input onChange={props.ads2Handler} type="text" />
                </Col>
                <Col md={3}>
                  <Input onChange={props.ads3Handler} type="text" />
                </Col>
              </Row>
            </div>
            <div className={styles.detailsContext}>
              <p>Keywords bidding on: </p>
              <Row form>
                <Col md={3}>
                  <Input onChange={props.binding1Handler} type="text" />
                </Col>
                <Col md={3}>
                  <Input onChange={props.binding2Handler} type="text" />
                </Col>
                <Col md={3}>
                  <Input onChange={props.binding3Handler} type="text" />
                </Col>
              </Row>
            </div>

            <Row
              style={{ display: props.lpDisplay }}
              className={styles.detailsContext}
            >
              <Col md="4.5" className="white">
                {" "}
                <Label for="exampleCheckbox">
                  Ad LP is related to the campaign:{" "}
                </Label>
              </Col>

              <Col md="1" className="align-self-center white">
                <CustomInput
                  onChange={props.lpHandler}
                  id="exampleCustomRadio"
                  value="Yes"
                  type="radio"
                  name="radio"
                  label="Yes"
                />
              </Col>
              <Col md="1" className="align-self-center white">
                {" "}
                <CustomInput
                  id="exampleCustomRadio2"
                  value="No"
                  onChange={props.lpHandler}
                  type="radio"
                  name="radio"
                  label="No"
                />
              </Col>
              <Col md="3" className="align-self-center white">
                {" "}
                <CustomInput
                  id="exampleCustomRadio3"
                  value="NoRep"
                  onChange={props.lpHandler}
                  type="radio"
                  name="radio"
                  label=" No Landing Page"
                />
              </Col>
            </Row>
            <Row
              style={{ display: props.lpDisplay }}
              className={styles.detailsContext}
            >
              <Col>
                <CustomInput
                  className={styles.white}
                  value="yes"
                  type="switch"
                  id="exampleCustomSwitch"
                  name="customSwitch"
                  label={props.fliping}
                  onChange={props.CheckedHandler}
                />
              </Col>
            </Row>
            <Row
              style={{ display: props.lpDisplay }}
              className={styles.detailsContext}
            >
              <Col>
                <CustomInput
                  className={styles.white}
                  value="yes"
                  type="switch"
                  id="exampleCustomSwitch2"
                  name="customSwitch2"
                  label="Ads, keywords and LP are NOT related to the campaign."
                  onChange={props.CheckedHandler2}
                />
              </Col>
            </Row>
            <Row
              style={{ display: props.reproDisplay }}
              className={styles.detailsContext}
            >
              <Col md="1.8">
                <p>URL Repros to:</p>{" "}
              </Col>
              <Col md="10">
                <Input
                  placeholder="hxxps://"
                  style={{ width: "60%" }}
                  onChange={props.reproHandler}
                  type="text"
                />
              </Col>
            </Row>

            <Row className={styles.detailsContext}>
              <Col>
                {" "}
                <p>Reasoning:</p>
                <Input
                  placeholder="Adding Note"
                  style={{ width: "80%" }}
                  onChange={props.noteHandler}
                  type="text"
                />
              </Col>
            </Row>
            <Row className={styles.detailsContext}>
              <Col md="1.8">
                {" "}
                <p>Peer review by:</p>{" "}
              </Col>
              <Col md="5">
                {" "}
                <Input onChange={props.reviewHandler} type="text" />
              </Col>
            </Row>
            <Row
              style={{ display: props.lpDisplay }}
              className={styles.detailsContext}
            >
              <Col style={{ padding: 0 }} md="12">
                <Alert color="primary">{props.msgAlert}</Alert>
              </Col>
            </Row>
          </fieldset>
        </FormGroup>
      </Form>
    </>
  );
};

export default Disallowed;
