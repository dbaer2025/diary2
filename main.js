import './style.css';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';

import { generateClient } from 'aws-amplify/api';
import { createDiary } from './src/graphql/mutations';
import { listDiaries } from './src/graphql/queries';
import { onCreateDiary } from './src/graphql/subscriptions';

Amplify.configure(amplifyconfig);

const client = generateClient();

const MutationButton = document.getElementById('MutationEventButton');
const MutationResult = document.getElementById('MutationResult');
const QueryResult = document.getElementById('QueryResult');
const SubscriptionResult = document.getElementById('SubscriptionResult');

async function addDiary() {
  const diary = {
    name: 'Use AppSync',
    description: `Realtime and Offline (${new Date().toLocaleString()})`
  };

  return await client.graphql({
    query: createDiary,
    variables: {
      input: diary
    }
  });
}

async function fetchDiaries() {
  try {
    const response = await client.graphql({
      query: listDiaries
    });

    response.data.listDiaries.items.map((diary, i) => {
      QueryResult.innerHTML += `<p>${diary.name} - ${diary.description}</p>`;
    });
  } catch (e) {
    console.log('Something went wrong', e);
  }
}

MutationButton.addEventListener('click', (evt) => {
  addDiary().then((evt) => {
    MutationResult.innerHTML += `<p>${evt.data.createDiary.name} - ${evt.data.createDiary.description}</p>`;
  });
});

function subscribeToNewDiaries() {
  client.graphql({ query: onCreateDiary }).subscribe({
    next: (evt) => {
      const diary = evt.data.onCreateDiary;
      SubscriptionResult.innerHTML += `<p>${diary.name} - ${diary.description}</p>`;
    }
  });
}

subscribeToNewDiaries();
fetchDiaries();