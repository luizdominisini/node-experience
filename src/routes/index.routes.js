import { Router } from "express";

export const router = Router();
let visitCount = 0;
let isLocked = false;

const incrementVisitCount = async () => {
  while (isLocked) {
    await new Promise((resolve) => setTimeout(resolve, 1));
  }

  isLocked = true;
  visitCount++;
  isLocked = false;
  return visitCount;
};

router.get("/", async (req, res) => {
  try {
    const count = await incrementVisitCount();
    res.status(200).send(`This page has been visited ${count} times`);
  } catch (err) {
    res.status(500).send("An error occurred");
  }
});
