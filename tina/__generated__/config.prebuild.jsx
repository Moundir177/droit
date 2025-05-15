// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "news",
        label: "News",
        path: "content/news",
        format: "mdx",
        ui: {
          router: ({ document }) => `/news/${document._sys.filename}`
        },
        fields: [
          {
            type: "string",
            name: "title_fr",
            label: "Title (French)",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "title_ar",
            label: "Title (Arabic)",
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "string",
            name: "author_fr",
            label: "Author (French)"
          },
          {
            type: "string",
            name: "author_ar",
            label: "Author (Arabic)"
          },
          {
            type: "string",
            name: "category_fr",
            label: "Category (French)",
            options: ["Formation", "Rapports", "Partenariats", "\xC9v\xE9nements"]
          },
          {
            type: "string",
            name: "category_ar",
            label: "Category (Arabic)",
            options: ["\u062A\u062F\u0631\u064A\u0628", "\u062A\u0642\u0627\u0631\u064A\u0631", "\u0634\u0631\u0627\u0643\u0627\u062A", "\u0641\u0639\u0627\u0644\u064A\u0627\u062A"]
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image"
          },
          {
            type: "rich-text",
            name: "body_fr",
            label: "Body (French)",
            isBody: true
          },
          {
            type: "rich-text",
            name: "body_ar",
            label: "Body (Arabic)"
          },
          {
            type: "string",
            name: "excerpt_fr",
            label: "Excerpt (French)",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "excerpt_ar",
            label: "Excerpt (Arabic)",
            ui: {
              component: "textarea"
            }
          }
        ]
      },
      {
        name: "mission",
        label: "Mission",
        path: "content/mission",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "string",
            name: "title_fr",
            label: "Title (French)"
          },
          {
            type: "string",
            name: "title_ar",
            label: "Title (Arabic)"
          },
          {
            type: "string",
            name: "description_fr",
            label: "Description (French)",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "description_ar",
            label: "Description (Arabic)",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "object",
            name: "points",
            label: "Mission Points",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.text_fr };
              }
            },
            fields: [
              {
                type: "string",
                name: "text_fr",
                label: "Text (French)"
              },
              {
                type: "string",
                name: "text_ar",
                label: "Text (Arabic)"
              }
            ]
          },
          {
            type: "image",
            name: "image",
            label: "Image"
          },
          {
            type: "string",
            name: "image_title_fr",
            label: "Image Title (French)"
          },
          {
            type: "string",
            name: "image_title_ar",
            label: "Image Title (Arabic)"
          },
          {
            type: "string",
            name: "image_description_fr",
            label: "Image Description (French)",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "image_description_ar",
            label: "Image Description (Arabic)",
            ui: {
              component: "textarea"
            }
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
