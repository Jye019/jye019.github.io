(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6Gk8":function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),i=a("Wbzz");t.a=function(){var e,t,a,l,r=Object(i.useStaticQuery)("3257411868"),o=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author;null===(t=r.site.siteMetadata)||void 0===t||t.social,null==r||null===(a=r.avatar)||void 0===a||null===(l=a.childImageSharp)||void 0===l||l.fixed;return n.a.createElement("div",{className:"bio"},(null==o?void 0:o.name)&&n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,o.name)))}},RXBc:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),i=a("Wbzz"),r=a("6Gk8"),o=a("Bl7J"),s=a("vrFN");t.default=function(e){var t,a=e.data,l=e.location,c=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=a.allMarkdownRemark.nodes;return 0===m.length?n.a.createElement(o.a,{location:l,title:c},n.a.createElement(s.a,{title:"All posts"}),n.a.createElement(r.a,null),n.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.a.createElement(o.a,{location:l,title:c},n.a.createElement(s.a,{title:"All posts"}),n.a.createElement(r.a,null),n.a.createElement("ol",{style:{listStyle:"none"}},m.map((function(e){var t=e.frontmatter.title||e.fields.slug;return n.a.createElement("li",{key:e.fields.slug},n.a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.a.createElement("header",null,n.a.createElement("h2",null,n.a.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},n.a.createElement("span",{itemProp:"headline"},t))),n.a.createElement("small",null,e.frontmatter.date)),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-7a8feb696bf945c40e2e.js.map