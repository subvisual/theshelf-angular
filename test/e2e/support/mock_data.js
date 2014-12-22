/**
 * Retrieves .json mock data
 * @example
 * // returns json data from file 'post_session.json'
 * mockData('post_session')
 */
function mockData(mockDataFile) {
  return require('../../mock_data/' + mockDataFile + '.json');
}

/** Retrieves .json mock data */
module.exports = mockData;
