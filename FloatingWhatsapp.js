
const whatsappConfig = {
    phone: '51926495639',
    message: 'Hola Vladimir, he visto tu portfolio y me interesa trabajar contigo. ¿Tienes un momento del día donde podríamos agendar una reunión?',
    tooltipText: '¿Agendamos una reunión?'
};


function getWhatsAppUrl() {
    const cleanPhone = whatsappConfig.phone.replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(whatsappConfig.message);
    return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

function initFloatingWhatsApp() {
    const whatsappUrl = getWhatsAppUrl();
    
    const whatsappButton = document.getElementById('whatsappButton');
    const whatsappTooltip = document.getElementById('whatsappTooltip');
    
    function openWhatsApp(event) {
        if (event) event.preventDefault();
        window.open(whatsappUrl, '_blank');
        return false;
    }
    
    if (whatsappButton) {
        whatsappButton.href = whatsappUrl;
        whatsappButton.setAttribute('target', '_blank');
        whatsappButton.addEventListener('click', openWhatsApp);
    }
    
    if (whatsappTooltip) {
        whatsappTooltip.style.cursor = 'pointer';
        whatsappTooltip.addEventListener('click', openWhatsApp);
    }
    
    setTimeout(() => {
        if (whatsappTooltip && whatsappTooltip.style.display !== 'none') {
            whatsappTooltip.style.transition = 'opacity 0.5s ease';
            whatsappTooltip.style.opacity = '0';
            setTimeout(() => {
                if (whatsappTooltip) whatsappTooltip.style.display = 'none';
            }, 500);
        }
    }, 8000);
    
    console.log('WhatsApp button initialized:', whatsappUrl);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFloatingWhatsApp);
} else {
    initFloatingWhatsApp();
}

window.initFloatingWhatsApp = initFloatingWhatsApp;
window.whatsappConfig = whatsappConfig;