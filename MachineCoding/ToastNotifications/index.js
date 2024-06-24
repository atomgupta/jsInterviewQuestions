document.addEventListener('DOMContentLoaded', () => {
    const sucBtn = document.getElementById('suc');
    const warBtn = document.getElementById('war');
    const errBtn = document.getElementById('err');
    const toastBox = document.getElementById('toast-container');

    sucBtn.addEventListener('click', () => showToast('Success'));
    warBtn.addEventListener('click', () => showToast('Warning'));
    errBtn.addEventListener('click', () => showToast('Error'));

    function showToast(message) {
        const newToast = createToast(message);
        toastBox.appendChild(newToast);

        setTimeout(() => {
            newToast.remove();
        }, 3000);
    }

    function createToast(message) {
        const newToast = document.createElement('div');
        newToast.classList.add('toast', message.toLowerCase());

        const toastIcon = document.createElement('span');
        toastIcon.classList.add('toast-icon');
        toastIcon.innerHTML = getIcon(message);

        const toastText = document.createElement('p');
        toastText.classList.add('toast-text');
        toastText.innerText = message;

        newToast.appendChild(toastIcon);
        newToast.appendChild(toastText);

        return newToast;
    }

    function getIcon(message) {
        switch (message) {
            case 'Success':
                return '()';
            case 'Warning':
                return '!!';
            case 'Error':
                return 'x';
            default:
                return '';
        }
    }
});
