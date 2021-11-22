export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619bf8f8b22f6b6a094114aa',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-practice-studio',
                  apiId: 'da35c6e3-cafd-41cf-8863-525a590fdd0e'
                },
                {
                  buildHookId: '619bf8f99e51b26c80659d00',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-practice',
                  apiId: '4689f146-2e5e-4276-9423-f042bd88f1c5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/canebreak/sanity-sapper-blog-practice',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-practice.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
