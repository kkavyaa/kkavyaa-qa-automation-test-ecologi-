# Testing:

## Set-up

Run `npm install` to install the dependencies

Run `npm run cypress-open` to run it in GUI mode for developement

Run `npm run cypress-run` to run it in headless mode mostly to run in CD pipelines

## Some points to note:

- I have used the test ID and in automation also I would use the same thing as it is short and unique
compared to long class names.I would expect developers to add this sort of ID to help in automation.

- I have only verified The elements exist as I have not prepared the data. Since this is mostly a content management system (Blog website), the data or the content could be changed overtime. Hence we need to make sure we know what is the expected data in ideal scenario. It is better if the person writing the test can manipulate test data according to testing scenarios. Since I have not ensured the expected data is concrete, I have only verified the element's availability on the page using visible assertion. 

- Bonus section could have been done like this - Here the data is in the post directory, Hence we can create a file in post directory or manipulate the files in the post directory to add, edit, delete or read data between the test using a custom plugin in the plugins folder. Since it is in node.js environment we can do that. It doesn't have to be reading into the folder, if can even be a 
database that holds the blogs data. Wherever the test data is, we should be able to manipulate that
to test the app.


 ------- xx -------

 The below readme was already in the repository. Leaving it here for reference.
# A statically generated blog example using Next.js and Markdown

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/blog-starter)

## Demo

[https://next-blog-starter.vercel.app/](https://next-blog-starter.vercel.app/)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/blog-starter&project-name=blog-starter&repository-name=blog-starter)

### Related examples

- [WordPress](/examples/cms-wordpress)
- [DatoCMS](/examples/cms-datocms)
- [Sanity](/examples/cms-sanity)
- [TakeShape](/examples/cms-takeshape)
- [Prismic](/examples/cms-prismic)
- [Contentful](/examples/cms-contentful)
- [Strapi](/examples/cms-strapi)
- [Agility CMS](/examples/cms-agilitycms)
- [Cosmic](/examples/cms-cosmic)
- [ButterCMS](/examples/cms-buttercms)
- [Storyblok](/examples/cms-storyblok)
- [GraphCMS](/examples/cms-graphcms)
- [Kontent](/examples/cms-kontent)
- [Umbraco Heartcore](/examples/cms-umbraco-heartcore)
- [Builder.io](/examples/cms-builder-io)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```
npx create-next-app --example blog-starter blog-starter-app

```

or

```
yarn create next-app --example blog-starter blog-starter-app

```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

# Notes

This blog-starter uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).
