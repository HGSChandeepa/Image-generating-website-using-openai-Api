//utils are the functions that can be used inn many parts of the application

import { surpriseMePrompts } from "../constants";

export const getRandomPrompt = (prompt) => {
  //this will return a random prompt from the surpriseMePrompts array
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

  //check that we do not get the sam random prompt twice in a row
  if (surpriseMePrompts[randomIndex] === prompt) {
    //again we call the function to get a new random prompt
    return getRandomPrompt(prompt);
  }

  return surpriseMePrompts[randomIndex];
};
