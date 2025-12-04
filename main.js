// ===== Translations =====

const translations = {
    en: {
        name: "Viktoriia Osipovych",
        role: "High Heels & Jazz Funk Instructor",
        location: "Toronto, Canada",
        about1:
            "I teach women how to dance — with clean technique, musicality and expressive movement.",
        about2:
            "My focus is on strength, confidence and feminine quality in dance.",
        photoTag: "High Heels · Jazz Funk · Femininity",
        btnBook: "Book a spot (DM on Instagram)",
        btnWaitlist: "Join waitlist (Telegram)",
        socialTitle: "Connect with me:",
        qrTitle: "Scan & follow my dance journey",
        qrSub: "Point your camera at the QR code to open my Instagram profile.",
        footerNote:
            "This digital card is my mini-website: one link for classes, contact and updates."
    },
    ru: {
        name: "Виктория Осипович",
        role: "Инструктор по High Heels и Jazz Funk",
        location: "Торонто, Канада",
        about1:
            "Я обучаю женщин танцу — с чистой техникой, музыкальностью и выразительными движениями.",
        about2:
            "Мой фокус — сила, уверенность и женственность в танце.",
        photoTag: "High Heels · Jazz Funk · Женственность",
        btnBook: "Забронировать место (DM в Instagram)",
        btnWaitlist: "Список ожидания (Telegram)",
        socialTitle: "Связаться со мной:",
        qrTitle: "Сканируй и следи за моим танцевальным путём",
        qrSub:
            "Наведи камеру телефона на QR-код, чтобы открыть мой профиль в Instagram.",
        footerNote:
            "Эта цифровая визитка — мой мини-сайт: одна ссылка для занятий, связи и новостей."
    },
    uk: {
        name: "Вікторія Осіпович",
        role: "Інструктор з High Heels та Jazz Funk",
        location: "Торонто, Канада",
        about1:
            "Я навчаю жінок танцю — з чистою технікою, музикальністю та виразними рухами.",
        about2:
            "Мій фокус — сила, впевненість і жіночність у танці.",
        photoTag: "High Heels · Jazz Funk · Жіночність",
        btnBook: "Забронювати місце (DM в Instagram)",
        btnWaitlist: "Список очікування (Telegram)",
        socialTitle: "Зв’яжіться зі мною:",
        qrTitle: "Скануй і слідкуй за моєю танцювальною подорожжю",
        qrSub:
            "Наведи камеру телефону на QR-код, щоб відкрити мій профіль в Instagram.",
        footerNote:
            "Ця цифрова візитка — мій міні-сайт: одне посилання для занять, зв’язку та оновлень."
    }
};

// ===== Language switching =====

const langButtons = document.querySelectorAll("[data-lang-btn]");
const i18nElements = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang;

    i18nElements.forEach((el) => {
        const key = el.dataset.i18n;
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    langButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
}

langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        setLanguage(lang);
    });
});

// Default language
setLanguage("en");
