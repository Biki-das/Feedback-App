import { format } from "date-fns";

export function DateStamp(date) {
  const dateString = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  return dateString;
}

export function formatFeedbackDate(date) {
  const splittedDate = date.split("-").join();
  return format(new Date(splittedDate), "dd MMM, yy");
}
