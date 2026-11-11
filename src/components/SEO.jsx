import { useEffect } from "react";

const SITE_URL = "https://gyanjog-web.vercel.app";

export default function SEO({
  title,
  description,
  path = "/",
  image = "/assets/classroom.jpg",
}) {
  useEffect(() => {
    const pageUrl = `${SITE_URL}${path}`;
    // const imageUrl = `${SITE_URL}/assets/classroom.jpg`;
    const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

    document.title = title;

    const setMeta = (attribute, key, content) => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("name", "robots", "index, follow");

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Gyanjog Group");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", pageUrl);
    setMeta("property", "og:image", imageUrl);
    setMeta(
      "property",
      "og:image:alt",
      "Educational programme at Gyanjog Group",
    );

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", pageUrl);
  }, [title, description, path]);

  return null;
}
