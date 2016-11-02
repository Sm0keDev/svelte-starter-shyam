import { load, query } from '../utils';

export const loadHome = () => {
  Promise.all([
    load('./pages/home/home.html'),
    load('./components/navigation/navigation.html')
  ])
  .then((data) => {
    const app = query('#app');
    app.innerHTML = data[0];
    history.pushState({ }, 'Home', '/');

    const navigation = query('#navigation');
    navigation.innerHTML = data[1];
    query('#home').onclick = loadHome;
    query('#about').onclick = loadAbout;

    componentHandler.upgradeAllRegistered();
  });
};

export const loadAbout = () => {
  Promise.all([
    load('./pages/about/about.html'),
    load('./components/navigation/navigation.html')
  ])
  .then((data) => {
    const app = document.querySelector('#app');
    app.innerHTML = data[0];
    history.pushState({ }, 'About', 'about');

    const navigation = query('#navigation');
    navigation.innerHTML = data[1];
    query('#home').onclick = loadHome;
    query('#about').onclick = loadAbout;

    componentHandler.upgradeAllRegistered();
  });
};
