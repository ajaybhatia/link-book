import { Meteor } from "meteor/meteor";
import Links from "/imports/api/links";

Meteor.startup(() => {});

// Publications
Meteor.publish("links.public", () => Links.find({}));

// Methods
Meteor.methods({
  insertLink(title, url) {
    return Links.insert({ title, url, createdAt: new Date() });
  }
});
