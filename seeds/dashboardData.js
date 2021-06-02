const { BlogPosts } = require('../models');

const BlogPostsData = [
  {
    name: 'Learning MVC',
    content: 'MVC is an architectural pattern that structures a codebase in three distinct sections, according to a software design philosophy known as the **separation of concerns**.'
    // starting_date: 'April 20, 2021 07:00:00',
    // ending_date: 'June 21, 2021 17:00:00',
  },
  {
    name: 'Learning how to use Insomnia with ORM',
    content: "I used Inomnia to use GET, PUT, POST, DELETE routes. I connect it with the MySQL and I see the data in the db!!"
    // starting_date: 'June 22, 2021 09:00:00',
    // ending_date: 'September 22, 2021 22:00:00',
  },
  {
    name: 'Learning MySQL',
    content: "MySQL was easy to understand as I used excel everyday. I look at tables and fields that make up the spreadsheet? "
    // starting_date: 'September 23, 2021 08:30:00',
    // ending_date: 'December 21, 2021 20:30:00',
  },
];

const seedBlogPosts = () => BlogPosts.bulkCreate(BlogPostsData);

module.exports = seedBlogPosts;
