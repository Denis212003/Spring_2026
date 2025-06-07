document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Функция переключения вкладок
    function switchTab(tabId) {
        // Удаляем активный класс у всех кнопок и контента
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Добавляем активный класс выбранной кнопке и соответствующему контенту
        document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
        document.getElementById(tabId).classList.add('active');
    }
    
    // Обработчики кликов на вкладки
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
    
    // Можно добавить обработчик для изменения вкладки при загрузке страницы по хэшу
    if (window.location.hash) {
        const tabId = window.location.hash.substring(1);
        if (document.getElementById(tabId)) {
            switchTab(tabId);
        }
    }
});