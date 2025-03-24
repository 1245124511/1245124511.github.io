document.addEventListener('DOMContentLoaded', () => {
    // 导航链接不需要特殊处理，因为它们指向实际的HTML页面
    // 保留页面滚动时的动画效果
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '-50px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});