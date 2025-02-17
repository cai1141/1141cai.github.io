document.addEventListener('DOMContentLoaded', function() {
    // 搜索功能
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        // 这里添加搜索逻辑
    });

    // 标签点击
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            tag.classList.toggle('active');
            // 这里添加标签筛选逻辑
        });
    });

    // 收藏功能
    const saveButtons = document.querySelectorAll('.btn-save');
    saveButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            btn.classList.toggle('saved');
            // 这里添加收藏逻辑
        });
    });
});

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let value = i18n[lang];
        keys.forEach(key => {
            value = value[key];
        });
        
        if (element.tagName === 'INPUT' && element.type === 'text') {
            element.placeholder = value;
        } else {
            element.textContent = value;
        }
    });

    // 保存语言选择
    localStorage.setItem('preferred-language', lang);
} 