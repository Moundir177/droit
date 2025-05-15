window.CMS_MANUAL_INIT = true;

window.initCMS = function() {
  CMS.init({
    config: {
      backend: {
        name: "git-gateway",
        branch: "main",
        repo: "Moundir177/droit",
        auth_scope: "repo",
        identity_url: "https://sage-queijadas-0f917a.netlify.app/.netlify/identity",
        gateway_url: "https://sage-queijadas-0f917a.netlify.app/.netlify/git/github"
      },
      media_folder: "public/images/uploads",
      public_folder: "/images/uploads",
      collections: [
        {
          name: "pages",
          label: "Pages",
          files: [
            {
              name: "home",
              label: "Home Page",
              file: "content/home.json",
              fields: [
                { label: "Hero Title", name: "heroTitle", widget: "string" },
                { label: "Hero Description", name: "heroDescription", widget: "text" },
                { label: "Hero Button Text", name: "heroButtonText", widget: "string" },
                {
                  label: "Features",
                  name: "features",
                  widget: "list",
                  fields: [
                    { label: "Title", name: "title", widget: "string" },
                    { label: "Description", name: "description", widget: "text" },
                    { label: "Icon", name: "icon", widget: "string", hint: "Icon name from React Icons" }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "blog",
          label: "Blog",
          folder: "content/blog",
          create: true,
          slug: "{{slug}}",
          fields: [
            { label: "Title", name: "title", widget: "string" },
            { label: "Publish Date", name: "date", widget: "datetime" },
            { label: "Featured Image", name: "thumbnail", widget: "image" },
            { label: "Body", name: "body", widget: "markdown" }
          ]
        }
      ]
    }
  });
};

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initCMS();
}); 