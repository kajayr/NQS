import React from "react";

class DataReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "",
    };
  }
  //   displayDatabase = (database) => {
  //     if (!database.length) return null;

  //     return database.map((data, index) => (
  //       <div key={index}>
  //         <h3>{data.title}</h3>
  //       </div>
  //     ));
  //   };
  render() {
    return <div>{this.props.database}</div>;
  }
}

export default DataReport;
