// === НАСТРОЙКИ TELEGRAM ===
const TELEGRAM_TOKEN = '8637725900:AAHlW9VsiGZnVfQqtUhV1iAyKUCdvKI34zQ';
const TELEGRAM_CHAT_ID = '409251921';

// === ОБЪЕКТ ПЕРЕВОДОВ ===
const translations = {
    ru: {
        heroSubtitle: "Приглашение",
        timerTitle: "До свадьбы осталось",
        days: "Дней", hours: "Часов", minutes: "Минут", seconds: "Секунд",
        photo: "Фото",
        storyTitle: "Наша история",
        storyText: "Все началось с одной случайной встречи, которая изменила нашу жизнь навсегда.",
        celebrationTitle: "Торжество",
        celebrationText: "Мы подготовили для вас вечер, наполненный уютом и искренними эмоциями.",
        celebrationTime: "Начало торжества в 17:00.",
        when: "Когда", where: "Где",
        guestGathering: "17:00 — Сбор гостей",
        regTitle: "Регистрация",
        regSub: "Пожалуйста, подтвердите ваше участие.",
        labelCount: "Сколько вас будет?",
        opt1: "Я приду один/одна", opt2: "Придем вдвоем", opt3: "Придем втроем", opt4: "Придем вчетвером", opt5: "Придем впятером",
        submitBtn: "Подтвердить",
        guestNamePlaceholder: "Имя и Фамилия гостя",
        alertSuccess: "Ваше участие успешно подтверждено!",
        alertError: "Ошибка при отправке. Попробуйте еще раз.",
        labelPhone: "Контактный телефон",
        phonePlaceholder: "+7 (___) ___-__-__",
        kidTitle: "Очень важно",
        kidText: "Дорогие гости! Мы очень хотим, чтобы в этот вечер вы смогли полностью отдохнуть и насладиться праздником. Программа нашего мероприятия рассчитана на взрослую аудиторию, поэтому мы просим вас прийти без детей. Благодарим за понимание!",
        august: "Август 2026",
        joinGroup: "Присоединиться к группе",
        groupTitle: "Группа для видео и фото со свадьбы",
        groupInfo: "Присоединяйтесь к этой группе и делитесь своими видео и фото со свадьбы там!",
        geoTitle: "Место проведения",
        geoInfo: "г. Актобе, Улица Бокенбай батыра, 40г Банкетеный ресторан \"Elegant Hall\"",
        geoBtn: "Посмотреть в 2ГИС",
        groupcheerTitle: "Группа для вашего видео поздравления",
        groupcheerInfo: "Присоединяйтесь к этой группе и делитесь своими видео там! Мы будем рады увидеть ваши теплые слова и пожелания.",
        hostsSubtitle: "Хозяева торжества",
        restaurantname: "Банкетеный ресторан \"Elegant Hall\"",
        restaurantaddress: "г. Актобе, Улица Бокенбай батыра, 40г",
        locationTitle: "Где пройдет",
    },
    kz: {
        heroSubtitle: "Шақыру",
        timerTitle: "Тойға дейінгі уақыт",
        days: "Күн", hours: "Сағат", minutes: "Минут", seconds: "Секунд",
        
        photo: "Сурет",
        
        storyTitle: "Біздің хикаямыз",
        storyText: "Барлығы кездейсоқ кездесуден басталып, өмірімізді мәңгілікке өзгерткен ерекше сәтке айналды.",
        
        celebrationTitle: "Салтанатты кеш",
        celebrationText: "Сіздер үшін жайлы әрі шынайы әсерлерге толы ерекше кеш дайындадық.",
        celebrationTime: "Салтанатты кеш сағат 17:00-де басталады.",
        
        when: "Қашан", where: "Қайда",
        
        guestGathering: "17:00 — Қонақтарды қарсы алу",
        
        regTitle: "Тіркелу",
        regSub: "Қатысуыңызды растауларыңызды өтінеміз.",
        
        labelCount: "Қанша адам болып келесіздер?",
        opt1: "Өзім келемін",
        opt2: "Екеуіміз келеміз",
        
        submitBtn: "Растау",
        
        guestNamePlaceholder: "Қонақтың аты-жөні",
        
        alertSuccess: "Қатысуыңыз сәтті расталды!",
        alertError: "Жіберу кезінде қате орын алды. Қайтадан көріңіз.",
        
        labelPhone: "Байланыс нөмірі",
        phonePlaceholder: "+7 (___) ___-__-__",
        
        kidTitle: "Өте маңызды",
        kidText: "Құрметті қонақтар! Мейрамхананың талаптарына сәйкес кеш бағдарламасы ересектерге арналған. Осыған орай тойға баласыз келулеріңізді өтінеміз. Түсіністік танытқандарыңыз үшін алғыс білдіреміз!",
        
        august: "Тамыз 2026",
        
        joinGroup: "Топқа қосылу",
        
        groupTitle: "Тойдың видео және фотосуреттер тобы",
        groupInfo: "Осы топқа қосылып, тойдан естелік фото мен видеоларыңызды осы жерде бөлісулеріңізді сұраймыз!",
        
        geoTitle: "Өтетін жер",
        geoInfo: "Ақтөбе қ., Бөкенбай батыр көшесі, 40г, \"Elegant Hall\" банкет залы",
        geoBtn: "2ГИС-тен қарау",
        
        groupcheerTitle: "Видео құттықтауларға арналған топ",
        groupcheerInfo: "Осы топқа қосылып, өз видео тілектеріңізді бөлісіңіздер! Сіздердің жылы лебіздеріңізді көруге қуаныштымыз.",
        
        hostsSubtitle: "Той иелері",
        
        restaurantname: "\"Elegant Hall\" банкет залы",
        restaurantaddress: "Ақтөбе қ., Бөкенбай батыр көшесі, 40г",
        
        locationTitle: "Өтетін орны",
    }
};

let currentLang = 'kz';

// Функция смены языка
function switchLanguage() {
    currentLang = currentLang === 'ru' ? 'kz' : 'ru';
    
    // Обновляем все элементы с data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });

    // Обновляем плейсхолдеры в форме
    updateGuestInputs();
}

// Привязка кнопки
document.getElementById('lang-toggle').addEventListener('click', switchLanguage);

// --- ОСТАЛЬНАЯ ЛОГИКА (Reveal, Timer, Player, TG) ---

// Анимация появления
function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) el.classList.add("active");
    });
}
window.addEventListener("scroll", reveal);

function revealmarquee() {
    document.querySelectorAll(".reveal-marquee").forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) el.classList.add("active");
    });
}
window.addEventListener("scroll", revealmarquee);

// Таймер
const countdownDate = new Date("Aug 22, 2026 00:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
}, 1000);

// Динамические поля имен
const guestCountSelect = document.getElementById('guest-count');
const guestNamesContainer = document.getElementById('guest-names-container');

function updateGuestInputs() {
    const count = parseInt(guestCountSelect.value);
    guestNamesContainer.innerHTML = '';
    for (let i = 1; i <= count; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'guest-name';
        input.placeholder = `${translations[currentLang].guestNamePlaceholder} ${i}`;
        input.required = true;
        guestNamesContainer.appendChild(input);
    }
}
guestCountSelect.addEventListener('change', updateGuestInputs);
updateGuestInputs(); // Инициализация первого поля

// Плеер
const audio = document.getElementById('wedding-music');
const playBtn = document.getElementById('play-pause');

// Функция для переключения состояния
function toggleMusic() {
    if (audio.paused) {
        // Пытаемся воспроизвести
        audio.play().then(() => {
            playBtn.textContent = '||';
            playBtn.classList.add('playing');
        }).catch(error => {
            console.error("Ошибка воспроизведения:", error);
            alert("Нажмите еще раз, чтобы запустить музыку");
        });
    } else {
        audio.pause();
        playBtn.textContent = '▶';
        playBtn.classList.remove('playing');
    }
}

playBtn.addEventListener('click', toggleMusic);

// Обработка окончания трека (чтобы кнопка сбросилась)
audio.onended = () => {
    playBtn.textContent = '▶';
    playBtn.classList.remove('playing');
};

// Отправка в TG
document.getElementById('tg-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const phone = document.getElementById('guest-phone').value;

    // Проверка: номер должен быть от 10 до 11 цифр
    if (phone.length < 10) {
        e.preventDefault();
        const errorMsg = currentLang === 'ru' ? 
            "Пожалуйста, введите корректный номер телефона" : 
            "Өтінемін, дұрыс телефон нөмірін енгізіңіз";
        alert(errorMsg);
        return;
    }
    const names = Array.from(document.querySelectorAll('.guest-name'))
        .map((el, i) => `${i+1}. ${el.value}`).join('\n');
    
    // Формируем красивое сообщение для Telegram
    const message = `
🔔 *Новая регистрация!*

📱 *Телефон:* ${phone}
👥 *Гости:*
${names}

📅 Дата: ${new Date().toLocaleString()}
    `;
    
    const btn = document.getElementById('submit-btn');
    btn.disabled = true;

    fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            chat_id: TELEGRAM_CHAT_ID, 
            text: message, 
            parse_mode: 'Markdown' 
        })
    })
    .then(res => {
        if(res.ok) { 
            alert(translations[currentLang].alertSuccess); 
            this.reset(); 
            updateGuestInputs(); 
        } else { 
            alert(translations[currentLang].alertError); 
        }
    })
    .finally(() => btn.disabled = false);
});

// Валидация телефона (только цифры, максимум 11 символов для РФ/КЗ)

const phoneInput = document.getElementById('guest-phone');

phoneInput.addEventListener('input', function (e) {
    let matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");

    // Если пользователь пытается стереть "7", не даем
    if (def.length >= val.length) val = def;

    this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });
});

// Дополнительно: чтобы при фокусе сразу появлялось "+7 "
phoneInput.addEventListener('focus', function() {
    if (this.value.length < 4) {
        this.value = "+7 (";
    }
});

// Делаем кнопку смены языка полупрозрачной при прокрутке

window.addEventListener("scroll", function() {
    const langBtn = document.getElementById('lang-toggle');
    if (window.scrollY > 100) {
        langBtn.style.opacity = "0.5"; // Делаем полупрозрачной
    } else {
        langBtn.style.opacity = "1";
    }
});

