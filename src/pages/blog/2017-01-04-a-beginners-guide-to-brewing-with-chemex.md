---
templateKey: blog-post
title: Test - A beginners’ guide to brewing with Chemex
date: 2017-01-04T15:04:10.000Z
description: Brewing with a Chemex probably seems like a complicated,
  time-consuming ordeal, but once you get used to the process, it becomes a
  soothing ritual that's worth the effort every time.
featuredpost: false
featuredimage: /img/shoe.jpg
tags:
  - brewing
  - chemex
---
![Crocs Swiftwear](/img/shoe.jpg "Crocs")

youtube 4RPFc64I3TY

```
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
    return (
      '<img src="http://img.youtube.com/vi/' +
      obj.id +
      '/maxresdefault.jpg" alt="Youtube Video"/>'
    );
  },
});
```

This week we’ll **take** a look at all the steps required to make astonishing coffee with a Chemex at home. The Chemex Coffeemaker is a manual, pour-over style glass-container coffeemaker that Peter Schlumbohm invented in 1941, and which continues to be manufactured by the Chemex Corporation in Chicopee, Massachusetts.

In 1958, designers at the [Illinois Institute of Technology](https://www.spacefarm.digital) said that the Chemex Coffeemaker is *"one of the best-designed products of modern times"*, and so is included in the collection of the Museum of Modern Art in New York City.

## The little secrets of Chemex brewing

The Chemex Coffeemaker consists of an hourglass-shaped glass flask with a conical funnel-like neck (rather than the cylindrical neck of an Erlenmeyer flask) and uses proprietary filters, made of bonded paper (thicker-gauge paper than the standard paper filters for a drip-method coffeemaker) that removes most of the coffee oils, brewing coffee with a taste that is different than coffee brewed in other coffee-making systems; also, the thicker paper of the Chemex coffee filters may assist in removing cafestol, a cholesterol-containing compound found in coffee oils. Here’s three important tips newbies forget about:

1. Always buy dedicated Chemex filters.
2. Use a scale, don’t try to eyeball it.
3. Never skip preheating the glass.
4. Timing is key, don’t forget the clock.

The most visually distinctive feature of the Chemex is the heatproof wooden collar around the neck, allowing it to be handled and poured when full of hot water. This is turned, then split in two to allow it to fit around the glass neck. The two pieces are held loosely in place by a tied leather thong. The pieces are not tied tightly and can still move slightly, retained by the shape of the conical glass.

For a design piece that became popular post-war at a time of Modernism and precision manufacture, this juxtaposition of natural wood and the organic nature of a hand-tied knot with the laboratory nature of glassware was a distinctive feature of its appearance.