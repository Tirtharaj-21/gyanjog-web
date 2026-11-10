import { useInView } from "./useInView";

/* scroll reveal: className variants rv-left | rv-zoom | rv-wipe */
export function Reveal({
  as: T = "div",
  delay = 0,
  className = "",
  children,
  ...p
}) {
  const [ref, seen] = useInView();
  return (
    <T
      ref={ref}
      className={`rv ${className}${seen ? " in" : ""}`}
      style={{ "--d": `${delay}ms` }}
      {...p}
    >
      {children}
    </T>
  );
}
