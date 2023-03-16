import { loadMicroApp, initGlobalState } from '../../es';

let app;

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
});

onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
});

function mount() {
  app = loadMicroApp(
    { name: 'react15', entry: '//localhost:7100', container: '#react15', props: {
      onFormChange: (value) => {
        console.log('[onFormChange - master]', value);
      }
    } },
    { sandbox: { experimentalStyleIsolation: true } },
  );
}

function unmount() {
  app.unmount();
}

document.querySelector('#mount').addEventListener('click', mount);
document.querySelector('#unmount').addEventListener('click', unmount);

loadMicroApp({ name: 'vue', entry: '//localhost:7101', container: '#vue' });
