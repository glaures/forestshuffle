export const preventPullToRefresh = () => {// Variables to track touch state
    let touchStartY = 0;
    let preventPullToRefresh = false;

    document.addEventListener('touchstart', function (event) {
        if (event.touches.length !== 1) return;
        touchStartY = event.touches[0].clientY;
        preventPullToRefresh = window.scrollY === 0;
    }, {passive: false});

    document.addEventListener('touchmove', function (event) {
        const touchCurrentY = event.touches[0].clientY;
        const touchDeltaY = touchCurrentY - touchStartY;

        if (preventPullToRefresh && touchDeltaY > 0) {
            event.preventDefault();
        }
    }, {passive: false});
}