const React = require("react");
let ReactDom = require("react-dom");

let divMain = document.getElementById('divMain');

ReactDom.render(<MainComponent/>, divMain);


class MainComponent extends React.Component {
  constructor() {

  }
  render() {
    return <div>111</div>;
  }
}