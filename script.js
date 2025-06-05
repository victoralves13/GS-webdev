// --- SLIDESHOW ---
const slides = ["assets/slide1.jpg", "assets/slide2.jpg", "assets/slide3.jpg"];
let currentSlide = 0;

function showNextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  document.getElementById("slide").src = slides[currentSlide];
}

setInterval(showNextSlide, 3000);

// --- VALIDAÇÃO FORMULÁRIO ---
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("form-msg");

  if (!name || !email || !message) {
    msg.textContent = "Por favor, preencha todos os campos.";
    msg.style.color = "red";
  } else {
    msg.textContent = "Mensagem enviada com sucesso!";
    msg.style.color = "green";
  }
});

// --- MENU HAMBÚRGUER ---
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}

// --- TROCA DE TEMA ---
function changeTheme(color) {
  document.body.style.backgroundColor = color;
}

// --- QUIZ INTERATIVO ---
const quizData = [
  {
    question: "Qual o principal objetivo do AquaShield Tech?",
    options: ["A) Aumentar a produção agrícola", "B) Reduzir os custos com saneamento", "C) Monitorar e prevenir enchentes", "D) Melhorar o transporte público"],
    answer: 2
  },
  {
    question: "O que é utilizado para coleta de dados em tempo real no projeto?",
    options: ["A) Drones", "B) Sensores IoT com Arduino", "C) Satélites", "D) Estações meteorológicas fixas"],
    answer: 1
  },
  {
    question: "O que significa a sigla IoT no contexto do projeto?",
    options: ["A) Internet of Things", "B) Internal Operational Tracking", "C) Interface of Technology", "D) Information on Territory"],
    answer: 0
  },
  {
    question: "Qual funcionalidade transforma a participação dos usuários em algo engajador?",
    options: ["A) Sistema de doações", "B) Compartilhamento automático", "C) Gamificação", "D) Chat em tempo real"],
    answer: 2
  },
  {
    question: "Quem são os principais usuários da plataforma AquaShield Tech?",
    options: ["A) Corretores de imóveis", "B) Moradores, voluntários e gestores", "C) Estudantes e professores", "D) Agricultores e caminhoneiros"],
    answer: 1
  },
  {
    question: "Como o projeto ajuda prefeituras e defesas civis?",
    options: ["A) Fornecendo previsão climática mensal", "B) Emitindo boletos de pagamento", "C) Através de dashboards com dados em tempo real", "D) Criando abrigos automáticos"],
    answer: 2
  },
  {
    question: "Qual o papel da Inteligência Artificial no AquaShield Tech?",
    options: ["A) Controlar os drones de resgate", "B) Prever enchentes com base em dados históricos", "C) Calcular rotas para navios", "D) Gerenciar campanhas de marketing"],
    answer: 1
  },
  {
    question: "O que acontece quando um usuário reporta uma enchente?",
    options: ["A) Nada, é apenas simbólico", "B) Ele é redirecionado a outra página", "C) Ganha pontos e ajuda no alerta da comunidade", "D) Recebe um prêmio físico"],
    answer: 2
  },
  {
    question: "O AquaShield Tech pode ser adaptado para outras cidades?",
    options: ["A) Não, é exclusivo para São Paulo", "B) Sim, é escalável", "C) Apenas com aprovação federal", "D) Somente se for em zona rural"],
    answer: 1
  },
  {
    question: "Qual é o diferencial visual da marca AquaShield Tech?",
    options: ["A) Escudo com gotas de água", "B) Triângulo amarelo com raio", "C) Folha verde com código binário", "D) Ônibus flutuando"],
    answer: 0
  }
];


let index = 0;
let acertos = 0;

function renderQuiz() {
  const q = quiz[index];
  document.getElementById("question").textContent = q.pergunta;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  document.getElementById("quiz-result").textContent = "";

  q.opcoes.forEach((op, i) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type='radio' name='quiz-option' value='${i}'> ${op}`;
    answersDiv.appendChild(label);
    answersDiv.appendChild(document.createElement("br"));
  });

  document.getElementById("next-btn").style.display = "inline";
}

function nextQuestion() {
  const selecionado = document.querySelector("input[name='quiz-option']:checked");

  if (!selecionado) {
    alert("Por favor, selecione uma opção.");
    return;
  }

  const resposta = parseInt(selecionado.value);
  if (resposta === quiz[index].correta) acertos++;

  index++;
  if (index < quiz.length) {
    renderQuiz();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.getElementById("question").textContent = "Fim do Quiz!";
  document.getElementById("answers").innerHTML = "";
  document.getElementById("quiz-result").textContent = `Você acertou ${acertos} de ${quiz.length} perguntas.`;
  document.getElementById("next-btn").style.display = "none";
}

renderQuiz();
