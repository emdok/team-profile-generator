const generateCards = (teamData) => {
  if (!teamData) {
    return "";
  }
  console.log(teamData);
  let data = "";
  let thirdListEl = "";
  let displayRole = "";

  for (let i = 0; i < teamData.length; i++) {
    if (teamData[i].role == "Manager") {
      thirdListEl = "Office Number: " + teamData[i].officeNumber;
      displayRole = `<i class="bi bi-briefcase"></i> ${teamData[i].role}`;
    } else if (teamData[i].role == "Engineer") {
      thirdListEl =
        "Github: " +
        `<a href="https://github.com/${teamData[i].github}" target="_blank">${teamData[i].github}</a>`;
      displayRole = `<i class="bi bi-kanban"></i> ${teamData[i].role}`;
    } else {
      thirdListEl = "School: " + teamData[i].school;
      displayRole = `<i class="bi bi-person-badge"></i> ${teamData[i].role}`;
    }

    data += `<div class="col">
      <div class="card bg-light">
        <div class="card-header bg-primary">
          <h3 class="text-white">${teamData[i].name}</h3>
          <h4 class="text-white">${displayRole}</h4>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${teamData[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${teamData[i].email}">${teamData[i].email}</a></li>
            <li class="list-group-item">${thirdListEl}</li>
          </ul>
        </div>
      </div>
    </div>`;
  }
  return data;
};

module.exports = (templateData) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
  
      <link rel="stylesheet" href="style.css" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
      <title>Team Generator</title>
    </head>
    <body>
      <header>
        <div class="container-fluid">
          <h1 class="display-3 text-white">My Team</h1>
        </div>
      </header>
      <main>
        <div class="container">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            ${generateCards(templateData)}
          </div>
        </div>
      </main>
    </body>
  </html>`;
};
