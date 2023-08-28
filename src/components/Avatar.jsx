import createClasses from "../utils/create-classes";

export default function Avatar({ src, className = "h-10 w-10" }) {
  const defaultClassName = "rounded-full ";
  const classes = createClasses(defaultClassName, className);
  return <img src={src} alt="user" className={classes} />;
}
