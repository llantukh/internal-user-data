import $ from "jquery"



function pullData () {
  return $.ajax({
  url: "https://randomuser.me/api/?results=12",
  success: displayData

  });
};

function displayData(item) {
  console.log(item);

  for (var i = 0; i < item.results.length; i++) {

    var user = item.results[i];
    var renderHTML =
    `
    <div class = "users">
      <img class = "photo" src = "${user.picture.large}">
      <div class = "name">
        <p>${user.name.first } ${user.name.last}</p>
      </div>
      <div class = "email">
        <p>${user.email}</p>
      </div>
      <div class = "address">
        <p>${user.location.street}</p>
        <p>${user.location.city} ${user.location.state }
        ${user.location.postcode}</p>
      </div>
      <div class = "phone">
        <p>${user.cell}</p>
      </div>
      <div class = "SSN">
        <p>${user.id.value}</p>
      </div>
    </div>

    `
    $(".container").append(renderHTML);
  };
};

pullData();
