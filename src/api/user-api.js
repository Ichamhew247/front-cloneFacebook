import axios from "./axios";

export const updateUserImage = (input) => axios.patch("/users/image", input);
//send request to method patch to /users/image by input is a request body if you want to call updateUserImage function just put/send value in input
//input is request body of patch method axios
