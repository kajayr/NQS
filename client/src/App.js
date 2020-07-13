import React, { Component } from "react";
import styles from "./components/App.module.css";
import "./responsive.css";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  Form,
} from "reactstrap";
import Header from "./components/header";
import Unconfirmed from "./components/unconfirmed";
import TechScamMO from "./components/TechScamMO";
import PTS3 from "./components/PTS3";
import axios from "axios";
import Phishing from "./components/Phishing";
import TechScamMain from "./components/TechScamMain";
import Crypto from "./components/Crypto";
import Deceptive from "./components/Deceptive";
import Disallowed from "./components/Deceptive";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      inputData: "",
      database: [],
      ads1: "",
      ads2: "",
      ads3: "",
      binding1: "",
      binding1Alert: "black",
      binding2: "",
      binding2Alert: "black",
      binding3: "",
      binding3Alert: "black",
      lp: "",
      highRisk: "",
      isChecked: false,
      isChecked2: false,
      isChecked3: false,
      customer: "",
      repro: "",
      title: "",
      pTitle: "",
      color: "",
      showUnconfirmed: false,
      TechScam: false,
      pts: false,
      phishing: false,
      techscamMain: false,
      crypto: false,
      deceptive: false,
      disallowed: false,
      showData: false,
      showResult: false,
      selectValueDropDown: "",
      note: "",
      reviewName: "",
      date: new Date().toLocaleString(),
      todo: "underline",
      msgLP: "",
      fliping: "",
      msgTodo: "",
      reproDisplay: "",
      msgAlertScreenShot: "",
      msgAlertPhishingForm: "",
      alertShow: "none",
      lpDisplay: "",
    };
    //states
    this.unConfirmedHandler.bind(this);
    this.techScamHandler.bind(this);
    this.pts.bind(this);
    this.phishingHandler.bind(this);
    this.cryptoHandler.bind(this);
    this.deceptiveHandler.bind(this);
    this.disallowedHandler.bind(this);
    this.sendData.bind(this);
    this.showReport.bind(this);
    this.todos.bind(this);
  }
  //options
  todos = (e) => {
    let value = e.target.checked;
    if (value) {
      this.setState({ todo: "line-through" });
      console.log(this.state.todo);
    } else {
      this.setState({ todo: "underline" });
      console.log(this.state.todo);
      value = "on";
    }
  };
  ads1Handler = (e) => {
    let updatedAd1 = e.target.value;
    this.setState({
      ads1: "“" + updatedAd1 + "”",
    });
  };
  ads2Handler = (e) => {
    let updatedAd2 = e.target.value;
    this.setState({
      ads2: " | “" + updatedAd2 + "”",
    });
  };
  ads3Handler = (e) => {
    let updatedAd3 = e.target.value;
    this.setState({
      ads3: " | “" + updatedAd3 + "”",
    });
  };
  reviewHandler = (e) => {
    let reviewPerson = e.target.value;
    this.setState({
      reviewName: reviewPerson,
    });
  };
  binding1Handler = (e) => {
    let updatedBinding1 = e.target.value;
    this.setState({
      binding1: "“" + updatedBinding1 + "”",
    });
    if (
      updatedBinding1 === "login" ||
      updatedBinding1 === "official" ||
      updatedBinding1 === "bank"
    ) {
      this.setState({ binding1Alert: "red" });
    }
  };
  binding2Handler = (e) => {
    let updatedBinding2 = e.target.value;
    this.setState({
      binding2: " | “" + updatedBinding2 + "”",
    });
    if (
      updatedBinding2 === "login" ||
      updatedBinding2 === "official" ||
      updatedBinding2 === "bank"
    ) {
      this.setState({ binding2Alert: "red" });
    }
  };
  binding3Handler = (e) => {
    let updatedBinding3 = e.target.value;
    this.setState({
      binding3: " | “" + updatedBinding3 + "”",
    });
    if (
      updatedBinding3 === "login" ||
      updatedBinding3 === "official" ||
      updatedBinding3 === "bank"
    ) {
      this.setState({ binding3Alert: "red" });
    }
  };

  lpHandler = (e) => {
    let updatedlp = e.target.value;
    this.setState({
      lp: updatedlp,
    });
  };

  highRisk = (e) => {
    let updatedHighRisk = e.target.value;
    this.setState({
      highRisk: updatedHighRisk,
    });
  };

  reproHandler = (e) => {
    let hxxp = e.target.value;
    if (hxxp[1] && hxxp[2] === "t") {
      let firstPart = hxxp.slice(0, 1);
      let lastPart = hxxp.slice(3, hxxp.length);
      let joinLinks = `${firstPart}xx${lastPart}`;
      this.setState({
        repro: joinLinks,
      });
    }
  };

  noteHandler = (e) => {
    let noteT = e.target.value;
    this.setState({
      note: noteT,
    });
  };

  CheckedHandler = (e) => {
    let checking = e.target.checked;
    console.log(checking);
    if (checking === true) {
      this.setState({ isChecked: true });
    } else {
      this.setState({ isChecked: false });
    }
  };

  CheckedHandler2 = (e) => {
    let checking = e.target.checked;
    console.log(checking);
    if (checking === true) {
      this.setState({ isChecked2: true });
    } else {
      this.setState({ isChecked2: false });
    }
  };

  CheckedHandler3 = (e) => {
    let checking = e.target.checked;
    console.log(checking);
    if (checking === true) {
      this.setState({ isChecked3: true });
    } else {
      this.setState({ isChecked3: false });
    }
  };

  //reset
  resetAllHandler = () => {
    this.setState({
      ads1: "",
      ads2: "",
      ads3: "",
      binding1: "",
      binding1Alert: "black",
      binding2: "",
      binding2Alert: "black",
      binding3: "",
      binding3Alert: "black",
      lp: "",
      highRisk: "",
      isChecked: false,
      isChecked2: false,
      isChecked3: false,
      customer: "",
      repro: "",
      title: "",
      pTitle: "",
      showUnconfirmed: false,
      TechScam: false,
      pts: false,
      phishing: false,
      techscamMain: false,
      crypto: false,
      deceptive: false,
      disallowed: false,
      selectValueDropDown: "",
      note: "",
      reviewName: "",
      date: new Date().toLocaleString(),
    });
  };
  //pages
  unConfirmedHandler = () => {
    this.setState({
      showUnconfirmed: true,
      title: "Unconfirmed",
      pTitle:
        "Unconfirmed. Not enough strong evidence to impact for Phishing or TechScam MO",
      msgLP: "Ads, keywords and LP are all related to the campaign.",
      fliping: "No evidence shown in change history of flipping.",
      msgTodo: "",
      reproDisplay: "none",
      msgAlert: "",
      lpDisplay: "block",
      TechScam: false,
      pts: false,
      showData: false,
      techscamMain: false,
      crypto: false,
    });
  };

  techScamHandler = () => {
    this.setState({
      TechScam: true,
      title: "TechScam MO",
      pTitle: "Impacted for Phishing TechScam MO",
      msgLP: "Ads, keywords and LP are NOT related to the campaign.",
      fliping: "Evidence shown in change history of flipping.",
      msgTodo: "Screenshot of The Landing Page",
      reproDisplay: "block",
      msgAlertScreenShot: "Add Screenshot of The Landing Page",
      lpDisplay: "block",
      showUnconfirmed: false,
      pts: false,
      showData: false,
      techscamMain: false,
      crypto: false,
    });
  };
  pts = () => {
    this.setState({
      pts: true,
      title: "Third Party Tech Support",
      pTitle: "Impacted for Third Party Tech Support",
      lpDisplay: "none",
      showUnconfirmed: false,
      TechScam: false,
      showData: false,
      techscamMain: false,
      crypto: false,
    });
  };
  phishingHandler = () => {
    this.setState({
      phishing: true,
      title: "Phishing",
      pTitle: "Impacted for Phishing Confirmed",
      msgLP: "Ads, keywords and LP are NOT related to the campaign.",
      fliping: "Evidence shown in change history of flipping.",
      msgTodo: "Screenshot of The Landing Page",
      reproDisplay: "block",
      msgAlertScreenShot: "Add Screenshot of The Landing Page",
      lpDisplay: "block",
      msgAlertPhishingForm: "Fill out The Phishing Form",
      showUnconfirmed: false,
      TechScam: false,
      showData: false,
      techscamMain: false,
      pts: false,
      crypto: false,
    });
  };
  techscamMainHandler = () => {
    this.setState({
      techscamMain: true,
      title: "Techscam",
      pTitle: "Impacted for Techscam",
      msgLP: "Ads, keywords and LP are NOT related to the campaign.",
      fliping: "Evidence shown in change history of flipping.",
      reproDisplay: "block",
      lpDisplay: "block",
      showUnconfirmed: false,
      TechScam: false,
      showData: false,
      pts: false,
      crypto: false,
      phishing: false,
      msgAlertPhishingForm: "Fill out The TechScam Form",
      msgAlertScreenShot: "Screenshot of The Landing Page",
    });
  };

  cryptoHandler = () => {
    this.setState({
      crypto: true,
      title: "Crypto",
      pTitle: "Impacted for Crypto",
      lpDisplay: "none",
      alertShow: "block",
      showUnconfirmed: false,
      TechScam: false,
      showData: false,
      techscamMain: false,
      phishing: false,
      pts: false,
      msgAlertPhishingForm:
        "Buying, Selling, Trading, or Exchanging Digital Currency is Disallowed",
    });
  };
  deceptiveHandler = () => {
    this.setState({
      deceptive: true,
      title: "Deceptive Products and Services",
      pTitle: "Impacted for Deceptive Products and Services",
      lpDisplay: "none",
      alertShow: "none",
      showUnconfirmed: false,
      TechScam: false,
      showData: false,
      techscamMain: false,
      phishing: false,
      pts: false,
      crypto: false,
    });
  };
  disallowedHandler = () => {
    this.setState({
      disallowed: true,
      title: "Disallowed Business / Model",
      pTitle: "Impacted for Disallowed Business / Model",
      lpDisplay: "none",
      alertShow: "none",
      showUnconfirmed: false,
      TechScam: false,
      showData: false,
      techscamMain: false,
      phishing: false,
      pts: false,
      crypto: false,
      disallowed: false,
    });
  };

  showReport = () => {
    this.setState({
      showData: true,
      title: "Data Collector",
      pTitle: "Welcome to Data Collector. Please fill out the required data.",
      showUnconfirmed: false,
      TechScam: false,
      showData: false,
      techscamMain: false,
      phishing: false,
      pts: false,
      crypto: false,
    });
  };
  //data
  ShowDataResult = () => {
    this.setState({
      showResult: true,
    });
  };

  componentDidMount = () => {
    this.getData();
  };
  inputData = (e) => {
    e.preventDefault();
    const value = e.target.value.toLowerCase();
    this.setState({ inputData: value });
  };
  sendData = (e) => {
    e.preventDefault();
    const payload = {
      title: this.state.inputData,
    };

    axios({
      url: "/api/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data has sent to the server");
        this.getData();
      })
      .catch(() => {
        console.log("error, no data has been sent");
      });
  };

  getData = () => {
    axios
      .get("/api")
      .then((response) => {
        const data = response.data;
        this.setState({ database: data });
        console.log("data recived from server", data);
      })
      .catch(() => {
        console.log("no data from server");
      });
  };

  displayDatabase = (database) => {
    function removeD(originalArray, prop) {
      let newArray = [];
      let lookupObject = {};
      for (var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
      }

      for (i in lookupObject) {
        newArray.push(lookupObject[i]);
      }

      return newArray;
    }

    let uniqueArray = removeD(database, "title");

    return uniqueArray.map((data, index) => (
      <p key={index} style={{ display: "inline" }}>
        [{data.title}] &nbsp;
      </p>
    ));
  };
  // render
  render() {
    return (
      <Container className={styles.main} fluid={true}>
        <Header
          unConfirmedHandler={this.unConfirmedHandler}
          techScamHandler={this.techScamHandler}
          pts={this.pts}
          phishingHandler={this.phishingHandler}
          cryptoHandler={this.cryptoHandler}
          deceptiveHandler={this.deceptiveHandler}
          disallowedHandler={this.disallowedHandler}
          techscamMainHandler={this.techscamMainHandler}
        />
        <Row>
          <Col>
            {" "}
            <div className={styles.details}>
              {this.state.showUnconfirmed === true ? (
                <Unconfirmed
                  title={this.state.title}
                  ads1Handler={this.ads1Handler.bind(this)}
                  ads2Handler={this.ads2Handler.bind(this)}
                  ads3Handler={this.ads3Handler.bind(this)}
                  binding1Handler={this.binding1Handler.bind(this)}
                  binding2Handler={this.binding2Handler.bind(this)}
                  binding3Handler={this.binding3Handler.bind(this)}
                  lpHandler={this.lpHandler.bind(this)}
                  CheckedHandler={this.CheckedHandler.bind(this)}
                  CheckedHandler2={this.CheckedHandler2.bind(this)}
                  CheckedHandler3={this.CheckedHandler3.bind(this)}
                  noteHandler={this.noteHandler.bind(this)}
                  reviewHandler={this.reviewHandler.bind(this)}
                  fliping={this.state.fliping}
                  msgTodo={this.state.msgTodo}
                  reproDisplay={this.state.reproDisplay}
                  msgAlert={this.state.msgAlert}
                />
              ) : this.state.TechScam === true ? (
                <TechScamMO
                  title={this.state.title}
                  ads1Handler={this.ads1Handler.bind(this)}
                  ads2Handler={this.ads2Handler.bind(this)}
                  ads3Handler={this.ads3Handler.bind(this)}
                  binding1Handler={this.binding1Handler.bind(this)}
                  binding2Handler={this.binding2Handler.bind(this)}
                  binding3Handler={this.binding3Handler.bind(this)}
                  lpHandler={this.lpHandler.bind(this)}
                  CheckedHandler={this.CheckedHandler.bind(this)}
                  CheckedHandler2={this.CheckedHandler2.bind(this)}
                  CheckedHandler3={this.CheckedHandler3.bind(this)}
                  noteHandler={this.noteHandler.bind(this)}
                  reviewHandler={this.reviewHandler.bind(this)}
                  reproHandler={this.reproHandler.bind(this)}
                  todoBtn={this.todos.bind(this)}
                  todoState={this.state.todo}
                  fliping={this.state.fliping}
                  msgTodo={this.state.msgTodo}
                  reproDisplay={this.state.reproDisplay}
                  msgAlertScreenShot={this.state.msgAlertScreenShot}
                />
              ) : this.state.showData ? (
                <div>
                  <Row className={styles.dataContent}>
                    <Col>
                      <h1>Data Collector</h1>
                    </Col>
                  </Row>
                  <Form
                    autoComplete="off"
                    className={styles.dataContent}
                    onSubmit={this.sendData}
                  >
                    <FormGroup>
                      <Label for="DataKey">Insert The Keyword</Label>
                      <Input
                        onChange={this.inputData}
                        type="text"
                        name="test"
                        id="DataKey"
                        placeholder="keyword"
                      />
                    </FormGroup>
                    {this.state.showResult
                      ? this.displayDatabase(this.state.database)
                      : null}
                    <br></br>
                    <Button>Submit</Button>
                  </Form>
                  <Button onClick={this.ShowDataResult.bind(this)}>
                    Show Result
                  </Button>
                </div>
              ) : this.state.pts ? (
                <PTS3
                  title={this.state.title}
                  ads1Handler={this.ads1Handler.bind(this)}
                  ads2Handler={this.ads2Handler.bind(this)}
                  ads3Handler={this.ads3Handler.bind(this)}
                  binding1Handler={this.binding1Handler.bind(this)}
                  binding2Handler={this.binding2Handler.bind(this)}
                  binding3Handler={this.binding3Handler.bind(this)}
                  lpHandler={this.lpHandler.bind(this)}
                  lpDisplay={this.state.lpDisplay}
                  CheckedHandler={this.CheckedHandler.bind(this)}
                  CheckedHandler2={this.CheckedHandler2.bind(this)}
                  CheckedHandler3={this.CheckedHandler3.bind(this)}
                  noteHandler={this.noteHandler.bind(this)}
                  reviewHandler={this.reviewHandler.bind(this)}
                  reproHandler={this.reproHandler.bind(this)}
                  todoBtn={this.todos.bind(this)}
                  todoState={this.state.todo}
                  fliping={this.state.fliping}
                  msgTodo={this.state.msgTodo}
                  reproDisplay={this.state.reproDisplay}
                  msgAlertScreenShot={this.state.msgAlertScreenShot}
                />
              ) : this.state.phishing === true ? (
                <Phishing
                  title={this.state.title}
                  ads1Handler={this.ads1Handler.bind(this)}
                  ads2Handler={this.ads2Handler.bind(this)}
                  ads3Handler={this.ads3Handler.bind(this)}
                  binding1Handler={this.binding1Handler.bind(this)}
                  binding2Handler={this.binding2Handler.bind(this)}
                  binding3Handler={this.binding3Handler.bind(this)}
                  lpHandler={this.lpHandler.bind(this)}
                  CheckedHandler={this.CheckedHandler.bind(this)}
                  CheckedHandler2={this.CheckedHandler2.bind(this)}
                  CheckedHandler3={this.CheckedHandler3.bind(this)}
                  noteHandler={this.noteHandler.bind(this)}
                  reviewHandler={this.reviewHandler.bind(this)}
                  reproHandler={this.reproHandler.bind(this)}
                  todoBtn={this.todos.bind(this)}
                  todoState={this.state.todo}
                  fliping={this.state.fliping}
                  msgTodo={this.state.msgTodo}
                  msgLP={this.state.msgLP}
                  reproDisplay={this.state.reproDisplay}
                  msgAlertScreenShot={this.state.msgAlertScreenShot}
                  msgAlertPhishingForm={this.state.msgAlertPhishingForm}
                />
              ) : this.state.techscamMain ? (
                <TechScamMain
                  title={this.state.title}
                  ads1Handler={this.ads1Handler.bind(this)}
                  ads2Handler={this.ads2Handler.bind(this)}
                  ads3Handler={this.ads3Handler.bind(this)}
                  binding1Handler={this.binding1Handler.bind(this)}
                  binding2Handler={this.binding2Handler.bind(this)}
                  binding3Handler={this.binding3Handler.bind(this)}
                  lpHandler={this.lpHandler.bind(this)}
                  CheckedHandler={this.CheckedHandler.bind(this)}
                  CheckedHandler2={this.CheckedHandler2.bind(this)}
                  CheckedHandler3={this.CheckedHandler3.bind(this)}
                  noteHandler={this.noteHandler.bind(this)}
                  reviewHandler={this.reviewHandler.bind(this)}
                  reproHandler={this.reproHandler.bind(this)}
                  todoBtn={this.todos.bind(this)}
                  todoState={this.state.todo}
                  fliping={this.state.fliping}
                  msgTodo={this.state.msgTodo}
                  msgLP={this.state.msgLP}
                  reproDisplay={this.state.reproDisplay}
                  msgAlertScreenShot={this.state.msgAlertScreenShot}
                  msgAlertPhishingForm={this.state.msgAlertPhishingForm}
                />
              ) : this.state.crypto ? (
                <Crypto
                  title={this.state.title}
                  ads1Handler={this.ads1Handler.bind(this)}
                  ads2Handler={this.ads2Handler.bind(this)}
                  ads3Handler={this.ads3Handler.bind(this)}
                  binding1Handler={this.binding1Handler.bind(this)}
                  binding2Handler={this.binding2Handler.bind(this)}
                  binding3Handler={this.binding3Handler.bind(this)}
                  lpHandler={this.lpHandler.bind(this)}
                  lpDisplay={this.state.lpDisplay}
                  CheckedHandler={this.CheckedHandler.bind(this)}
                  CheckedHandler2={this.CheckedHandler2.bind(this)}
                  CheckedHandler3={this.CheckedHandler3.bind(this)}
                  noteHandler={this.noteHandler.bind(this)}
                  reviewHandler={this.reviewHandler.bind(this)}
                  reproHandler={this.reproHandler.bind(this)}
                  todoBtn={this.todos.bind(this)}
                  todoState={this.state.todo}
                  fliping={this.state.fliping}
                  msgTodo={this.state.msgTodo}
                  reproDisplay={this.state.reproDisplay}
                  msgAlertPhishingForm={this.state.msgAlertPhishingForm}
                  alertShow={this.state.alertShow}
                />
              ) : this.state.deceptive ? (
                <Deceptive
                  title={this.state.title}
                  ads1Handler={this.ads1Handler.bind(this)}
                  ads2Handler={this.ads2Handler.bind(this)}
                  ads3Handler={this.ads3Handler.bind(this)}
                  binding1Handler={this.binding1Handler.bind(this)}
                  binding2Handler={this.binding2Handler.bind(this)}
                  binding3Handler={this.binding3Handler.bind(this)}
                  lpHandler={this.lpHandler.bind(this)}
                  lpDisplay={this.state.lpDisplay}
                  CheckedHandler={this.CheckedHandler.bind(this)}
                  CheckedHandler2={this.CheckedHandler2.bind(this)}
                  CheckedHandler3={this.CheckedHandler3.bind(this)}
                  noteHandler={this.noteHandler.bind(this)}
                  reviewHandler={this.reviewHandler.bind(this)}
                  reproHandler={this.reproHandler.bind(this)}
                  todoBtn={this.todos.bind(this)}
                  todoState={this.state.todo}
                  fliping={this.state.fliping}
                  msgTodo={this.state.msgTodo}
                  reproDisplay={this.state.reproDisplay}
                  msgAlertScreenShot={this.state.msgAlertScreenShot}
                />
              ) : this.state.disallowed ? (
                <Disallowed
                  title={this.state.title}
                  ads1Handler={this.ads1Handler.bind(this)}
                  ads2Handler={this.ads2Handler.bind(this)}
                  ads3Handler={this.ads3Handler.bind(this)}
                  binding1Handler={this.binding1Handler.bind(this)}
                  binding2Handler={this.binding2Handler.bind(this)}
                  binding3Handler={this.binding3Handler.bind(this)}
                  lpHandler={this.lpHandler.bind(this)}
                  lpDisplay={this.state.lpDisplay}
                  CheckedHandler={this.CheckedHandler.bind(this)}
                  CheckedHandler2={this.CheckedHandler2.bind(this)}
                  CheckedHandler3={this.CheckedHandler3.bind(this)}
                  noteHandler={this.noteHandler.bind(this)}
                  reviewHandler={this.reviewHandler.bind(this)}
                  reproHandler={this.reproHandler.bind(this)}
                  todoBtn={this.todos.bind(this)}
                  todoState={this.state.todo}
                  fliping={this.state.fliping}
                  msgTodo={this.state.msgTodo}
                  reproDisplay={this.state.reproDisplay}
                  msgAlertScreenShot={this.state.msgAlertScreenShot}
                />
              ) : null}
            </div>
          </Col>
          <Col className="align-self-center">
            {this.state.showUnconfirmed === true ||
            this.state.TechScam === true ||
            this.state.pts === true ||
            this.state.phishing === true ||
            this.state.techscamMain === true ||
            this.state.crypto === true ||
            this.state.deceptive === true ||
            this.state.disallowed === true ? (
              <div className={styles.finalResult}>
                <div className={styles.reportPage}>
                  <p className={styles.finalContent}>{this.state.pTitle}</p>
                  {/* render2 */}
                  {this.state.note !== "" ? (
                    <div>
                      <p className={styles.finalContent}>
                        Reasoning: {this.state.note}
                      </p>
                    </div>
                  ) : null}{" "}
                  <br />
                  {this.state.ads1 !== "" ? (
                    <div>
                      <p>Additional Details: </p>
                      <span className={styles.finalContent}>
                        Ads targeting: {this.state.ads1} {this.state.ads2}{" "}
                        {this.state.ads3}
                      </span>
                    </div>
                  ) : null}
                  {this.state.binding1 !== "" ? (
                    <span className={styles.finalContent}>
                      Keywords bidding on: {this.state.binding1}
                      {this.state.binding2}
                      {this.state.binding3}
                    </span>
                  ) : null}
                  {this.state.lp === "Yes" ? (
                    <p className={styles.finalContent}>
                      {" "}
                      Ad LP is related to the campaign{" "}
                    </p>
                  ) : this.state.lp === "No" ? (
                    <p className={styles.finalContent}>
                      {" "}
                      Ad LP is NOT related to the campaign{" "}
                    </p>
                  ) : this.state.lp === "NoRep" ? (
                    <p className={styles.finalContent}>
                      {" "}
                      The URL has no Repro{" "}
                    </p>
                  ) : null}
                  {this.state.isChecked === true ? (
                    <p className={styles.finalContent}>{this.state.fliping}</p>
                  ) : this.state.isChecked === false ? (
                    <span></span>
                  ) : null}
                  {this.state.isChecked2 === true ? (
                    <p className={styles.finalContent}>{this.state.msgLP}</p>
                  ) : this.state.isChecked2 === false ? (
                    <span></span>
                  ) : null}
                  {this.state.isChecked3 === true ? (
                    <p className={styles.finalContent}>
                      Premium Service Level account.
                    </p>
                  ) : this.state.isChecked3 === false ? (
                    <span></span>
                  ) : null}
                  {this.state.repro !== "" ? (
                    <p className={styles.finalContent}>
                      URL Repros to: {this.state.repro}
                    </p>
                  ) : null}
                  {this.state.reviewName !== "" ? (
                    <p className={styles.handwriteen}>
                      {this.state.reviewName} reviewed and agreed on the final
                      decision | {this.state.date}
                    </p>
                  ) : this.state.showResult ? (
                    <div>
                      <h1>{this.state.database}</h1>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              className={styles.btn2}
              onClick={this.resetAllHandler.bind(this)}
              color="secondary"
              size="auto"
              block
            >
              Reset
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              className={styles.btn2}
              onClick={this.showReport.bind(this)}
              color="secondary"
              size="md"
              block
            >
              Data Controller
            </Button>
          </Col>
        </Row>
        <Row className={styles.footer}>
          <Col md="12">
            {" "}
            <p>Phishing Reporter 2.3</p>
            <p style={{ fontSize: "1rem", textAlign: "center" }}>
              Developed by Leo Sinani
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
