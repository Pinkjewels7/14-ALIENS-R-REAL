// from data.js
var tableData = data;
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html('');
    data.forEach((ufoRow) => {
      let row = tbody.append('tr');
      Object.values(ufoRow).forEach((item) => {
        let cell = row.append('td');
        cell.text(item);
      });
    });
  };
  
  function handleClick() {
    d3.event.preventDefault();
    let date = d3.select('#datetime').property('value');
    let filtered = tableData;
  
    if (date) {
      filtered = filtered.filter((row) => row.datetime === date);
      }
      buildTable(filtered);
    }
  
  // var button = d3.select('#filter-btn');
  // button.on('click', handleClick);
  d3.select('#filter-btn').on('click', handleClick);
  
  buildTable(tableData);
  