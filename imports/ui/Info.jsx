import React from "react";
import { useSubscription, useCollection } from "../lib/hooks";
import call from "../lib/helper";

import Links from "../api/links";

const Link = ({ _id, title, url }) => {
  return (
    <li>
      <a href={url} target="_blank">
        {title}
      </a>
    </li>
  );
};

export default Info = () => {
  // Subscription
  const loading = useSubscription("links.public");
  // Fetch all links
  const links = useCollection(Links);

  const handleSubmit = async event => {
    event.preventDefault();
    // Get all target elements
    const { title, url } = event.target.elements;
    // Call Meteor method with promise
    await call("insertLink", title.value, url.value);
    // Clear inputs
    title.value = url.value = "";
  };

  return (
    <div>
      <div>
        {/* World simpliest form */}
        <form onSubmit={handleSubmit}>
          <input name="title" placeholder="Title" required />
          <input name="url" placeholder="URL" required />
          <button>Save</button>
        </form>
      </div>
      <div>
        <h2>Favorite Links</h2>
        {!loading ? (
          links.map(props => <Link key={props._id} {...props} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </div>
  );
};
