import './style.less';
import useSwitchButton from './utils/useSwitchButton';
import lightBtn from './buttons/lightBtn';
import musicBtn from './buttons/musicBtn';
import decorateBtn from './buttons/decorateBtn';

const container = document.querySelector('.container');

useSwitchButton(container, lightBtn, 1500, 2500, musicBtn);

useSwitchButton(container, musicBtn, 1500, 4000, decorateBtn);


