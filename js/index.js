const contenedor = document.getElementById("contenedor-cards");

for(let event of data.events){
    getCard(event);
}

function getCard(event){
    contenedor.innerHTML += `
    <div class="card" style="width: 10rem;">
                    <img src="${event.image}" class="card-img-top" alt="image of ${event.name}">
                    <div class="card-body">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text">${event.description}</p>
                        <a href="./details.html" class="btn btn-primary">Details</Details></a>
                    </div>
                </div>
   `;             
}

