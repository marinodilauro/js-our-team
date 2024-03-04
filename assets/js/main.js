// Array

const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

// Print all the objects properties in console

for (let i = 0; i < team.length; i++) {
  const element = team[i];

  for (const key in element) {
    console.log(element[key]);
  }

};

// Create varaible for DOM elements that will contains the objects

const containerElem = document.getElementById("our_team");


// Show in screen array elements


for (let i = 0; i < team.length; i++) {
  const element = team[i];

  // Create varaible for the markup f the element that will be shown on screen
  const markup = `
  <div class="col4">
    <div class="card">
    <p>Name: ${element.name}</p>
    <p>Role: ${element.role}</p>
    <img>${element.image}</img>
    </div>
  </div>
  `;

  for (const key in element) {
    containerElem.innerHTML += markup;
  }

};