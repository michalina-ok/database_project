//connecting to mongoDB



// Array of topic objects to insert
const topicsToInsert = [
    {
      title: 'Topic 1',
      description: 'Description for Topic 1',
    },
    {
      title: 'Topic 2',
      description: 'Description for Topic 2',
    },
    // Add more topics as needed
  ];
  
  // Insert the topics into the database
  Topic.insertMany(topicsToInsert)
    .then((savedTopics) => {
      console.log('Saved topics:', savedTopics);
    })
    .catch((error) => {
      console.error('Error saving topics:', error);
    });