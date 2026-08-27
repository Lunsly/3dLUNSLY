// Вставь сюда свою ссылку Telegram, например:
// const telegramUrl = "https://t.me/your_username";
const telegramUrl = "t.me/LunslyCORP";

const models = [
 {title:"Модель для стола",cat:"desk",icon:"✏️",author:"Добавить автора",link:"https://makerworld.com/en/3d-models"},
 {title:"Подставка для телефона",cat:"phone",icon:"📱",author:"Добавить автора",link:"https://makerworld.com/en/3d-models"},
 {title:"Декоративная фигурка",cat:"decor",icon:"🗿",author:"Добавить автора",link:"https://makerworld.com/en/3d-models"},
 {title:"Модульный органайзер",cat:"organizer",icon:"🗃️",author:"Добавить автора",link:"https://makerworld.com/en/3d-models"},
 {title:"Кабельный держатель",cat:"desk",icon:"🔌",author:"Добавить автора",link:"https://makerworld.com/en/3d-models"},
 {title:"Настольный декор",cat:"decor",icon:"✨",author:"Добавить автора",link:"https://makerworld.com/en/3d-models"}
];

// Добавляй сюда товары, которые уже напечатаны.
// Пример:
// {title:"Подставка",price:"15 BYN",icon:"📱",info:"Белый PLA",link:"#order"},
const stock = [];

let currentFilter="all";
const grid=document.querySelector("#catalog-grid"), search=document.querySelector("#search");
const stockGrid=document.querySelector("#stock-grid"), emptyStock=document.querySelector("#emptyStock"), stockCounter=document.querySelector("#stockCounter");

function renderModels(){
 const q=(search?.value||"").toLowerCase().trim(); grid.innerHTML="";
 models.filter(m=>(currentFilter==="all"||m.cat===currentFilter)&&(m.title.toLowerCase().includes(q)||m.author.toLowerCase().includes(q))).forEach(m=>{
  grid.insertAdjacentHTML("beforeend",`<article class="model"><div class="model-img">${m.icon||"🖨️"}</div><div class="model-body"><h3>${m.title}</h3><p>${m.author}</p><div class="model-meta">MakerWorld</div><a class="model-link" href="${m.link}" target="_blank" rel="noopener">Открыть модель →</a></div></article>`);
 });
}
function renderStock(){
 stockGrid.innerHTML=""; stockCounter.textContent=stock.length?`${stock.length} товар(ов)`:"";
 if(!stock.length){emptyStock.style.display="block";return}
 emptyStock.style.display="none";
 stock.forEach(item=>stockGrid.insertAdjacentHTML("beforeend",`<article class="model"><div class="model-img">${item.icon||"📦"}</div><div class="model-body"><h3>${item.title}</h3><p>${item.info||"Готово к заказу"}</p><div class="model-meta">${item.price||"Цена по запросу"}</div><a class="model-link" href="${item.link||"#order"}">Заказать →</a></div></article>`));
}
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");currentFilter=btn.dataset.filter;renderModels()}));
if(search)search.addEventListener("input",renderModels);
document.querySelectorAll("#telegram,#navTelegram").forEach(btn=>{btn.href=telegramUrl||"#order"});
renderModels();renderStock();
