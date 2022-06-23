let IES_input = document.querySelector("#IES");

let disciplina = document.getElementById("disciplina_nome");

let atv1_input = document.querySelector("#atividade1");

let atv2_input = document.querySelector("#atividade2");

let atv3_input = document.querySelector("#atividade3");

let atv4_input = document.querySelector("#atividade4");

let N2_input = document.querySelector("#N2");

const tabela = document.querySelector("#result");

const cadastro_btn = document.querySelector("#cadastrar");
const result_btn = document.querySelector("#result_btn");
const reset_btn = document.getElementById("clean");

let Disciplinas = [];
let atv1 = [];
let atv2 = [];
let atv3 = [];
let atv4 = [];
let N2 = [];

function initCad() {
  let atv1_value = Number(atv1_input.value);
  let atv2_value = Number(atv2_input.value);
  let atv3_value = Number(atv3_input.value);
  let atv4_value = Number(atv4_input.value);
  let N2_value = Number(N2_input.value);
  if (
    atv1_value > 10 ||
    atv2_value > 10 ||
    atv3_value > 10 ||
    atv4_value > 10 ||
    N2_value > 10
  ) {
    alert(
      "O Valor deve ser menor ou igual a 10, caso sua nota seja 100 coloque 10."
    );
  } else {
    Disciplinas.push(disciplina.value);
    atv1.push(atv1_value);
    atv2.push(atv2_value);
    atv3.push(atv3_value);
    atv4.push(atv4_value);
    N2.push(N2_value);
  }

  disciplina.value = "";
  atv1_input.value = "";
  atv2_input.value = "";
  atv3_input.value = "";
  atv4_input.value = "";
  N2_input.value = "";
}

/* media */
function calculo_media_final(nota1, nota2, nota3, nota4, prova) {
  let IES = IES_input.value;
  let N1 = (nota1 + nota2 + nota3 + nota4) / 4;

  if (IES == "grad") {
    let media_Final = N1 * 0.4 + prova * 0.6;
    return media_Final.toFixed(1);
  } else if (IES == "pos") {
    let media_Final = N1 * 0.6 + prova * 0.4;
    return media_Final.toFixed(1);
  }
}

function media_N1(nota1, nota2, nota3, nota4) {
  return (N1 = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1));
}

/*fim media*/

function getRowContent(i) {
  function concept() {
    if (calculo_media_final(atv1[i], atv2[i], atv3[i], atv4[i], N2[i]) >= 6) {
      return `<p class="aprovado">APROVADO</p>`;
    } else {
      return `<p class="reprovado">REPROVADO</p>`;
    }
  }

  return `
      <tr>
        <td>${Disciplinas[i]}</td>
        <td>${media_N1(atv1[i], atv2[i], atv3[i], atv4[i])}</td>
        <td>${calculo_media_final(
          atv1[i],
          atv2[i],
          atv3[i],
          atv4[i],
          N2[i]
        )}</td>
        <td>${concept()}</td>
      </tr>
`;
}

function initShow() {
  tabela.innerHTML = "";

  const head1 = document.createElement("th");
  head1.innerText = "Disciplinas";
  const head2 = document.createElement("th");
  head2.innerText = "Média N1";
  const head3 = document.createElement("th");
  head3.innerText = "Média final";
  const head4 = document.createElement("th");
  head4.innerText = "conceito";

  tabela.appendChild(head1);
  tabela.appendChild(head2);
  tabela.appendChild(head3);
  tabela.appendChild(head4);

  for (let i = 0; i < Disciplinas.length; i++) {
    document.getElementById("result").innerHTML += getRowContent(i);
  }
}

function reset() {
  Disciplinas = [];
  atv1 = [];
  atv2 = [];
  atv3 = [];
  atv4 = [];
  N2 = [];

  tabela.innerHTML = "";
}

cadastro_btn.addEventListener("click", initCad);
result_btn.addEventListener("click", initShow);
reset_btn.addEventListener("click", reset);
