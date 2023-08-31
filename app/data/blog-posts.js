import types from './types';

export default [
  {
    id: 3,
    title: 'testfdsf',
    slug: 'test',
    content: [
      {
        type: types.text,
        value: 'Here is some text'
      },
      {
        type: types.codeBlock,
        value: `let x = foo(); 
const y = bar(x);`
      },
      {
        type: types.image,
        value: 'Here is an image'
      },
      {
        type: types.socialMediaEmbedding,
        value: 'Here is a socialMediaEmbedding'
      },
      {
        type: types.link,
        value: 'Here is a link'
      },
      {
        type: types.table,
        value: 'Here is a table'
      },
      {
        type: types.equation,
        value: 'Here is an equation'
      },
      {
        type: types.quote,
        value: {
          text: 'Here is a quote.',
          author: 'Shane Jones'
        }
      }
    ],
    date: 'October 20, 2023'
  },
  {
    id: 1,
    title: 'How I Built this Blog',
    slug: 'how-I-built-this-blog',
    date: 'August 22, 2023',
    content: [
      {
        type: types.text,
        value: `I've wanted have a place to document thoughts and ideas I've had for a long while now, but finding the
        medium to do so has always been a struggle. On the Internet, there's no shortage of content-hosting platforms. We all 
        know the major social media platforms (Youtube, Twitter, Instagram, Facebook), but these didn't fit my needs. These platforms 
        do not offer any customization. You can add content, but there's no way to determine how it looks.`
      },
      {
        type: types.text,
        value: `How information is delivered
        is almost as important as the information itself. There are other website-builders, but even those have their customization 
        limitations. I figured this would be a great opportunity to build something new. Here's how I did it.`
      },
      {
        type: types.text,
        value: '---'
      },
      {
        type: types.text,
        value: `One of the most important parts of the design for this website is ease of content creation. I originally tried using
        a static cite generator called Jekyll, which was great, except it kept giving me issues after I had successfully installed it.
        It also seemed slightly dated, so I ultimately gave up on it in persuit of something better. Anyways, the best part of Jekyll
        is how easy it is to add content. Just a few lines of code create a new blog post. I really wanted something similar.`
      },
      {
        type: types.text,
        value: `This blog is built with Ember.js, a Javascript frontend framework, similar to React, Angular, and Vue. Like these other
        frontend frameworks, Ember utilizes components for reusability. This works great for this site, consisting of mostly blog posts 
        and projects, I am able just design a few key pieces (blog posts, project posts), and reuse these pieces again and again! While this is
        _technically_ true, there have been some challenges.`
      },
      {
        type: types.text,
        value: '---'
      },
      {
        type: types.text,
        value: `First, what even is a blog post? I was thinking about the type of content I want to host here, and to be truthful, I still don't
        even know exactly what I'll post here. Do I want to have images? Embed videos? How about code or quotes or social media embeddings? 
        There's _a lot_ of different sorts of content I can put within a blog post or a project, so I wanted to build a component for each content type.`
      },
      {
        type: types.text,
        value: `So what types of content does this site support? Currently, here are the types of content I have components for:\n` +
        '* code blocks\n' +
        '* equations\n' +
        '- images\n' +
        '- links\n' +
        '- quotes\n' +
        '- social media embeddings\n' +
        '- tables\n' +
        '- text\n' +
        `\nNot all of these components are built out yet. I plan on implementing each one on an as-needed basis.`
      },
      {
        type: types.text,
        value: '---'
      },
      {
        type: types.text,
        value: `Second, how do I build components that are deceivingly complex. Take the most simple one, for example. Text. All this component does is take in
        text and display it, right? Well, yes, but what if I want to <ins>underline</ins> text? What if I want _italicized_ text? Or **bold** text? Or have a 
        [hyperlink to google](https://www.google.com/)?
        I quickly determined trying to parse text for special characters was beyond my paygrade, so I decided to use existing resources. I decided to use a 
        library called ` + '[`ember cli showdown`](https://github.com/empress/ember-cli-showdown)' + ` which, as the name suggests, takes markdown and renders html. Exactly what I wanted!`
      },
      {
        type: types.text,
        value: `Code blocks presented a similar issue. How do I do syntax highlighting? What if the code is Python or C# or Javascript or Typescript? Well, I don't feel too
        strongly about the second question. I think any sort of syntax highlighting will be sufficient for me. But tokenizing strings and classifying tokens seems like a pain.
        Not gonna bother with that! I decided to use ` + '[`ember prism`](https://github.com/shipshapecode/ember-prism)' + ` to handle syntax highlighting for me. Great!`
      },
      {
        type: types.text,
        value: '---'
      },
      {
        type: types.text,
        value: `Third, where does the content live? How do I add to it? Edit it? Delete it? Currently, it all lives in a big dictionary object. Each blog post has a title, a publish date, and content. The content is
        an array of dictionaries. Each dictionary contains a content type and a value. Here is an example:`
      },
      {
        type: types.codeBlock,
        value: `content: [
    {
        type: types.text,
        value: 'Here is some text!'
    },
    {
      type: types.codeBlock,
      value: 'int x = 5;'
    },
    {
      type: types.quote,
      value: {
        text: 'Here is a quote.',
        author: 'Shane Jones'
    }
]`
      },
      {
        type: types.text,
        value: '---'
      },
      {
        type: types.text,
        value: `Here's what this will render:`
      },
      {
        type: types.text,
        value: 'Here is some text!'
      },
      {
        type: types.codeBlock,
        value: 'int x = 5;'
      },
      {
        type: types.quote,
        value: {
          text: 'Here is a quote.',
          author: 'Shane Jones'
        }
      },
      {
        type: types.text,
        value: '---'
      },
      {
        type: types.text,
        value: `I imagine I'll refactor this down-the-line, but for now, it gets the job done. Anyways, this is pretty much how I
        built this website. I hope the explanation was intelligible!`
      }
    ]
  },
  {
    id: 2,
    title: 'How to Cheat on the Bar Exam',
    slug: 'how-to-cheat-on-the-bar-exam',
    date: 'October 5, 2020',
    content: [{}]
  },
];
