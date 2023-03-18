import { DEFAULT_PATHS } from '@/ui/admin/uiConfig.js';

const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const routesAndMenuItems = {
  mainMenuItems: [
    {
      path: DEFAULT_PATHS.APP,
      exact: true,
      redirect: true,
      to: `${appRoot}`,
    }
  ],
  sidebarItems: [],
};
export default routesAndMenuItems;
