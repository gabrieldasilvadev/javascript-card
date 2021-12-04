const container = document.querySelector('.container');

function createCard([img, altImg, titulo, paragrafo]) {
  let sessionCard = `
  <div class="card">
  <img
    src="${img}"
    alt="${altImg}"
  />

  <div class="cardText">
    <h2 class="titulo">${titulo}</h2>
    <p class="paragrafo">${paragrafo}</p>
  </div>
</div>
  `
  container.innerHTML += sessionCard
};


let card = [
  "img/proa.png",
  "Imagem PROA",
  "Instituo PROA",
  "Segundo semestre PROA 2021"
];

let card2 = [
  "img/js.png",
  "Javascript",
  "Javascript",
  "Javascript Cards",
]

createCard(card);
createCard(card2)




function newContainer() {
  const container2 = document.querySelector('.container2');
  const newDiv = document.createElement('div');

  const elementos = [
    {tag: "header", 
    valor: "Instituto PROA"},
    {
      tag: "p",
      valor: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    }
  ];

  for(let i = 0; i < elementos.length; i++) {
    let {tag, valor} = elementos[i];

    let tagEl = document.createElement(tag);
    let valueEl = document.createTextNode(valor);

    newDiv.appendChild(tagEl);
    tagEl.appendChild(valueEl);

    container2.appendChild(newDiv);
  }

}
newContainer();
