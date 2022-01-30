var url = "https://api2.binance.com/api/v3/ticker/24hr";

var container = document.getElementById("con");
fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((finalData) => {
    console.log(finalData);
    for (var i = 0; i < finalData.length; i++) {
      var tr = document.createElement("tr");
      var td = document.createElement("td");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");

      td.innerText = finalData[i].symbol;
      td1.innerText = finalData[i].priceChange;
      td2.innerText = finalData[i].priceChangePercent;
      tr.append(td, td1, td2);
      container.appendChild(tr);
    }
  })
  .catch(() => {
    console.log("api failed");
  });
