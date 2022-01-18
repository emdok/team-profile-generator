const generateCards = (teamData) => {
  if (!teamData) {
    return "";
  }
    console.log(teamData);

    for (let i = 0; i < teamData.length; i++) {
      return `<div class="col s12 m3">
      <div class="card small blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${[i].i.name}</span>
          <span class="card-title">${i.role}</span>
          <ul>
            <li>${i.id}</li>
            <li>${i.email}</li>
            <li>${i[3]}</li>
          </ul>
        </div>
      </div>
    </div>`;
    };

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


