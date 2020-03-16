const functions = require('firebase-functions');
const algoliasearch = require('algoliasearch');

const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
// const ALGOLIA_SEARCH_KEY = functions.config().algolia.search_key;

const ALGOLIA_INDEX_NAME = 'questions';
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);

exports.onQuestionAdded = functions.firestore.document('questions/{questionId}').onCreate((snap, context) => {
  // Get the note document
  const question = snap.data();

  // Add an 'objectID' field which Algolia requires
  question.objectID = context.params.questionId;
  question.createdDate = question.createdDate.toDate();
  question.id = context.params.questionId;

  // Write to the algolia index
  const index = client.initIndex(ALGOLIA_INDEX_NAME);

  return index.saveObject(question);
});
