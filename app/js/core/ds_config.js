/*@ngInject*/
function DSConfig(DSProvider, AppSettings) {
  DSProvider.defaults.baseUrl = AppSettings.apiUrl;
}

export default DSConfig;
