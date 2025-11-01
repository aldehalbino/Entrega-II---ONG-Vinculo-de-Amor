// Dropdown desktop
document.querySelectorAll('.has-dropdown > button').forEach(btn=>{
  const li = btn.parentElement;
  btn.addEventListener('click', ()=>{
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    li.classList.toggle('open', !expanded);
  });
  document.addEventListener('click', e=>{
    if(!li.contains(e.target)){
      btn.setAttribute('aria-expanded','false');
      li.classList.remove('open');
    }
  });
});

// Menu mobile
const burger = document.getElementById('mobile-menu');
const mobileNav = document.getElementById('mobileMenu');
if(burger && mobileNav){
  burger.addEventListener('click', ()=>{
    const open = !mobileNav.hasAttribute('hidden');
    mobileNav.toggleAttribute('hidden');
    burger.setAttribute('aria-expanded', String(!open));
  });
}

// Submenu no mobile
document.querySelectorAll('.mobile-nav .has-dropdown > button').forEach(btn=>{
  const dd = btn.parentElement.querySelector('.dropdown');
  btn.addEventListener('click', ()=>{
    const expanded = btn.getAttribute('aria-expanded')==='true';
    btn.setAttribute('aria-expanded', String(!expanded));
    dd.toggleAttribute('hidden');
  });
});

// Modal (qualquer botão com data-open-modal="#modal-news")
document.querySelectorAll('[data-open-modal]').forEach(el=>{
  const dlg = document.querySelector(el.getAttribute('data-open-modal'));
  if(!dlg) return;
  el.addEventListener('click', ()=> dlg.showModal());
});

// Toast simples (para formulários)
const toast = document.querySelector('.toast');
document.querySelectorAll('form').forEach(form=>{
  form.addEventListener('submit', e=>{
    if(!toast) return;
    e.preventDefault();
    toast.hidden = false;
    setTimeout(()=> toast.hidden = true, 2200);
    form.reset();
  });
});
