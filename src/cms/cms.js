import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

// const RelationKitchenSinkPostPreview = CMS.createClass({
//   render: function () {
//     // When a post is selected from the relation field, all of it's data
//     // will be available in the field's metadata nested under the collection
//     // name, and then further nested under the value specified in `value_field`.
//     // In this case, the post would be nested under "posts" and then under
//     // the title of the selected post, since our `value_field` in the config
//     // is "title".
//     const { value, fieldsMetaData } = this.props;
//     const post = fieldsMetaData && fieldsMetaData.getIn(["posts", value]);
//     const style = {
//       border: "2px solid #ccc",
//       borderRadius: "8px",
//       padding: "20px",
//     };
//     return post
//       ? h(
//           "div",
//           { style: style },
//           h("h2", {}, "Related Post"),
//           h("h3", {}, post.get("title")),
//           h("img", { src: post.get("image") }),
//           h("p", {}, post.get("body", "").substr(0, 100) + "...")
//         )
//       : null;
//   },
// });

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
// CMS.registerWidget(
//   "relationKitchenSinkPost",
//   "relation",
//   RelationKitchenSinkPostPreview
// );
CMS.registerEditorComponent({
  // Internal id of the component
  id: "youtube",
  // Visible label
  label: "Youtube",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{ name: "id", label: "Youtube Video ID", widget: "string" }],
  // Pattern to identify a block as being an instance of this component
  pattern: /^youtube (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
    return {
      id: match[1],
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function (obj) {
    return "youtube " + obj.id;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (obj) {
    return `<img src="http://img.youtube.com/vi/${obj.id}/maxresdefault.jpg" alt="Youtube Video"/>`;
  },
});
