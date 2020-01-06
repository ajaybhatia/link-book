import { Meteor } from "meteor/meteor";

export default call = (method, ...params) =>
  new Promise((resolve, rejec) => {
    Meteor.call(method, ...params, (error, response) => {
      if (error) reject(error);
      resolve(response);
    });
  });
