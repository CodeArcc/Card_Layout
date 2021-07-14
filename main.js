// var container = document.querySelector(".container");

// function createCard() {
//   fetch("main/cards.json")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       data.forEach((card, index) => {
//         cardEl = document.createElement("a");
//         cardEl.href = card.hyperLink;
//         cardEl.innerHTML = `
//           <div class='card'>
//               <div class='imgBox'>
//                   <img src='${card.imageSrc}' alt='${card.imgAltText}' />
//               </div>
//               <div class='content'>
//                   <h2>${card.header}</h2>
//                   <p>${card.description}</p>
//               </div>
//           </div>`;
//         container.appendChild(cardEl);
//       });
//     })
//     .catch((error) => {
//       const par = document.createElement("p");
//       par.innerHTML = `<strong>${error}</strong>`;
//       container.appendChild(par);
//     });
// }

// createCard();
