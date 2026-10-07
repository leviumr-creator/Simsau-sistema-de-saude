console.log("loaded")


document.querySelector("#nav-menu").innerHTML=`
<nav class="header">
<div class="header-hamburger">
<div>
<button class="material-icons" id="hamburger-button">
menu
</button>
</div>
</div>
<div class="header-logo">
<h1>Sistemas de Saúde SIMSAU</h1>
<h1 class="material-symbols-outlined" id="logo">health_metrics</h1>
</div>
<div class="header-profile" onclick="getProfile()">
<div class="header-profile-image">
<span class="material-icons" id="profile-icon">account_circle</span>
</div>
</div>
</nav>
`;
if(window.location.pathname === "/index.html" || window.location.pathname === "/"){
    document.querySelector("#main").innerHTML=`
    <main class="main">
    <div class="main-content">
    <h1>Bem-vindo à página inicial</h1>
    <h1>Olá, "Usuário"</h1>
    <p>Este é o conteúdo principal da página.</p>
    </div>
    </main>`;
}
else{
    const main =document.createElement("main");
    main.id="main";
    document.body.appendChild(main);
    document.querySelector("#main").innerHTML=`<main id="main">
    <h1>Hello</h1></main>`

    
    ;}

document.querySelector("#carrossel").innerHTML=`<div class="carrossel">

<div class="carrossel-item" button onclick="window.location.href='exames.html'">
<h2>Meus exames</h2>
</div>
<div class="carrossel-item" button onclick="window.location.href='agendamentos.html'">
<h2>Meus agendamentos</h2>
</div>
<div class="carrossel-item" button onclick="window.location.href='receitas.html'">
<h2>Minhas receitas</h2>
</div>
<div class="carrossel-item" button onclick="window.location.href='agenda.html'">
<h2>Agenda Fácil</h2>
</div>
                <div class="carrossel-item" button onclick="window.location.href='saude.html'">
                <h2>Minha Saúde</h2>
                </div>
                <div class="carrossel-item" button onclick="window.location.href='duvidas.html'">
                <h2>Dúvidas</h2>
                </div>
                
            </div>
            `;
document.querySelector("#login-modal").innerHTML=`

        <div class="login-box">
            <button id="close-button" class="material-icons" onclick="closeProfile()">close</button>
            <h2>Login</h2>
            <form id="login-form">
            <label for="username">Usuário:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Senha:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Entrar</button>
            </form>
        </div>`;
        
        getProfile=()=>{
            document.querySelector("#login-modal").style.display="flex";
            document.querySelector(".login-box").style.display="flex";
        };
        closeProfile=()=>{
            document.querySelector("#login-modal").style.display="none";
            document.querySelector(".login-box").style.display="none";
        };

function watermark(){
    const watermark = document.createElement("div");
    watermark.classList.add("watermark");
    watermark.textContent = "Sistemas de Saúde SIMSAU by Levi U.";
    document.body.appendChild(watermark);
    document.querySelector(".watermark").style.position = "fixed";
    document.querySelector(".watermark").style.bottom = "10px"; 
    document.querySelector(".watermark").style.right = "10px"; 


}
watermark();

        