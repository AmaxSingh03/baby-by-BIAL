function navigateTo(screenId) {
    
    const screens = document.querySelectorAll('.screen-content');
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');

    
    const headerTitle = document.querySelector('.header-title');
    const leftButton = document.querySelector('.button-header.left');
    const rightButton = document.querySelector('.button-header.right');
    
    
    switch(screenId) {
        case 'signin':
            headerTitle.textContent = 'Sign In as...'; // Muda o título para "Sign In"
            leftButton.textContent = '<'; // Botão "voltar"
            leftButton.onclick = () => navigateTo('home'); // Botão volta para a tela inicial
            rightButton.textContent = ''; // Botão "Next"
            rightButton.onclick = () => navigateTo('signin'); // Botão vai para cursos
            break;
        case 'courses':
            headerTitle.textContent = 'Courses'; // Muda o título para "Courses"
            leftButton.innerHTML = '<img src="pics/text.svg" alt="Back" style="width: 30px; height: 30px;" />'; // Botão "voltar"
            leftButton.onclick = () => navigateTo('maternai'); // Botão volta para a tela de login
            rightButton.innerHTML = '<img src="pics/boneco.svg" alt="Back" style="width: 30px; height: 30px;" />'; // Botão "voltar"
            rightButton.onclick = () => navigateTo('courses'); // Botão vai para a tela inicial
            break;
        case 'home':
            headerTitle.textContent = 'WELCOME'; // Título para a tela inicial
            leftButton.textContent = ''; // Sem botão à esquerda na tela inicial
            leftButton.onclick = () => navigateTo('home');
            rightButton.textContent = ''; // Botão "Next"
            rightButton.onclick = () => navigateTo('home'); // Vai para a tela de login
            break;
        case 'tobemum':
            headerTitle.textContent = 'Be a Mom'; // Título para a tela inicial
            leftButton.textContent = '<'; // Sem botão à esquerda na tela inicial
            leftButton.onclick = () => navigateTo('courses');
            rightButton.textContent = ''; // Botão "Next"
            rightButton.onclick = () => navigateTo('tobemum'); // Vai para a tela de login
            break; 
        case 'maternai':
            headerTitle.textContent = 'MaternAI'; // Muda o título para "Courses"
            leftButton.innerHTML = '<img src="pics/casa.svg" alt="Back" style="width: 30px; height: 30px;" />'; // Botão "voltar"
            leftButton.onclick = () => navigateTo('courses'); // Botão volta para a tela de login
            rightButton.innerHTML = '<img src="pics/boneco.svg" alt="Back" style="width: 30px; height: 30px;" />'; // Botão "voltar"
            rightButton.onclick = () => navigateTo('maternai'); // Botão vai para a tela inicial
            break;       
        default:
            headerTitle.textContent = 'WELCOME'; // Título padrão
            leftButton.textContent = ''; // Sem botão à esquerda
            rightButton.textContent = ''; 
            rightButton.onclick = () => navigateTo('base'); // Vai para a tela inicial
    }
}
