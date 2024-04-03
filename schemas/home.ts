import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fieldsets: [
    { name: 'title', title: 'Title', options: { collapsible: false, columns: 1 } },
    { name: 'news', title: 'News', options: { collapsible: false, columns: 2 } },
  ],
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
    }),
    defineField({
      name: 'titles',
      title: 'Titles',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      fieldset: 'title',
    }),
    defineField({
      name: 'titleDuration',
      title: 'Duration (seconds))',
      type: 'number',
      fieldset: 'title',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'caption1',
      title: 'Caption (Line 1)',
      type: 'string',
    }),
    defineField({
      name: 'caption2',
      title: 'Caption (Line 2)',
      type: 'string',
    }),
    defineField({
      name: 'newsTitle',
      title: 'Title',
      type: 'string',
      fieldset: 'news',
    }),
    defineField({
      name: 'arrowText',
      title: 'Arrow Text',
      type: 'string',
      fieldset: 'news',
    }),
    defineField({
      name: 'news',
      title: 'News',
      type: 'array',
      of: [{ type: 'news' }],
    }),
  ],
  preview: {
    select: {
      titles: 'titles',
    },
    prepare(selection) {
      const { titles } = selection
      return { title: 'Home', subtitle: titles.join(', ') }
    },
  },
})
