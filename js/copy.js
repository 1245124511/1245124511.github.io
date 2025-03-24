function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = '复制成功！';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }).catch(err => {
        console.error('复制失败:', err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const contactInfo = document.querySelector('.contact-info ul');
    const items = [
        { label: '邮箱', value: 'q15834594320@163.com' },
        { label: '电话', value: '15834594320' },
        { label: '微信', value: 'Dongqibisheng' }
    ];

    // 清空现有列表
    contactInfo.innerHTML = '';

    // 添加新的联系方式项
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${item.label}：</strong>
            <span>${item.value}</span>
            <button class="copy-btn" onclick="copyToClipboard('${item.value}')">复制</button>
        `;
        contactInfo.appendChild(li);
    });

    // 更新社交媒体网格
    const socialGrid = document.querySelector('.social-grid');
    socialGrid.innerHTML = `
        <div class="social-card wechat-card">
            <i class="fab fa-weixin"></i>
            <span>微信</span>
            <img src="../images/wechat-qr.jpg" alt="微信二维码" class="qr-code">
        </div>
    `;
});