export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'title', // Nyt yksi 'title'-objekti
      type: 'object',
      title: 'Header Title',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'fi', type: 'string', title: 'Finnish' },
      ],
    },
    {
      name: 'navigationItems', // Nyt yksi 'navigationItems'-objekti
      type: 'object',
      title: 'Navigation Items',
      fields: [
        { name: 'en', type: 'array', title: 'English Items', of: [{ type: 'string' }] },
        { name: 'fi', type: 'array', title: 'Finnish Items', of: [{ type: 'string' }] },
      ],
    },
    // Voit lisätä tähän myös muita headerelementtejä samalla kielikohtaisella objektityylillä
  ],
};