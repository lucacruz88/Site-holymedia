// Atualiza automaticamente o ano no rodapé.
document.getElementById('year').textContent = new Date().getFullYear();

// Fecha o menu ao escolher uma seção no celular.
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('open');
  });
});
