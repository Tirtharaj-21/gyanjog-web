import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Reveal } from "./motion/Motion";
import { branches } from "../data/siteData";
import { PHONE } from "../data/constants";
import Heading from "./Heading";

function Branches() {
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      branches.filter((b) =>
        b.join(" ").toLowerCase().includes(q.toLowerCase()),
      ),
    [q],
  );
  return (
    <section className="section" id="branches">
      <div className="wrap">
        <Heading
          title="22 branches across West Bengal"
          desc="Search for your nearest study centre. Not listed? Our live online and weekend practicum batches reach every district."
        />
        <label className="search">
          <Search size={18} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by town or district"
            aria-label="Search branches"
          />
        </label>
        <div className="branch-grid">
          {list.map(([name, desc, area], i) => (
            <Reveal
              as="a"
              key={name}
              href="#contact"
              className="branch"
              delay={(i % 4) * 60}
              data-glow
            >
              <b>{name}</b>
              <span>{area}</span>
              <small>{desc}</small>
            </Reveal>
          ))}
        </div>
        {!list.length && (
          <p className="empty">
            No branch matches that search. Call {PHONE} to ask about the nearest
            batch.
          </p>
        )}
      </div>
    </section>
  );
}

export default Branches;
