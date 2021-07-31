const centrerGalerie = document.getElementById('centrerGalerie');

const displayImages = (tab) => {
    let message ='';
    tab.map(value =>{
        let i=0;
        let numberId = 0;
        while((value.lien.charCodeAt(i)>=48 && value.lien.charCodeAt(i)<=57)){           
            numberId = i===0? parseInt(value.lien[i]): numberId * 10 + parseInt(value.lien[i]);
            i++;
        }
        message += '<div class="cadres">';
        message += `<div class="oeuvres" id="oeuvre${numberId}"></div>`;
        message += '<div class="informationOeuvres infoOeuvre" id="">';
        message += '<div class="centrerinformationOeuvres">';
        message += `<h3>${value.title}</h3>`;
        message += `<p><span class="descritionoeuvres">${value.description}</span></p><p>medium:${value.medium}</p>`;
        message += '</div></div></div>';
    });
    centrerGalerie.innerHTML = message;
    tab.map(value =>{
        let i=0;
        let numberId = 0;
        while((value.lien.charCodeAt(i)>=48 && value.lien.charCodeAt(i)<=57)){           
            numberId = i===0? parseInt(value.lien[i]): numberId * 10 + parseInt(value.lien[i]);
            i++;
        }
        document.getElementById(`oeuvre${numberId}`).style.background = `no-repeat center/cover url("./galerie/${value.lien}")`;
    });
}


const readListImages = () => {
    fetch('./data.json').then(response => {
       if (!response.ok) {
           throw new Error("HTTP error " + response.status);
       }
       return response.json();
   }).then(json => {
        displayImages(json.data);
    })
   .catch(function () {
       this.dataError = true;
   })
}

readListImages();

