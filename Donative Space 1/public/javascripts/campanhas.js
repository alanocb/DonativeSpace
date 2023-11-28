

window.onload = async function () {
    try {
      debugger;
      let res = await requestCampanhas();
      sortCampanhas(res.campanhas);
      console.log(res);
  
      populateResultado(res.campanhas);
    } catch (err) {
      console.log(err);
    }
  }
  
  function sortCampanhas(campanhas) {
    for (let i = 0; i < campanhas.length - 1; i++) {
      for (let j = 0; j < campanhas.length - i - 1; j++) {
        if (campanhas[j].data_inicio > campanhas[j + 1].data_inicio) {
          // Troca os elementos das campanhas
          let temp = campanhas[j];
          campanhas[j] = campanhas[j + 1];
          campanhas[j + 1] = temp;
        }
      }
    }
  }
  function populateResultado(campanhas) {
    
    let container = document.getElementById("campanhas");
    for (let campanha of campanhas) {
      debugger;
      let sect0 = document.createElement("section");
      sect0.setAttribute("class","product-main");
        let sect1 = document.createElement("section");
        sect1.setAttribute("class","product-item");
        let img = document.createElement("img");
        let sect2 = document.createElement("section");
        sect2.setAttribute("class","product-inner");
        let sect3 = document.createElement("section");
        sect3.setAttribute("class","flex-box");
        let h3 = document.createElement("h3");
        h3.setAttribute("class","red");
        let b = document.createElement("b");
        let p = document.createElement("p");
        let sect4 = document.createElement("section");
        sect4.setAttribute("class","flex-box");
        let btn = document.createElement("button");
        if (campanha.campanha_img) {
            img.src = campanha.campanha_img;
        } else {
            img.src = "./img/caritas.jpg";
        }   
        sect1.appendChild(img);
        h3.textContent =  "Nome do evento: " + campanha.nome_evento;
        b.textContent = "Data: " + campanha.data_inicio;
        sect3.appendChild(h3);
        sect3.appendChild(b);
        p.textContent = "Descricao:  " + campanha.campanha_observacao;
        btn.textContent = "Doar" ;
        btn.onclick = () => {
          console.log(campanha.campanha_id);
        }
        sect4.appendChild(btn);
        sect2.appendChild(sect3);
        sect2.appendChild(p);
        sect2.appendChild(sect4);
        sect1.appendChild(sect2);
        sect0.appendChild(sect1);
        container.appendChild(sect0);
    }
  }
  
  /*
  <section class="product-main" id="organizacoes">
            <section class="product-item">
                <img src="img/caritas.jpg" width="100%" height="220px">
                <section class="product-inner">
                    <section class="flex-box">
                        <h3 class="red"  > Nome: </h3>
                        <b>telefone: </b>
                    </section>
                    <p> Endereco: </p>
                    <section class="flex-box">
                        <button>Doar</button>
                    </section>
                </section>
            </section>
        </section>
        */