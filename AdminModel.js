import AdminsSchema from "./AdminSchema.js";

export const createUser = (userObj) => {
  return new Promise((resolve, reject) => {
    try {
      AdminsSchema(userObj)
        .save()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};
