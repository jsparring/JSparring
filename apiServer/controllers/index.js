const createChallenge = require('./createChallenge');
const createMatch = require('./createMatch');
const createUser = require('./createUser');
const getChallengeClient = require('./getChallengeClient');
const getChallenges = require('./getChallenges');
const createTablesIfNotExists = require('./createTablesIfNotExists');

module.exports = {
  createChallenge,
  createMatch,
  createUser,
  getChallengeClient,
  getChallenges,
  createTablesIfNotExists
};
