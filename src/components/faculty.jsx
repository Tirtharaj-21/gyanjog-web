import React from "react";

const faculty = () => {
  return (
    <div className="faculty">
      {faculty.filter(ok).map(([n, r, p], i) => (
        <Reveal key={n} delay={(i % 4) * 60} className="faculty-card">
          <img
            className="faculty-photo"
            src={`/assets/faculty/${
              {
                "Payel Biswas": "payel-biswas.webp",
                "Madhumita Sengupta": "madhumita-sengupta.webp",
                "Nandita Banerjee": "nandita-banerjee.webp",
                "Priyanka Santra": "priyanka-santra.webp",
                "Papiya Roy": "papiya-roy.webp",
                "Trishna Dhali": "trishna-dhali.webp",
                "Mousumi Saha": "mousumi-saha.webp",
                "Pampa Banerjee": "pampa-banerjee.webp",
                "Rahul Bera": "rahul-bera.webp",
                "Swati Mukherjee": "swati-mukherjee.webp",
                "Piu Das": "piu-das.webp",
                "Jayasri Banerjee": "jayasri-banerjee.webp",
                "Samrat Banerjee": "samrat-banerjee.webp",
                "A K Azad Babu": "ak-azad-babu.webp",
                "Sumina Akhter Jahan": "sumina-akhter-jahan.webp",
                "Ipsita Basu": "ipsita-basu.webp",
                "Rinki Hazra Ghosh": "rinki-hazra-ghosh.webp",
                "Sanu Kotal": "sanu-kotal.webp",
              }[n]
            }`}
            alt={n}
            loading="lazy"
          />
          <div className="faculty-info">
            <b>{n}</b>
            <span className="faculty-role">{r}</span>
            <small>{p}</small>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default faculty;
