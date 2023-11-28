

window.onload = async function () {
    try {
      let res = await requestOrganizacoes();
      sortOrganizacoes(res.organizacoes);
      console.log(res);
  
      populateResultado(res.organizacoes);
    } catch (err) {
      console.log(err);
    }
  }
  
  function sortOrganizacoes(organizacoes) {
    for (let i = 0; i < organizacoes.length - 1; i++) {
      for (let j = 0; j < organizacoes.length - i - 1; j++) {
        if (organizacoes[j].org_name > organizacoes[j + 1].org_name) {
          // Troca as organizacoes
          let temp = organizacoes[j];
          organizacoes[j] = organizacoes[j + 1];
          organizacoes[j + 1] = temp;
        }
      }
    }
  }

function populateResultado(organizacoes) {
  let container = document.getElementById("organizacoes");
  let limitedOrganizacoes = organizacoes.slice(0, 6); // Get the first 6 organizations

  for (let organizacao of limitedOrganizacoes) {
    let sect0 = document.createElement("section");
    sect0.setAttribute("class", "product-main");
    let sect1 = document.createElement("section");
    sect1.setAttribute("class", "product-item");
    let img = document.createElement("img");
    let sect2 = document.createElement("section");
    sect2.setAttribute("class", "product-inner");
    let sect3 = document.createElement("section");
    sect3.setAttribute("class", "flex-box");
    let h3 = document.createElement("h3");
    h3.setAttribute("class", "red");
    let b = document.createElement("b");
    let p = document.createElement("p");
    let sect4 = document.createElement("section");
    sect4.setAttribute("class", "flex-box");
    let btn = document.createElement("button");

    if (organizacao.org_img) {
      img.src = organizacao.org_img;
    } else {
      img.src = "./img/caritas.jpg";
    }

    sect1.appendChild(img);
    h3.textContent = "Nome: " + organizacao.org_name;
    b.textContent = "Telefone " + organizacao.org_telefone;
    sect3.appendChild(h3);
    sect3.appendChild(b);
    p.textContent = "Endereco " + organizacao.org_endereco;
    btn.textContent = "Doar";
    btn.onclick = () => {
      console.log(organizacao.org_id);
    };
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