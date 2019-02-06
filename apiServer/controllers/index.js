const createChallenge = require('./createChallenge');
const createMatch = require('./createMatch');
const createUser = require('./createUser');
const getChallenge = require('./getChallenge');
const getChallenges = require('./getChallenges');
const createTablesIfNotExists = require('./createTablesIfNotExists');

module.exports = {
  createChallenge,
  createMatch,
  createUser,
  getChallenge,
  getChallenges,
  createTablesIfNotExists
};
