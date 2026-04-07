const TELEGRAM_TOKEN = '8637725900:AAHlW9VsiGZnVfQqtUhV1iAyKUCdvKI34zQ';
const TELEGRAM_CHAT_ID = '409251921';

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
        kidText: "Құрметті қонақтар! Мейрамхананың талаптарына сәйкес кеш бағдарламасы ересектерге арналған. Осыған орай тойға баласыз келулеріңізді сұраймыз. Түсіністік танытқандарыңыз үшін алғыс білдіреміз!",
        august: "Тамыз",
        joinGroup: "Топқа қосылу",
        groupTitle: "Тойдың видео және фотосуреттер группасы",
        groupInfo: "Тойдың естелік сәттерімен осы Telegram группасында бөлісулеріңізді сұраймыз. Көрсеткен қолдауларыңызға алдын ала рақмет!",
        geoTitle: "Мекенжайымыз:",
        geoInfo1: "Ақтөбе қ., Бөкенбай батыр көшесі, 40г,",
        geoInfo2: "банкет залы",
        elegant: "\"Elegant Hall\"",
        geoBtn: "2ГИС-тен қарау",
        groupcheerTitle: "Видео құттықтауларға арналған группа",
        groupcheerInfo: "Осы Telegram группада өз видео-тілектеріңізді бөлісулеріңізді сұраймыз. Сіздердің ақ ниетті лебіздеріңізді көру біз үшін үлкен қуаныш!",
        hostsSubtitle: "Той иелері",
        restaurantname: "\"Elegant Hall\" банкет залы",
        restaurantaddress: "Ақтөбе қ., Бөкенбай батыр көшесі, 40г",
        locationTitle: "Өтетін орны",
    }
};

let currentLang = 'kz';

function switchLanguage() {
    currentLang = currentLang === 'ru' ? 'kz' : 'ru';
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });
    updateGuestInputs();
}

document.getElementById('lang-toggle').addEventListener('click', switchLanguage);

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

const countdownDate = new Date("Aug 22, 2026 00:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
}, 1000);

const audio = document.getElementById('wedding-music');
const playBtn = document.getElementById('play-pause');

function toggleMusic() {
    if (audio.paused) {
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

audio.onended = () => {
    playBtn.textContent = '▶';
    playBtn.classList.remove('playing');
};

const weddingForm = document.getElementById('wedding-form');

if (weddingForm) {
    weddingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const guestName = document.getElementById('guest-name').value;
        const attendanceElement = document.querySelector('input[name="attendance"]:checked');
        const attendanceValue = attendanceElement ? attendanceElement.value : 'Не выбрано';
        
        const statusMap = {
            'yes': '✅ Приду один/одна',
            'couple': '👩‍❤️‍👨 Приду с парой',
            'no': '❌ Не смогу прийти'
        };

        const statusText = statusMap[attendanceValue] || attendanceValue;

        const message = `
🔔 *Новая регистрация на той Жасулан и Ясмин 22.08.2026!*

👤 *Имя:* ${guestName}
📝 *Статус:* ${statusText}

📅 Дата: ${new Date().toLocaleString()}
        `;

        const submitBtn = this.querySelector('.submit-button');
        submitBtn.disabled = true;
        submitBtn.innerText = '...';

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
            } else { 
                alert(translations[currentLang].alertError); 
            }
        })
        .catch(() => alert(translations[currentLang].alertError))
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerText = 'ЖІБЕРУ';
        });
    });
}
