import { forEach, kebabCase } from 'lodash';

// page
import Header from './header.vue';
import Aside from './aside.vue';

// loading
// import CircleLoading from './loading/circles.vue';
import LotusLoading from './loading/lotus.vue';
// import StackLoading from './loading/stack.vue';
// import BounceLoading from './loading/three-bounce.vue';

const components = {
  Header,
  Aside,
  // CircleLoading,
  LotusLoading,
  // StackLoading,
  // BounceLoading,
};

function install(Vue) {
  const APP_PREFIX = 'dx-';
  forEach(components, (c, key) => {
    const name = (typeof c === 'function') ? key : c.name;
    if (name) {
      const componentName = `${APP_PREFIX}${kebabCase(name)}`;
      Vue.component(componentName, c);
    } else {
      console.log(`${key} has been deleted`);
    }
  });
}

export default {
  install,
};
