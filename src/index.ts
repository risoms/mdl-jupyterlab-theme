import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';

/**
 * A plugin for the risoms imhr
 */
const plugin: JupyterLabPlugin<void> = {
  id: '@risoms/mdl-jupyterlab-theme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
    manager.register({
      name: 'risoms imhr',
      isLight: false,
      load: function() {
        return manager.loadCSS('@risoms/mdl-jupyterlab-theme/index.css');
      },
      unload: function() {
        return Promise.resolve(void 0);
      }
    });
  },
  autoStart: true
};

export default plugin;
