import { Link } from "react-router-dom";
export function BottomWarning({ label, text, to }) {
  return (
    <div className="pb-2">
      {label}
      <Link to={to} className="underline">
        {text}
      </Link>
    </div>
  );
}
