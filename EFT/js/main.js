document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const imageContainers = document.querySelectorAll('.image-container');

    // 初始化显示所有商人
    showAllTraders();

    // 添加过滤功能
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有按钮的激活状态
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // 添加当前按钮的激活状态
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            if (filterValue === 'all') {
                showAllTraders();
            } else {
                hideAllTraders();
                showTrader(filterValue);
            }
        });
    });

    // 显示所有商人
    function showAllTraders() {
        imageContainers.forEach(container => {
            container.classList.add('active');
        });
    }

    // 隐藏所有商人
    function hideAllTraders() {
        imageContainers.forEach(container => {
            container.classList.remove('active');
        });
    }

    // 显示指定商人
    function showTrader(traderType) {
        const trader = document.querySelector(`.image-container[data-type="${traderType}"]`);
        if (trader) {
            trader.classList.add('active');
        }
    }
});