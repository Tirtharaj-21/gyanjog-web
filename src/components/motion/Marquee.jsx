export function Marquee({ items }) {
  return (
    <div className="trust" role="group" aria-label="Recognitions">
      <div className="marq">
        {[0, 1, 2, 3].map((k) => (
          <ul key={k} aria-hidden={k ? "true" : undefined}>
            {items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
