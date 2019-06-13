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


// new DK

$('.timerange').on('click', function(e) {
  e.stopPropagation();
  var input = $(this).find('input');

  var now = new Date();
  var hours = now.getHours();
  var period = "PM";
  if (hours < 12) {
    period = "AM";
  } else {
    hours = hours - 11;
  }
  var minutes = now.getMinutes();

  var range = {
    from: {
      hour: hours,
      minute: minutes,
      period: period
    },
    to: {
      hour: hours,
      minute: minutes,
      period: period
    }
  };

  if (input.val() !== "") {
    var timerange = input.val();
    var matches = timerange.match(/([0-9]{2}):([0-9]{2}) (\bAM\b|\bPM\b)-([0-9]{2}):([0-9]{2}) (\bAM\b|\bPM\b)/);
    if( matches.length === 7) {
      range = {
        from: {
          hour: matches[1],
          minute: matches[2],
          period: matches[3]
        },
        to: {
          hour: matches[4],
          minute: matches[5],
          period: matches[6]
        }
      }
    }
  };
  console.log(range);

  var html = '<div class="timerangepicker-container">'+
    '<div class="timerangepicker-from">'+
    '<label class="timerangepicker-label">From:</label>' +
    '<div class="timerangepicker-display hour">' +
        '<span class="increment fa fa-angle-up"></span>' +
        '<span class="value">'+('0' + range.from.hour).substr(-2)+'</span>' +
        '<span class="decrement fa fa-angle-down"></span>' +
    '</div>' +
    ':' +
    '<div class="timerangepicker-display minute">' +
        '<span class="increment fa fa-angle-up"></span>' +
        '<span class="value">'+('0' + range.from.minute).substr(-2)+'</span>' +
        '<span class="decrement fa fa-angle-down"></span>' +
    '</div>' +
    ':' +
    '<div class="timerangepicker-display period">' +
        '<span class="increment fa fa-angle-up"></span>' +
        '<span class="value">PM</span>' +
        '<span class="decrement fa fa-angle-down"></span>' +
    '</div>' +
    '</div>' +
    '<div class="timerangepicker-to">' +
    '<label class="timerangepicker-label">To:</label>' +
    '<div class="timerangepicker-display hour">' +
        '<span class="increment fa fa-angle-up"></span>' +
        '<span class="value">'+('0' + range.to.hour).substr(-2)+'</span>' +
        '<span class="decrement fa fa-angle-down"></span>' +
    '</div>' +
    ':' +
    '<div class="timerangepicker-display minute">' +
        '<span class="increment fa fa-angle-up"></span>' +
        '<span class="value">'+('0' + range.to.minute).substr(-2)+'</span>' +
        '<span class="decrement fa fa-angle-down"></span>' +
    '</div>' +
    ':' +
    '<div class="timerangepicker-display period">' +
        '<span class="increment fa fa-angle-up"></span>' +
        '<span class="value">PM</span>' +
        '<span class="decrement fa fa-angle-down"></span>' +
    '</div>' +
    '</div>' +
  '</div>';

  $(html).insertAfter(this);
  $('.timerangepicker-container').on(
    'click',
    '.timerangepicker-display.hour .increment',
    function(){
      var value = $(this).siblings('.value');
      value.text(
        increment(value.text(), 12, 1, 2)
      );
    }
  );

  $('.timerangepicker-container').on(
    'click',
    '.timerangepicker-display.hour .decrement',
    function(){
      var value = $(this).siblings('.value');
      value.text(
        decrement(value.text(), 12, 1, 2)
      );
    }
  );

  $('.timerangepicker-container').on(
    'click',
    '.timerangepicker-display.minute .increment',
    function(){
      var value = $(this).siblings('.value');
      value.text(
        increment(value.text(), 59, 0 , 2)
      );
    }
  );

  $('.timerangepicker-container').on(
    'click',
    '.timerangepicker-display.minute .decrement',
    function(){
      var value = $(this).siblings('.value');
      value.text(
        decrement(value.text(), 12, 1, 2)
      );
    }
  );

  $('.timerangepicker-container').on(
    'click',
    '.timerangepicker-display.period .increment, .timerangepicker-display.period .decrement',
    function(){
      var value = $(this).siblings('.value');
      var next = value.text() == "PM" ? "AM" : "PM";
      value.text(next);
    }
  );

});

$(document).on('click', e => {

  if(!$(e.target).closest('.timerangepicker-container').length) {
    if($('.timerangepicker-container').is(":visible")) {
      var timerangeContainer = $('.timerangepicker-container');
      if(timerangeContainer.length > 0) {
        var timeRange = {
          from: {
            hour: timerangeContainer.find('.value')[0].innerText,
            minute: timerangeContainer.find('.value')[1].innerText,
            period: timerangeContainer.find('.value')[2].innerText
          },
          to: {
            hour: timerangeContainer.find('.value')[3].innerText,
            minute: timerangeContainer.find('.value')[4].innerText,
            period: timerangeContainer.find('.value')[5].innerText
          },
        };

        timerangeContainer.parent().find('input').val(
          timeRange.from.hour+":"+
          timeRange.from.minute+" "+    
          timeRange.from.period+"-"+
          timeRange.to.hour+":"+
          timeRange.to.minute+" "+
          timeRange.to.period
        );
        timerangeContainer.remove();
      }
    }
  }
  
});

function increment(value, max, min, size) {
  var intValue = parseInt(value);
  if (intValue == max) {
    return ('0' + min).substr(-size);
  } else {
    var next = intValue + 1;
    return ('0' + next).substr(-size);
  }
}

function decrement(value, max, min, size) {
  var intValue = parseInt(value);
  if (intValue == min) {
    return ('0' + max).substr(-size);
  } else {
    var next = intValue - 1;
    return ('0' + next).substr(-size);
  }
}