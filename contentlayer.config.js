import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    publishedAt: {
      type: 'string',
      required: true
    },
    summary: {
      type: 'string',
      required: true
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath
    },
    readingTime: {
      type: 'json',
      resolve: (post) => readingTime(post.body.raw)
    }
  }
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post]
});
