function DSConfig(DSProvider, AppSettings) {
  DSProvider.defaults.baseUrl = AppSettings.apiUrl;
}

DSConfig.$inject = ['DSProvider', 'AppSettings'];

export default DSConfig;
