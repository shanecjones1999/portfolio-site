// This is just a simple array of mock blog posts.
export default [
  {
    id: 1,
    title: "How to Run: A Beginner's Guide",
    slug: 'how-to-run-a-beginners-guide',
    content: `## Welcome to My Blog!

      \nThis is an example of a blog post written in Markdown. You can use various Markdown features to format your content, such as headings, lists, links, and more.
    
      \n* Here's a bullet list
      \n* You can also create numbered lists
    
      \n[Ember.js](https://emberjs.com/) is a great framework for building ambitious web applications.

      \n \# 1
      \n \# 2
      \n \# 3
    
      \n## [link](http://emberjs.com)

      \n**Happy blogging!**`,
    date: '2023-07-15',
  },
  {
    id: 2,
    title: 'My Amazing Trip to the Mountains',
    slug: 'my-amazing-trip-to-the-mountains',
    content:
    "Testing this content vs ```this content```",
      // "Nullam eu nisi a ante aliquet consectetur. Vivamus nec nisi ultrices, venenatis arcu sit amet, varius nunc."
      // + "```"
      // + "\nThis is code."
      // + "```",
    author: 'Jane Smith',
    date: '2023-07-10',
  },
  // Add more mock blog posts as needed
];
