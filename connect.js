const mongoose = require('mongoose');
const Topic = require('./topics.js');
const User = require('./user.js');
const Activity = require('./activities.js');
//connect to db
mongoose.connect('mongodb://127.0.0.1:27017/databases_project')
.catch(error => console.log(error));



// Array of topic objects to insert
const topicsToInsert = [
  {
    title: "What is a document database?",
    description: "Explanation of document databases and their characteristics."
 },
 {
    title: "What is horizontal scaling?",
    description: "Explanation of horizontal scaling in the context of databases."
 },
 {
    title: "What is an entity relationship diagram?",
    description: "Overview of entity relationship diagrams and their use in database design."
 },
 {
    title: "What is a document database method to Create/Read/Update/Delete data?",
    description: "Explanation of CRUD operations in document databases."
 },
 {
    title: "What are sharding and replication?",
    description: "Explanation of sharding and replication in database scaling and high availability."
 },
 {
    title: "How does a database connect to a Web Front End?",
    description: "Explanation of how databases are integrated with web front-end applications."
 },
 {
    title: "Describe indexes",
    description: "Explanation of database indexes and their importance in query optimization."
 },
 {
    title: "How do you design a data model for a document database?",
    description: "Overview of best practices for designing data models in document databases."
 },
 {
    title: "What is NoSQL?",
    description: "Introduction to NoSQL databases and their benefits."
 },
 {
    title: "What is ACID?",
    description: "Explanation of the ACID properties in database transactions."
 }
  ];


  // Array of users to insert
  const usersToInsert = [
    {
      username: 'user1',
      password: 'password1',
      email: "user1@example.com",
      topic_id: ["651c01a8c212deefd4017ec9"]
    },
    {
      username: 'user2',
      password: 'password2',
      email: "user2@example.com",
      topic_id: ["651c01a8c212deefd4017ec8"]

    },
  ]

// Array of activities to insert
const activitiesToInsert = [
  {
    title: "What is a document database?",
    content: "Let's start by providing an introduction to document databases and understanding their key characteristics. Document databases are a type of NoSQL database that excel in handling unstructured or semi-structured data. Unlike traditional relational databases, document databases allow for flexible and dynamic data structures. In this activity, we'll delve into the world of document databases, and you'll have the opportunity to explore their fundamental features. We'll embark on a journey to create a simple content storage system, where you'll witness firsthand how document databases can efficiently manage and retrieve data. By the end of this activity, you'll have a solid understanding of the benefits and versatility of document databases for various data storage needs.",
    topics: ["651c01a8c212deefd4017ec8"]
  }
];
  
  // Insert the topics into the database
  Topic.insertMany(topicsToInsert)
    .then((savedTopics) => {
      console.log('Saved topics:', savedTopics);
    })
    .catch((error) => {
      console.error('Error saving topics:', error);
    });

    //insert the users into the database
    User.insertMany(usersToInsert)
    .then((savedUsers) => {
      console.log('Saved users:', savedUsers);
    })
    .catch((error) => {
      console.error('Error saving users:', error);
    });

    //insert the activities into the database
    Activity.insertMany(activitiesToInsert)
    .then((savedActivities) => {
      console.log('Saved activities:', savedActivities);
    })
    .catch((error) => {
      console.error('Error saving activities:', error);
    });