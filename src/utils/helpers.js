import moment from "moment"

export const formatDateShort = (date) => {
  return moment(date).format("MMMM YYYY")
}
