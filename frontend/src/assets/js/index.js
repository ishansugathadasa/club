class App extends React.Component {

  constructor() {
    super();
    this.state = {
      seat: [
      'Front1', 'Front2', 'Front3',
      'Middle1', 'Middle2', 'Middle3',
      'Back1', 'Back2', 'Back3'],

      seatAvailable: [
      'Front1', 'Front2', 'Front3',
      'Middle1', 'Middle2', 'Middle3',
      'Back1', 'Back2', 'Back3'],

      seatReserved: [] };

  }

  onClickData(seat) {
    if (this.state.seatReserved.indexOf(seat) > -1) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res != seat) });

    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res != seat) });

    }
  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", null, "Seat Reservation System"),
      React.createElement(DrawGrid, {
        seat: this.state.seat,
        available: this.state.seatAvailable,
        reserved: this.state.seatReserved,
        onClickData: this.onClickData.bind(this) })));



  }}


class DrawGrid extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "container" },
      React.createElement("h2", null),
      React.createElement("table", { className: "grid" },
      React.createElement("tbody", null,
      React.createElement("tr", null,
      this.props.seat.map((row) =>
      React.createElement("td", {
        className: this.props.reserved.indexOf(row) > -1 ? 'reserved' : 'available',
        key: row, onClick: e => this.onClickSeat(row) }, row, " "))))),




      React.createElement(AvailableList, { available: this.props.available }),
      React.createElement(ReservedList, { reserved: this.props.reserved })));


  }

  onClickSeat(seat) {
    this.props.onClickData(seat);
  }}


class AvailableList extends React.Component {
  render() {
    const seatCount = this.props.available.length;
    return (
      React.createElement("div", { className: "left" },
      React.createElement("h4", null, "Available Seats: (", seatCount == 0 ? 'No seats available' : seatCount, ")"),
      React.createElement("ul", null,
      this.props.available.map(res => React.createElement("li", { key: res }, res)))));



  }}


class ReservedList extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "right" },
      React.createElement("h4", null, "Reserved Seats: (", this.props.reserved.length, ")"),
      React.createElement("ul", null,
      this.props.reserved.map(res => React.createElement("li", { key: res }, res)))));



  }}



ReactDOM.render(React.createElement(App, { name: "Rachelle" }), document.getElementById('app'));