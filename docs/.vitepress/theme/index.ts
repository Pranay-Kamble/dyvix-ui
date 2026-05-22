import DefaultTheme from 'vitepress/theme';
import ButtonPlayground from './components/button/ButtonPlayground.vue';
import InputPlayground from './components/input/InputPlayground.vue';
import ModalPlayground from './components/modal/ModalPlayground.vue';
import './custom.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ButtonPlayground', ButtonPlayground);
    app.component('InputPlayground', InputPlayground);
    app.component('ModalPlayground', ModalPlayground);
  }
};
