export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e2ac0f27243699329d3e9ec',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-oqvbwhow',
                  apiId: 'cfad7adc-ce10-47c5-be7a-fb7796aa0d0d'
                },
                {
                  buildHookId: '5e2ac0f27243690478d3e9d1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6m1qokou',
                  apiId: '06d9e47b-70d7-4b5b-9bef-b3fc0a6711b5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/livdingsor/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6m1qokou.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
