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
        name: "pages",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        ui: {
          router: ({ document }) => `/${document._sys.filename === "home" ? "" : document._sys.filename}`
        },
        fields: [
          {
            type: "string",
            name: "title_fr",
            label: "Page Title (French)",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "title_ar",
            label: "Page Title (Arabic)",
            required: true
          },
          {
            type: "string",
            name: "description_fr",
            label: "Meta Description (French)",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "description_ar",
            label: "Meta Description (Arabic)",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            name: "header_image",
            label: "Header Image"
          },
          {
            type: "rich-text",
            name: "body_fr",
            label: "Page Content (French)",
            isBody: true
          },
          {
            type: "rich-text",
            name: "body_ar",
            label: "Page Content (Arabic)"
          },
          {
            type: "object",
            name: "sections",
            label: "Page Sections",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.section_title_fr || "Section" };
              }
            },
            fields: [
              {
                type: "string",
                name: "section_title_fr",
                label: "Section Title (French)"
              },
              {
                type: "string",
                name: "section_title_ar",
                label: "Section Title (Arabic)"
              },
              {
                type: "rich-text",
                name: "section_content_fr",
                label: "Section Content (French)"
              },
              {
                type: "rich-text",
                name: "section_content_ar",
                label: "Section Content (Arabic)"
              },
              {
                type: "image",
                name: "section_image",
                label: "Section Image"
              },
              {
                type: "string",
                name: "section_image_alt_fr",
                label: "Image Alt Text (French)"
              },
              {
                type: "string",
                name: "section_image_alt_ar",
                label: "Image Alt Text (Arabic)"
              }
            ]
          }
        ]
      },
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
      },
      {
        name: "translations",
        label: "Translations",
        path: "content/translations",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "object",
            name: "fr",
            label: "French Translations",
            fields: [
              {
                type: "object",
                name: "navigation",
                label: "Navigation",
                fields: [
                  { type: "string", name: "home", label: "Home" },
                  { type: "string", name: "about", label: "About" },
                  { type: "string", name: "programs", label: "Programs" },
                  { type: "string", name: "news", label: "News" },
                  { type: "string", name: "review", label: "Review" },
                  { type: "string", name: "resources", label: "Resources" },
                  { type: "string", name: "testimonials", label: "Testimonials" },
                  { type: "string", name: "collaborations_ong", label: "NGO Collaborations" },
                  { type: "string", name: "gallery", label: "Gallery" },
                  { type: "string", name: "contact", label: "Contact" }
                ]
              },
              {
                type: "object",
                name: "common",
                label: "Common Sections",
                fields: [
                  { type: "string", name: "learn_more", label: "Learn More" },
                  { type: "string", name: "read_more", label: "Read More" },
                  { type: "string", name: "view_all", label: "View All" },
                  { type: "string", name: "back_to", label: "Back To" },
                  { type: "string", name: "send_message", label: "Send Message" }
                ]
              },
              {
                type: "object",
                name: "home",
                label: "Home Page",
                fields: [
                  { type: "string", name: "hero_title", label: "Hero Title" },
                  { type: "string", name: "hero_subtitle", label: "Hero Subtitle" },
                  { type: "string", name: "hero_cta", label: "Hero CTA" },
                  { type: "string", name: "stats_trainings", label: "Stats: Trainings" },
                  { type: "string", name: "stats_beneficiaries", label: "Stats: Beneficiaries" },
                  { type: "string", name: "stats_partners", label: "Stats: Partners" },
                  { type: "string", name: "our_impact", label: "Our Impact" },
                  { type: "string", name: "mission_title", label: "Mission Title" },
                  { type: "string", name: "mission_description", label: "Mission Description" },
                  { type: "string", name: "programs_title", label: "Programs Title" },
                  { type: "string", name: "programs_subtitle", label: "Programs Subtitle" },
                  { type: "string", name: "news_title", label: "News Title" },
                  { type: "string", name: "news_subtitle", label: "News Subtitle" }
                ]
              },
              {
                type: "object",
                name: "about",
                label: "About Page",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  { type: "string", name: "mission", label: "Our Mission" },
                  { type: "string", name: "vision", label: "Our Vision" },
                  { type: "string", name: "team", label: "Our Team" },
                  { type: "string", name: "history", label: "Our History" }
                ]
              },
              {
                type: "object",
                name: "contact",
                label: "Contact Page",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  { type: "string", name: "office", label: "Our Office" },
                  { type: "string", name: "phone", label: "Phone & Fax" },
                  { type: "string", name: "email", label: "Email & Networks" },
                  { type: "string", name: "form_name", label: "Form: Name" },
                  { type: "string", name: "form_email", label: "Form: Email" },
                  { type: "string", name: "form_subject", label: "Form: Subject" },
                  { type: "string", name: "form_message", label: "Form: Message" },
                  { type: "string", name: "form_submit", label: "Form: Submit" },
                  { type: "string", name: "hours", label: "Hours" },
                  { type: "string", name: "faq", label: "FAQ" }
                ]
              },
              {
                type: "object",
                name: "programs",
                label: "Programs Pages",
                fields: [
                  { type: "string", name: "training", label: "Training & Capacity Building" },
                  { type: "string", name: "advocacy", label: "Advocacy & Awareness" },
                  { type: "string", name: "research", label: "Research & Documentation" },
                  { type: "string", name: "impact", label: "Program Impact" },
                  { type: "string", name: "implementation", label: "Implementation Approach" },
                  { type: "string", name: "partners", label: "Our Partners" },
                  { type: "string", name: "participatory_methodology", label: "Participatory Methodology" },
                  { type: "string", name: "results_based", label: "Results-Based Management" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "ar",
            label: "Arabic Translations",
            fields: [
              {
                type: "string",
                name: "navigation",
                label: "Navigation",
                fields: [
                  { type: "string", name: "home", label: "Home" },
                  { type: "string", name: "about", label: "About" },
                  { type: "string", name: "programs", label: "Programs" },
                  { type: "string", name: "news", label: "News" },
                  { type: "string", name: "review", label: "Review" },
                  { type: "string", name: "resources", label: "Resources" },
                  { type: "string", name: "testimonials", label: "Testimonials" },
                  { type: "string", name: "collaborations_ong", label: "NGO Collaborations" },
                  { type: "string", name: "gallery", label: "Gallery" },
                  { type: "string", name: "contact", label: "Contact" }
                ]
              },
              {
                type: "object",
                name: "common",
                label: "Common Sections",
                fields: [
                  { type: "string", name: "learn_more", label: "Learn More" },
                  { type: "string", name: "read_more", label: "Read More" },
                  { type: "string", name: "view_all", label: "View All" },
                  { type: "string", name: "back_to", label: "Back To" },
                  { type: "string", name: "send_message", label: "Send Message" }
                ]
              },
              {
                type: "object",
                name: "home",
                label: "Home Page",
                fields: [
                  { type: "string", name: "hero_title", label: "Hero Title" },
                  { type: "string", name: "hero_subtitle", label: "Hero Subtitle" },
                  { type: "string", name: "hero_cta", label: "Hero CTA" },
                  { type: "string", name: "stats_trainings", label: "Stats: Trainings" },
                  { type: "string", name: "stats_beneficiaries", label: "Stats: Beneficiaries" },
                  { type: "string", name: "stats_partners", label: "Stats: Partners" },
                  { type: "string", name: "our_impact", label: "Our Impact" },
                  { type: "string", name: "mission_title", label: "Mission Title" },
                  { type: "string", name: "mission_description", label: "Mission Description" },
                  { type: "string", name: "programs_title", label: "Programs Title" },
                  { type: "string", name: "programs_subtitle", label: "Programs Subtitle" },
                  { type: "string", name: "news_title", label: "News Title" },
                  { type: "string", name: "news_subtitle", label: "News Subtitle" }
                ]
              },
              {
                type: "object",
                name: "about",
                label: "About Page",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  { type: "string", name: "mission", label: "Our Mission" },
                  { type: "string", name: "vision", label: "Our Vision" },
                  { type: "string", name: "team", label: "Our Team" },
                  { type: "string", name: "history", label: "Our History" }
                ]
              },
              {
                type: "object",
                name: "contact",
                label: "Contact Page",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  { type: "string", name: "office", label: "Our Office" },
                  { type: "string", name: "phone", label: "Phone & Fax" },
                  { type: "string", name: "email", label: "Email & Networks" },
                  { type: "string", name: "form_name", label: "Form: Name" },
                  { type: "string", name: "form_email", label: "Form: Email" },
                  { type: "string", name: "form_subject", label: "Form: Subject" },
                  { type: "string", name: "form_message", label: "Form: Message" },
                  { type: "string", name: "form_submit", label: "Form: Submit" },
                  { type: "string", name: "hours", label: "Hours" },
                  { type: "string", name: "faq", label: "FAQ" }
                ]
              },
              {
                type: "object",
                name: "programs",
                label: "Programs Pages",
                fields: [
                  { type: "string", name: "training", label: "Training & Capacity Building" },
                  { type: "string", name: "advocacy", label: "Advocacy & Awareness" },
                  { type: "string", name: "research", label: "Research & Documentation" },
                  { type: "string", name: "impact", label: "Program Impact" },
                  { type: "string", name: "implementation", label: "Implementation Approach" },
                  { type: "string", name: "partners", label: "Our Partners" },
                  { type: "string", name: "participatory_methodology", label: "Participatory Methodology" },
                  { type: "string", name: "results_based", label: "Results-Based Management" }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "object",
            name: "general",
            label: "General Settings",
            fields: [
              { type: "string", name: "site_title_fr", label: "Site Title (French)" },
              { type: "string", name: "site_title_ar", label: "Site Title (Arabic)" },
              { type: "string", name: "site_description_fr", label: "Site Description (French)" },
              { type: "string", name: "site_description_ar", label: "Site Description (Arabic)" },
              { type: "image", name: "logo", label: "Logo" },
              { type: "image", name: "favicon", label: "Favicon" }
            ]
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Information",
            fields: [
              { type: "string", name: "address_fr", label: "Address (French)" },
              { type: "string", name: "address_ar", label: "Address (Arabic)" },
              { type: "string", name: "phone", label: "Phone" },
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "hours_fr", label: "Office Hours (French)" },
              { type: "string", name: "hours_ar", label: "Office Hours (Arabic)" }
            ]
          },
          {
            type: "object",
            name: "social",
            label: "Social Media",
            fields: [
              { type: "string", name: "facebook", label: "Facebook URL" },
              { type: "string", name: "twitter", label: "Twitter URL" },
              { type: "string", name: "instagram", label: "Instagram URL" },
              { type: "string", name: "linkedin", label: "LinkedIn URL" },
              { type: "string", name: "youtube", label: "YouTube URL" }
            ]
          },
          {
            type: "object",
            name: "footer",
            label: "Footer Content",
            fields: [
              { type: "string", name: "tagline_fr", label: "Tagline (French)" },
              { type: "string", name: "tagline_ar", label: "Tagline (Arabic)" },
              { type: "string", name: "copyright_fr", label: "Copyright Text (French)" },
              { type: "string", name: "copyright_ar", label: "Copyright Text (Arabic)" }
            ]
          },
          {
            type: "object",
            name: "newsletter",
            label: "Newsletter Settings",
            fields: [
              { type: "string", name: "title_fr", label: "Title (French)" },
              { type: "string", name: "title_ar", label: "Title (Arabic)" },
              { type: "string", name: "description_fr", label: "Description (French)" },
              { type: "string", name: "description_ar", label: "Description (Arabic)" },
              { type: "string", name: "button_fr", label: "Button Text (French)" },
              { type: "string", name: "button_ar", label: "Button Text (Arabic)" },
              { type: "string", name: "disclaimer_fr", label: "Disclaimer (French)" },
              { type: "string", name: "disclaimer_ar", label: "Disclaimer (Arabic)" }
            ]
          }
        ]
      },
      {
        name: "stats",
        label: "Statistics",
        path: "content/stats",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "number",
            name: "trainings_count",
            label: "Number of Trainings"
          },
          {
            type: "number",
            name: "beneficiaries_count",
            label: "Number of Beneficiaries"
          },
          {
            type: "number",
            name: "partners_count",
            label: "Number of Partners"
          }
        ]
      },
      {
        name: "programs",
        label: "Programs",
        path: "content/programs",
        format: "mdx",
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
            type: "image",
            name: "image",
            label: "Featured Image"
          },
          {
            type: "rich-text",
            name: "body_fr",
            label: "Content (French)",
            isBody: true
          },
          {
            type: "rich-text",
            name: "body_ar",
            label: "Content (Arabic)"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
