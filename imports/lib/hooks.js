import React from "react";
import { useTracker } from "meteor/react-meteor-data";

export const useSubscription = subscriptionName => {
  return useTracker(() => {
    const handle = Meteor.subscribe(subscriptionName);
    return !handle.ready();
  }, []);
};

export const useCollection = collectionName => {
  return useTracker(() => collectionName.find({}).fetch(), []);
};
