export default {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    {
      name: 'text',
      type: 'object',
      title: 'Footer Text',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'fi', type: 'string', title: 'Finnish' },
      ],
    },
    {
      name: 'links',
      type: 'object',
      title: 'Links',
      fields: [
        { name: 'en', type: 'array', title: 'English Links', of: [{ type: 'string' }] },
        { name: 'fi', type: 'array', title: 'Finnish Links', of: [{ type: 'string' }] },
      ],
    },
  ],
}