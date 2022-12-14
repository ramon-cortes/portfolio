//BOOTSTRAP NAV BAR
//Copied from Bootstrap's website
//<a class="navbar-brand" href="#">Ramon's Portfolio</a>
const bootStrapNavBar = `<nav class="navbar navbar-expand-lg navbar-darkblue bg-dark">
<img src="images/logo_rcl1.jpg" alt="R C L  Logo">
<button class="navbar-toggler blue" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="./index.html">Bio</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./projects.html">Projects</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="mailto:ramoncortes.varios@gmail.com">
      <img class="icon-image" id="icon0" src="images/email-logo.jpg" alt="email"></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://github.com/ramon-cortes" target="_blank">
      <img class="icon-image" id="icon1" src="images/github-logo.jpg" alt="GitHub"></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://www.linkedin.com/in/ramon-cortes-l" target="_blank">
      <img class="icon-image" id="icon2" src="images/linkedin-logo.jpg" alt="LinkedIn"></a>
    </li>
  </ul>
</div>
</nav>`;

//BOOTSTRAP CARDS (I USED IT IN MY BIO SECTION (page's center))
const bio = `<div class="card smaller">
<div class="card-header">
  Ramon Cortes
</div>
<div class="card-body">
  <h5 class="card-title header">Electronics and Communications Engineer</h5>
  <p class="card-text">Graduated from Universidad Iberoamericana in Mexico City</p>
  <p class="card-text">Presently studying Full Stack Development with Mern</p>
  <p class="card-text">20 years experience as Systems Administrator and IT Support:
    <ul>
      <li>Desktop / laptop setup through Microsoft's Endpoint, Altiris, Symantec's Ghost</li>
      <li>Inventory keeping</li>
      <li>Circuit setup coordination</li>
      <li>Service management such as ServiceNow, Cherwell, Remedy</li>
      <li>User support. From admin staff to management. Local and remote.</li>
      <li>Acess system management. Keyscan Aurora, ZKTeko</li>
    </ul>
  </p>
  <p class="card-text">Also I self-taught some 3D Studio Max and Basic Python</p>
  <a href="https://www.youtube.com/watch?v=_Jw5dK19orY" class="btn btn-primary smaller" target="_blank">3DS Max Skills Demo</a> Modeling starts at 0:30</p>
  <p class="card-text">
  <a href="mailto:ramoncortes.varios@gmail.com">
  <img class="icon-image" id="icon3" src="images/email-logo2.jpg" alt="email"></a>
  <a href="https://github.com/ramon-cortes" target="_blank">
  <img class="icon-image" id="icon4" src="images/github-logo2.jpg" alt="GitHub"></a>
  <a href="https://www.linkedin.com/in/ramon-cortes-l" target="_blank">
  <img class="icon-image" id="icon5" src="images/linkedin-logo2.jpg" alt="LinkedIn"></a></p>
</div>
</div>`;

//Photo & Video
const fotoRcl = `<img src="images/foto_fondo.jpg" alt="Ramon Cortes" width="146" height="140">`
const videoRcl = `<iframe width="350" height="250" src="https://www.youtube.com/embed/-_DAhVXsXeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br><a href="https://www.youtube.com/embed/-_DAhVXsXeE" target="_blank">Video in new window</a>`;

/*const landingPage = `<div class="start-page">
<h4 class="header">Welcome to Ramon Cortes' Porfolio website</h4>
Feel free to check my <b>Bio</b> and <b>Projects</b>.<br>
You will also find my icon and my GitHub page (opens in a new tab)
</div><hr>
<div class="start-page smaller">
  NOTE: If you browsers width is below 1000px Bootstrap's Nav Bar will collapse.
</div>`*/

//Projects left menu
let divIndexHtml = `<table>
<tr>
  <th class="header" style="text-align: center;"><a href="./projects.html" class="nav-link" >PROJECTS<br>or<br>EXERCISES</a></th>
</tr>
<tr>
  <td id="menu1">PacMen</td>
</tr>
<tr>
  <td id="menu2">Eye</td>
</tr>
<tr>
  <td id="menu3">Real Time<br>Bus Tracker</td>
</tr>
<tr>
  <td>&nbsp</td>
</tr>
<tr>
  <td id="menu4">Drawing Shapes</td>
</tr>
<tr>
  <td id="menu5">Ball Bounce 3D</td>
</tr>
<tr>
  <td id="menu6">Helicopter</td>
</tr>
<tr>
  <td id="menu7">Walk Boston Data</td>
</tr>    
</table>`;

//Projects information
const projectsInfo = `<h4 class="header top">PROJECTS or EXERCISES</h4>
<p>To your left you will find my Projects index<br>
Click on any project to display it here.<br>
Clicking on the GitHub Repository on the links below will open a new tab.
</p><hr>
<p>
<h5 class="header">PacMen</h5>
I added a "squishy" effect when the pacmen reach left or right borders.
<br>
<a class="proj-links" href="https://github.com/ramon-cortes/pacmen" target="_blank">GitHub Repository</a>
</p>
<p>
<h5 class="header">Eye</h5>
Nothing special. Just does what it's supposed to.
<br>
<a class="proj-links" href="https://github.com/ramon-cortes/eye" target="_blank">GitHub Repository</a>
</p>
<p>
<h5 class="header">Real Time Bus Tracker</h5>
Added seat availability, Latitude & Longitude info above the map<br>
I noticed that it does not work afterhours. Probably they shut down the service<br>
Please do not re-open this project or refresh it multiple times. The boston page may receive many consecutive requests and I might get banned.
<br>
<a class="proj-links" href="https://github.com/ramon-cortes/boston_busr19" target="_blank">GitHub Repository</a>
</p><hr>
Then I included a few bonus or extra exercises:
<p>
<h5 class="header">Drawing Shapes</h5>
User can choose ammount of circles to draw. And the radius around which they will be drawn.
<br>
<a class="proj-links" href="https://github.com/ramon-cortes/draws_circle_pattern" target="_blank">GitHub Repository</a>
</p>
<p>
<h5 class="header">Ball Bounce 3D</h5>
Based on the ball move exercise. I tried to add a 3D effect by increasing ball size and adding a shadow.
<br>
<a class="proj-links" href="https://github.com/ramon-cortes/ball_bounce_3d" target="_blank">GitHub Repository</a>
</p>
<p>
<h5 class="header">Helicopter</h5>
Based on the PacMan exercise. I changed the picture for a Helicopter. And included functionality by using clientx and clienty methods (which I am still unsure how they operate, but they do return the position where the user clicks).<br>
User can click a position within the darker blue boundaries and the Helicopter will fly there.
<br>
<a class="proj-links" href="https://github.com/ramon-cortes/helicopter" target="_blank">GitHub Repository</a>
</p>
<p>
<h5 class="header">Walk Boston Data</h5>
User can choose between filter options and parameters. Result will be displayed on a table rather than just an unordered list.
<br>
<a class="proj-links" href="https://github.com/ramon-cortes/boston_data" target="_blank">GitHub Repository</a>
</p>`

//Projects fading color variables
const menuItems = [];
let id = []; //timeOut id

//Icons On/Off variables
const icons = [];

//Projects menu: Will open html at the right
function openPage(id, div) {
  if (id == 'menu1') {
    div.innerHTML = '<object type="text/html" data="https://ramon-cortes.github.io/pacmen/index.html" width="100%" height="100%"></object>';
  } else if (id == 'menu2') {
    div.innerHTML = '<object type="text/html" data="https://ramon-cortes.github.io/eye/index.html" width="100%" height="100%"></object>';
  } else if (id == 'menu3') {
    div.innerHTML = '<object type="text/html" data="https://ramon-cortes.github.io/boston_busr19/index.html" width="100%" height="100%"></object>';
  } else if (id == 'menu4') {
    div.innerHTML = '<object type="text/html" data="https://ramon-cortes.github.io/draws_circle_pattern/index.html" width="100%" height="100%"></object>';
  } else if (id == 'menu5') {
    div.innerHTML = '<object type="text/html" data="https://ramon-cortes.github.io/ball_bounce_3d/ball_3d.html" width="100%" height="100%"></object>';
  } else if (id == 'menu6') {
    div.innerHTML = '<object type="text/html" data="https://ramon-cortes.github.io/helicopter/helicopter01.html" width="100%" height="100%"></object>';
  } else if (id == 'menu7') {
    div.innerHTML = '<object type="text/html" data="https://ramon-cortes.github.io/boston_data/boston_rcl.html" width="100%" height="100%"></object>';
  }
}

//FADING MENU FUNCTIONS
//Converts text 'rgb(x, y, z)' into [x, y, z]
function convierteRgbNumeros(rgbTexto) {
  let rgbNumeros;
  rgbNumeros = rgbTexto.slice(4, rgbTexto.indexOf(')'));
  rgbNumeros = rgbNumeros.replaceAll(' ', '');
  rgbNumeros = rgbNumeros.split(',');

  for (let i = 0; i < 3; i++) {
    rgbNumeros[i] = parseInt(rgbNumeros[i]);
  }

  return rgbNumeros;
}

//When mouse is over a menu item
function tieneFocus(x) {
  clearTimeout(id[x]);
  menuItems[x].style.background = 'rgb(0, 0, 100)';
  menuItems[x].style.color = 'rgb(200, 200, 255)';
  //menuItems[x + 1].style.color = 'rgb(255, 255, 255)';
}

//When mouse left a menu item
function noTieneFocus(x) {
  clearTimeout(id[x]);
  menuItems[x].style.color = 'rgb(0, 0, 0)';
  let colorActual = convierteRgbNumeros(menuItems[x].style.background);

  for (let i = 0; i < 3; i++) {
    if (colorActual[i] < 255) {
      colorActual[i] += 10;
    } else {
      colorActual[i] = 255;
    }
  }  

  menuItems[x].style.background = 'rgb(' + colorActual[0] + ',' + colorActual[1] + ',' + colorActual[2] + ')';
  //menuItems[x + 1].style.color = 'rgb(0, 0, 255)';

  if (colorActual[0] < 255) {
    id[x] = setTimeout(noTieneFocus, 100, x);
  } else {
    menuItems[x].style.background = 'transparent';
  }
}

//START UP FUNCTION
window.onload = () => {
  const body = document.getElementById('body');

  //Im sure there must be a better way to do it but this does what I wanted:
  body.innerHTML = bootStrapNavBar;
  let divWrapper = document.createElement('div');
  divWrapper.id = 'divWrapper'; //Project's grid div
  divWrapper.className = 'divWrapper';
  //divWrapper.classList.add('divWrapper');
  body.appendChild(divWrapper);

  //When mouse is over and off an icon
  //   Cantidad de ??conos
  //                  ???
  for (let i = 0; i < 3; i++) {
    icons.push(document.getElementById('icon' + i));
    icons[i].addEventListener("mouseover", () => {
      icons[i].src = icons[i].src.replace('logo', 'logo-o');
    }, false);
    icons[i].addEventListener("mouseleave", () => {
      icons[i].src = icons[i].src.replace('logo-o', 'logo');
    }, false);
  } 
  
  //Probably my logic is not the way to do it but...:

  //Page selection
  //Landing page and Bio "Ramon's Portfolio"  
  if (window.document.title == `Bio` || window.document.title == `Ramon's Portfolio`) {   
    divWrapper.classList.remove('divWrapper');
    divWrapper.classList.add('divWrapper-bio'); //Bio's grid div
    let cards = [];
    for (let i = 0; i < 3; i++) {
      cards.push(document.createElement('div'));
      divWrapper.append(cards[i]);
    }
    cards[0].classList.add('card-left');
    cards[1].classList.add('card-center');
    cards[2].classList.add('card-right');
    cards[0].innerHTML = fotoRcl;
    cards[1].innerHTML = bio;
    cards[2].innerHTML = videoRcl;
    //Bio's Icon change
    const iconsBio = [];
    //   Cantidad de ??conos en Bio
    //                  ???
    for (let i = 0; i < 3; i++) {
      iconsBio.push(document.getElementById('icon' + (i + 3)));
      iconsBio[i].addEventListener("mouseover", () => {
        iconsBio[i].src = iconsBio[i].src.replace('logo', 'logo-o');
      }, false);
      iconsBio[i].addEventListener("mouseleave", () => {
        iconsBio[i].src = iconsBio[i].src.replace('logo-o', 'logo');
      }, false);
    }
    //Projects
  } else if (window.document.title == `Projects`) {
    divWrapper.classList.add('divWrapper'); //Project's grid div
    let divIndex = document.createElement('div');
    let divContent = document.createElement('div');
    divIndex.className = 'divContent';
    divContent.className = 'divContent';
    divWrapper.append(divIndex);
    divWrapper.append(divContent);
    divIndex.innerHTML = divIndexHtml;    
    divContent.innerHTML = projectsInfo;
    
    //Elementos en el menu Projects
    //                  ???
    for (let i = 0; i < 7; i++) {
      menuItems.push(document.getElementById('menu' + (i + 1)));
      menuItems[i].style.cursor = 'pointer';
      menuItems[i].addEventListener("click", () => openPage(menuItems[i].id, divContent), false);
      menuItems[i].addEventListener("mouseover", () => {tieneFocus(i);}, false);
      menuItems[i].addEventListener("mouseleave", () => {noTieneFocus(i);}, false);
    }    
  }  
}


//html into div
//<object type="text/html" data="html_into_div2.html" width="100%" height="100%"></object>

/*
`<nav class="navbar navbar-expand-lg navbar-dark bg-dark"><span class="navbar-brand">Ramon's Portfolio</span><!-- <a class="navbar-brand" href="#">Ramon's Portfolio</a> --><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="./bio.html">Bio</a></li><li class="nav-item"><a class="nav-link" href="#">Projects</a></li> <li class="nav-item"><a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</a></li><li class="nav-item"><a class="nav-link" href="#">icon</a></li><li class="nav-item"><a class="nav-link" href="#">GitHub</a></li></ul></div></nav>`
*/
