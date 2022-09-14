import { FiSettings } from "react-icons/fi"
import { FiBriefcase } from "react-icons/fi"
import { FiStar } from "react-icons/fi"
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { MdPassword } from "react-icons/md"
const links = [
  {
    id: 1,
    text: "settings",
    path: "userprofile",
    icon: <FiSettings />,
  },
  {
    id: 2,
    text: "password reset",
    path: "passwordreset",
    icon: <MdPassword />,
  },
  {
    id: 3,
    text: "my bookings",
    path: "bookings",
    icon: <FiBriefcase />,
  },
  {
    id: 4,
    text: "my reviews",
    path: "reviews",
    icon: <FiStar />,
  },
  {
    id: 5,
    text: "billing",
    path: "billing",
    icon: <FaRegMoneyBillAlt />,
  },
]

export default links
