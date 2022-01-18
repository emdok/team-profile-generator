const generateCards = (teamData) => {
  if (!teamData) {
    return "";
  }
    console.log(teamData);
    let data = '';
    let thirdPop = '';
    
    for (let i = 0; i < teamData.length; i++) {
      if (teamData[i].role == 'Manager') {
        thirdPop = teamData[i].officeNumber;
      } else if (teamData[i].role == 'Engineer') {
        thirdPop = teamData[i].github;
      } else {
        thirdPop = teamData[i].school;
      }

      data += `<div class="col s12 m3">
      <div class="card small blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${teamData[i].name}</span>
          <span class="card-title">${teamData[i].role}</span>
          <ul>
            <li>${teamData[i].id}</li>
            <li>${teamData[i].email}</li>
            <li>${thirdPop}</li>
          </ul>
        </div>
      </div>
    </div>`;
    };
    return data;
};

module.exports = (templateData) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- Compiled and minified CSS -->
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      />
      <title>Team Profile</title>
    </head>
    <body>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">My Team</a>
        </div>
      </nav>
      <div class="row">
        ${generateCards(templateData)}
      </div>
    </body>
  </html>`
}


