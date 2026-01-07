// Function to fetch data and display it in a table
function getData() {

  // Fetch data from API
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      // Convert response to JSON
      return response.json();
    })
    .then(function (data) {

      // Get the div where table will be shown
      var result = document.getElementById("result");

      // Create table and header row
      var table = "<table border='1'>";
      table += "<tr>";
      table += "<th>Name</th>";
      table += "<th>Username</th>";
      table += "<th>Email</th>";
      table += "<th>Latitude</th>";
      table += "<th>Longitude</th>";
      table += "</tr>";

      // Loop through API data
      for (var i = 0; i < data.length; i++) {
        table += "<tr>";
        table += "<td>" + data[i].name + "</td>";
        table += "<td>" + data[i].username + "</td>";
        table += "<td>" + data[i].email + "</td>";
        table += "<td>" + data[i].address.geo.lat + "</td>";
        table += "<td>" + data[i].address.geo.lng + "</td>";
        table += "</tr>";
      }

      // Close table
      table += "</table>";

      // Show table on page
      result.innerHTML = table;

      // Show clear button
      document.getElementById("clearBtn").style.display = "inline-block";
    });
}

// Function to clear table data
function clearData() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("clearBtn").style.display = "none";
}
