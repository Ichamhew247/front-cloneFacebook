import createClasses from "../utils/create-classes";
import defaultImage from "../assets/Blank.svg";

export default function Avatar({
  src = defaultImage,
  className = "h-10 w-10",
}) {
  const defaultClassName = "rounded-full ";
  const classes = createClasses(defaultClassName, className);
  return <img src={src || defaultImage} alt="user" className={classes} />;
}
