import './style.less';
import useSwitchButton from './utils/useSwitchButton';
import lightBtn from './buttons/lightBtn';
import musicBtn from './buttons/musicBtn';
import decorateBtn from './buttons/decorateBtn';
import flyBalloonBtn from './buttons/flyBalloonBtn';
import cakeBtn from './buttons/cakeBtn';
import messageBtn from './buttons/messageBtn';

const container = document.querySelector('.container');

useSwitchButton(container, lightBtn, 1500, 1000, musicBtn);

useSwitchButton(container, musicBtn, 1500, 5000, decorateBtn);

useSwitchButton(container, decorateBtn, 1000, 3000, flyBalloonBtn);

useSwitchButton(container, flyBalloonBtn, 1000, 3000, cakeBtn);

useSwitchButton(container, cakeBtn, 1000, 3000, cakeBtn);

useSwitchButton(container, cakeBtn, 1000, 3000, messageBtn);


