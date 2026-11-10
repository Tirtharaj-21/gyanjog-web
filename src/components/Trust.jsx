import { Marquee } from "./motion/Motion";

function Trust() {
  const items = [
    "NITI Aayog, Government of India",
    "Ministry of Corporate Affairs",
    "Govt. of West Bengal and NCT Delhi",
    "NSDC skill network",
    "Glocal University and UGC standards",
  ];
  return <Marquee items={items} />;
}

export default Trust;
