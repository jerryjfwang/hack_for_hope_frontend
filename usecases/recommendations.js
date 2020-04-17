import { makeRequest } from "../utils/request.js";

export const getRecommendation = (
  latitude,
  longitude,
  maxDuration,
  daysLeft,
  travelMethod
) =>
  makeRequest(
    "GET",
    `/recommendation?latitude=${latitude}&longitude=${longitude}&maxDuration=${maxDuration}&daysLeft=${daysLeft}&travelMethod=${travelMethod}`
  ).then(({ recommendations }) => recommendations);
