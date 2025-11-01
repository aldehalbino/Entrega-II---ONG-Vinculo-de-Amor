# ONG Vínculo de Amor  
**Entrega II - Desenvolvimento Front-End II**  
Autora: *Aldenize Albino de Oliveira*  
Data: Outubro de 2025  

---

## Objetivo do Projeto  
Esta segunda entrega tem como objetivo aplicar **conceitos de CSS3 e responsividade** para transformar a estrutura HTML da Entrega I em uma interface moderna, acessível e adaptável a diferentes dispositivos.  

O site da **ONG Vínculo de Amor** apresenta a história e os projetos da organização que atua no **resgate, reabilitação e adoção de animais abandonados**, promovendo amor, empatia e conscientização.  

---

## Estrutura do Projeto  

Entrega-II-Vinculo-de-Amor/
│
├── css/
│ ├── variables.css → Sistema de design (cores, fontes e espaçamento)
│ ├── base.css → Estilos globais e tipografia
│ ├── layout.css → Estrutura de layout com Grid e Flexbox
│ ├── components.css → Botões, formulários e cards
│ └── responsive.css → Breakpoints e ajustes para mobile
│
├── js/
│ └── script.js → Interatividade (menu mobile e dropdown)
│
├── imagens/ → Imagens utilizadas no projeto
├── videos/ → Vídeo principal da página inicial
│
├── index.html → Página inicial (sobre, missão, visão, valores)
├── projeto.html → Visão geral dos projetos
├── cadastro.html → Formulário de cadastro de voluntário
├── resgate.html → Projeto de resgate de animais
├── reabilitacao.html → Projeto de reabilitação e tratamento
├── novo-lar.html → Projeto de adoção responsável
├── educacao-conscientizacao.html → Projeto de educação e conscientização
└── README.md

---

## Sistema de Design  

**Paleta de cores (8 tons):**
- 🌿 Primária: `#2e7d32`
- 🌿 Primária Clara: `#66bb6a`
- 🌿 Primária Escura: `#1b5e20`
- 💚 Secundária: `#81c784`
- 💚 Secundária Escura: `#388e3c`
- ⚪ Neutras: `#ffffff`, `#f5f5f5`, `#e0e0e0`, `#212121`

**Tipografia Hierárquica (5 tamanhos):**
- `--font-xs`, `--font-sm`, `--font-md`, `--font-lg`, `--font-xl`

**Sistema de Espaçamento (6 níveis):**
- `8px, 16px, 24px, 32px, 48px, 64px`

---

## Estrutura e Layout  

- **CSS Grid (12 colunas)** usado na estrutura principal.  
- **Flexbox** para alinhamento interno e distribuição dos componentes.  
- **5 breakpoints** para garantir responsividade: 1200px, 992px, 768px, 576px, 400px.  
- **Cabeçalho fixo e menu interativo** com submenu dropdown e menu hambúrguer no mobile.  

---

## Navegação  

- Menu principal com as páginas:
  - Início
  - Projetos ▾ *(submenu com 4 projetos)*
  - Seja um Voluntário  

- Submenu funcional:
  - Projeto Resgate  
  - Projeto Reabilitar  
  - Projeto Novo Lar  
  - Projeto Educação e Conscientização  

- Menu hambúrguer ativado via JavaScript para telas pequenas.

---

## Componentes  

- **Cards responsivos:** utilizados nas seções e projetos.  
- **Botões interativos:** com estados `hover`, `focus`, `active` e `disabled`.  
- **Formulário estilizado:** com validação visual e campos alinhados corretamente.  
- **Alertas/Feedbacks:** estrutura `.alert` preparada para mensagens.  

---

## Responsividade  

O site se adapta a todos os tamanhos de tela:  
- Desktop (≥ 1200px)  
- Tablet (768px – 992px)  
- Mobile (≤ 768px)  

Menus, imagens e textos ajustam-se automaticamente para garantir **acessibilidade e boa leitura**.

---

## Tecnologias Utilizadas  

- **HTML5**  
- **CSS3 (Flexbox, Grid e variáveis customizadas)**  
- **JavaScript** (para interatividade do menu)  

---

## Como Visualizar  

1. Acesse o link público do repositório no GitHub:  
   [https://github.com/SEU_USUARIO/Entrega-II-Vinculo-de-Amor](#)  
2. Clique em **Code → Download ZIP**  
3. Extraia a pasta e abra o arquivo **index.html** no navegador.    
