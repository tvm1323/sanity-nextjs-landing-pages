export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62417b45e851e3037073f5df',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8gpc4www',
                  apiId: '7b86a6f4-b9df-40b9-a27a-d2bb501ee72e'
                },
                {
                  buildHookId: '62417b46367498071f87e73d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pygu4tgy',
                  apiId: '302953a3-a9fe-4c8b-a364-e35919384903'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tvm1323/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pygu4tgy.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
