const elements = {
    gps: {
        delay: document.getElementById('gps-delay'),
        status: {
            on: document.getElementById('gps-status-on'),
            off: document.getElementById('gps-status-off')
        },
        update: document.getElementById('gps-update'),
        cords: {
            container: document.getElementById('gps-cords-container'),
            x: document.getElementById('gps-cords-x'),
            y: document.getElementById('gps-cords-y')
        }
    },
    math: {
        sum: document.getElementById('math-sum')
    }
};

const WebApp = {
    onGpsStart: () => {
        elements.gps.status.on.classList.remove('hide');
        elements.gps.status.off.classList.add('hide');

        elements.gps.cords.container.classList.remove('hide');
        elements.gps.cords.x.innerText = '-';
        elements.gps.cords.y.innerText = '-';
    },

    onGpsStop: () => {
        elements.gps.status.off.classList.remove('hide');
        elements.gps.status.on.classList.add('hide');

        elements.gps.cords.container.classList.add('hide');
    },

    onGpsUpdate: (x, y) => {
        elements.gps.update.classList.remove('hide');
        setTimeout(() => {
            elements.gps.update.classList.add('hide');
        }, 500);

        elements.gps.cords.x.innerText = x;
        elements.gps.cords.y.innerText = y;
    }
};

const gps   = NativeApp.getGps();
const math  = NativeApp.getMath();

elements.gps.delay.value = gps.getDelay();

elements.gps.delay.addEventListener('change', function(e){
    gps.setDelay(e.target.value);
});
elements.math.sum.addEventListener('click', function(e){
    alert(math.sum([1, 3.14, 'jazzy']));
});

gps.onStart('WebApp.onGpsStart');
gps.onStop('WebApp.onGpsStop');
gps.onUpdate('WebApp.onUpdate');

