import { FiSettings } from "react-icons/fi"
import { FiBriefcase } from "react-icons/fi"
import { FiStar } from "react-icons/fi"
import { FaRegMoneyBillAlt } from "react-icons/fa"

const links = [
  {
    id: 1,
    text: "settings",
    path: "userprofile",
    icon: <FiSettings />,
  },
  {
    id: 2,
    text: "my bookings",
    path: "bookings",
    icon: <FiBriefcase />,
  },
  {
    id: 3,
    text: "my reviews",
    path: "reviews",
    icon: <FiStar />,
  },
  {
    id: 4,
    text: "billing",
    path: "billing",
    icon: <FaRegMoneyBillAlt />,
  },
]

export default links
