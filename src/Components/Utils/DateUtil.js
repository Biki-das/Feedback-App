import { format } from "date-fns";

export function DateStamp(date) {
  const dateString = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  return dateString;
}

export function formatFeedbackDate(date) {
  const dateParts = date.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (dateParts) {
    const year = parseInt(dateParts[1]);
    const month = parseInt(dateParts[2]) - 1; // Months are zero-based (0-11)
    const day = parseInt(dateParts[3]);
    const formattedDate = format(new Date(year, month, day), "dd MMM, yy");
    return formattedDate;
  } else {
    return "Invalid date";
  }
}
