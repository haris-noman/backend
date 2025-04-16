import { successResponse, errorResponse } from "../utils/responseHandler.js";

// sample data
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

export const getAllUsers = (req, res) => {
  return successResponse(res, 'Users fetched successfully', users);
};