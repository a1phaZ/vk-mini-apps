// import { createHashHistory } from 'history';
export const historyPush = (view, panel) => {
	window.history.pushState({view: view, panel: panel}, `${view}.${panel}`, `#${view}.${panel}`);
}
// export default createHashHistory();