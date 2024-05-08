import { MAX_DATE, MIN_DATE } from "@/constants/seed";

const currentDate = new Date();
export const fromNowOfMinDays = new Date(currentDate).setDate(currentDate.getDate() + MIN_DATE);
export const fromNowOfMaxDays = new Date(currentDate).setDate(currentDate.getDate() + MAX_DATE);