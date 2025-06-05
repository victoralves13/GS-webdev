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
const quiz = [
  {
    pergunta: "Qual a capital do Brasil?",
    opcoes: ["São Paulo", "Rio de Janeiro", "Brasília"],
    correta: 2,
  },
  {
    pergunta: "Quantos estados tem o Brasil?",
    opcoes: ["26", "27", "25"],
    correta: 1,
  },
  {
    pergunta: "Qual é o maior planeta do sistema solar?",
    opcoes: ["Terra", "Júpiter", "Saturno"],
    correta: 1,
  },
  {
    pergunta: "Qual elemento químico representa o Ouro?",
    opcoes: ["Au", "Ag", "Fe"],
    correta: 0,
  },
  {
    pergunta: "Quem escreveu 'Dom Casmurro'?",
    opcoes: ["Machado de Assis", "Carlos Drummond", "Monteiro Lobato"],
    correta: 0,
  },
  {
    pergunta: "Quanto é 8 x 7?",
    opcoes: ["56", "64", "49"],
    correta: 0,
  },
  {
    pergunta: "Qual oceano banha o Brasil?",
    opcoes: ["Pacífico", "Atlântico", "Índico"],
    correta: 1,
  },
  {
    pergunta: "Quem pintou a Monalisa?",
    opcoes: ["Van Gogh", "Michelangelo", "Leonardo da Vinci"],
    correta: 2,
  },
  {
    pergunta: "Qual o idioma mais falado no mundo?",
    opcoes: ["Inglês", "Mandarim", "Espanhol"],
    correta: 1,
  },
  {
    pergunta: "Qual país tem a maior população?",
    opcoes: ["Índia", "Estados Unidos", "China"],
    correta: 2,
  },
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
