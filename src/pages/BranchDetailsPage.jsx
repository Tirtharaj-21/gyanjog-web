// import { useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import {
//   MapPin,
//   Phone,
//   UserRound,
//   Building2,
//   ArrowLeft,
//   Navigation,
//   Hash,
// } from "lucide-react";

// import { getBranchBySlug } from "../data/siteData";
// // import "./BranchDetailsPage.css";

// function BranchDetailsPage() {
//   const { slug } = useParams();

//   // Find branch using URL slug
//   const branch = getBranchBySlug(slug);

//   // Update page title and SEO description
//   useEffect(() => {
//     if (branch) {
//       document.title = `${branch.name} Branch | Gyanjog`;

//       let metaDescription = document.querySelector('meta[name="description"]');

//       if (!metaDescription) {
//         metaDescription = document.createElement("meta");
//         metaDescription.setAttribute("name", "description");
//         document.head.appendChild(metaDescription);
//       }

//       metaDescription.setAttribute(
//         "content",
//         `Visit Gyanjog ${branch.name} branch. Find branch address, contact numbers and branch head information.`,
//       );
//     } else {
//       document.title = "Branch Not Found | Gyanjog";
//     }
//   }, [branch]);

//   // Invalid slug
//   if (!branch) {
//     return (
//       <main className="branch-not-found">
//         <Building2 size={55} />
//         <h1>Branch Not Found</h1>
//         <p>Sorry, we couldn't find the branch you are looking for.</p>
//         <Link to="/#branches" className="branch-back-btn">
//           <ArrowLeft size={17} />
//           Back to Branches
//         </Link>
//       </main>
//     );
//   }

//   const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//     branch.address,
//   )}`;

//   return (
//     <main className="branch-details-page">
//       {/* Hero Section */}
//       <section className="branch-details-hero">
//         <div className="branch-details-container">
//           <Link to="/#branches" className="branch-back-link">
//             <ArrowLeft size={17} />
//             All Branches
//           </Link>

//           <div className="branch-details-hero-content">
//             <div>
//               <span className="branch-eyebrow">GYANJOG STUDY CENTRE</span>

//               <h1>{branch.name} Branch</h1>

//               <p>
//                 Welcome to Gyanjog {branch.name}. Find our branch location and
//                 contact information below.
//               </p>
//             </div>

//             <div className="branch-code-badge">
//               <Hash size={17} />
//               {branch.branchCode}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Branch Information */}
//       <section className="branch-details-section">
//         <div className="branch-details-container">
//           <div className="branch-details-grid">
//             {/* Branch Image */}
//             <div className="branch-image-wrapper">
//               {/* <img
//                 src={branch.image}
//                 alt={`${branch.name} Gyanjog branch`}
//                 className="branch-details-image"
//               /> */}
//               <img
//                 src={branch.image}
//                 alt={`${branch.name} Gyanjog branch`}
//                 className="branch-details-image"
//                 onError={(e) => {
//                   console.error("Image not found:", branch.image);
//                   e.currentTarget.style.display = "none";
//                 }}
//               />
//             </div>

//             {/* Branch Information Card */}
//             <div className="branch-info-card">
//               <span className="branch-info-label">BRANCH INFORMATION</span>

//               <h2>{branch.name}</h2>

//               <div className="branch-info-item">
//                 <div className="branch-info-icon">
//                   <UserRound size={20} />
//                 </div>

//                 <div>
//                   <span>Branch Head</span>
//                   <h3>{branch.head}</h3>
//                 </div>
//               </div>

//               {branch.coordinator && (
//                 <div className="branch-info-item">
//                   <div className="branch-info-icon">
//                     <UserRound size={20} />
//                   </div>

//                   <div>
//                     <span>Coordinator</span>
//                     <h3>{branch.coordinator}</h3>
//                   </div>
//                 </div>
//               )}

//               <div className="branch-info-item">
//                 <div className="branch-info-icon">
//                   <MapPin size={20} />
//                 </div>

//                 <div>
//                   <span>Branch Address</span>
//                   <h3>{branch.address}</h3>
//                 </div>
//               </div>

//               <div className="branch-info-item">
//                 <div className="branch-info-icon">
//                   <Hash size={20} />
//                 </div>

//                 <div>
//                   <span>Branch Code</span>
//                   <h3>{branch.branchCode}</h3>
//                 </div>
//               </div>

//               {/* Contact Numbers */}
//               <div className="branch-contact-section">
//                 <h3>Contact Information</h3>

//                 {branch.phones.map((phone) => (
//                   <a
//                     href={`tel:${phone}`}
//                     key={phone}
//                     className="branch-phone-link"
//                   >
//                     <Phone size={17} />
//                     {phone}
//                   </a>
//                 ))}
//               </div>

//               {/* Google Maps */}
//               <a
//                 href={mapUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="branch-map-btn"
//               >
//                 <Navigation size={18} />
//                 Get Directions
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default BranchDetailsPage;

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  MapPin,
  Phone,
  UserRound,
  Building2,
  ArrowLeft,
  Navigation,
  Hash,
} from "lucide-react";

import { getBranchBySlug } from "../data/siteData";

/* Portrait with a fallback, so a missing or broken image
   shows initials instead of an empty gap */
function BranchPortrait({ src, name }) {
  const [failed, setFailed] = useState(false);

  const initials = (name || "G")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  if (!src || failed) {
    return <div className="branch-portrait-fallback">{initials}</div>;
  }

  return (
    <img
      src={src}
      alt={`${name}, Branch Head`}
      className="branch-portrait-img"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function BranchDetailsPage() {
  const { slug } = useParams();

  // Find branch using URL slug
  const branch = getBranchBySlug(slug);

  // Update page title and SEO description
  useEffect(() => {
    if (branch) {
      document.title = `${branch.name} Branch | Gyanjog`;

      let metaDescription = document.querySelector('meta[name="description"]');

      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);
      }

      metaDescription.setAttribute(
        "content",
        `Visit Gyanjog ${branch.name} branch. Find branch address, contact numbers and branch head information.`,
      );
    } else {
      document.title = "Branch Not Found | Gyanjog";
    }
  }, [branch]);

  // Invalid slug
  if (!branch) {
    return (
      <main className="branch-not-found">
        <Building2 size={55} />
        <h1>Branch Not Found</h1>
        <p>Sorry, we couldn't find the branch you are looking for.</p>
        <Link to="/#branches" className="branch-back-btn">
          <ArrowLeft size={17} />
          Back to Branches
        </Link>
      </main>
    );
  }

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    branch.address,
  )}`;

  return (
    <main className="branch-details-page">
      {/* Hero Section */}
      <section className="branch-details-hero">
        <div className="branch-details-container">
          <Link to="/#branches" className="branch-back-link">
            <ArrowLeft size={17} />
            All Branches
          </Link>

          <div className="branch-details-hero-content">
            <div>
              <span className="branch-eyebrow">GYANJOG STUDY CENTRE</span>

              <h1>{branch.name} Branch</h1>

              <p className="branch-hero-address">
                <MapPin size={16} />
                {branch.address}
              </p>
            </div>

            <div className="branch-code-badge">
              <Hash size={17} />
              {branch.branchCode}
            </div>
          </div>
        </div>
      </section>

      {/* Branch Details */}
      <section className="branch-details-section">
        <div className="branch-details-container">
          <div className="branch-details-grid">
            {/* Branch Head Portrait Card */}
            <aside className="branch-person-card">
              <div className="branch-portrait-frame">
                <BranchPortrait src={branch.image} name={branch.head} />
              </div>

              <h3>{branch.head}</h3>
              <span className="branch-person-role">Branch Head</span>
            </aside>

            {/* Branch Information Card */}
            <div className="branch-info-card">
              <span className="branch-info-label">BRANCH INFORMATION</span>

              <h2>{branch.name}</h2>

              {branch.coordinator && (
                <div className="branch-info-item">
                  <div className="branch-info-icon">
                    <UserRound size={20} />
                  </div>

                  <div>
                    <span>Coordinator</span>
                    <h3>{branch.coordinator}</h3>
                  </div>
                </div>
              )}

              <div className="branch-info-item">
                <div className="branch-info-icon">
                  <MapPin size={20} />
                </div>

                <div>
                  <span>Branch Address</span>
                  <h3>{branch.address}</h3>
                </div>
              </div>

              <div className="branch-info-item">
                <div className="branch-info-icon">
                  <Hash size={20} />
                </div>

                <div>
                  <span>Branch Code</span>
                  <h3>{branch.branchCode}</h3>
                </div>
              </div>

              {/* Contact Numbers */}
              {branch.phones?.length > 0 && (
                <div className="branch-contact-section">
                  <h3>Contact Information</h3>

                  {branch.phones.map((phone) => (
                    <a
                      href={`tel:${phone}`}
                      key={phone}
                      className="branch-phone-link"
                    >
                      <Phone size={17} />
                      {phone}
                    </a>
                  ))}
                </div>
              )}

              {/* Google Maps */}
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="branch-map-btn"
              >
                <Navigation size={18} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BranchDetailsPage;
