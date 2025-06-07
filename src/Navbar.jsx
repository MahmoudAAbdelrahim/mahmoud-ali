import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const sites = [
    {
      name: "بصمة المنصوري",
      keywords: "بصمة المنصوري معرض سيارات مرسيدس متجر ",
      link: "/PageOne"
    },
    {
      name: "مرشح لك",
      keywords: " منصة تعليمية  موقع تحميل تطبيق موقع تواصل"  ,
      link: "/PageTwo"
    },
    {
      name: "جديد",
      keywords: "جديد تحديث",
      link: "/PageThree"
    },
    {
      name: "من المنصوري",
      keywords: "   موقع ادارة سوبرمركة  مكتبه لبيع وقرائة الكتب متجر لبيع الملابس ",
      link: "/PageFour"
    }
  ];

  // تصفية المواقع بناءً على النص الذي يكتبه المستخدم
  const filteredSites = sites.filter(site =>
    site.keywords.includes(searchText.trim())
  );

  const handleSearch = () => {
    const search = searchText.trim();
    if (!search) return;

    const foundSite = sites.find(site =>
      site.keywords.includes(search)
    );

    if (foundSite) {
      navigate(foundSite.link);
    } else {
      alert("مافيش موقع مطابق");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#000', padding: '10px 20px' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h1 className="navbar-brand m-0" style={{ color: '#fff' }}>Al-Mansouri</h1>

        <div className="offcanvas-body list" style={{ position: 'relative' }}>
          <div className="haddin">
            <div className="input-group">
              <input
                type="text"
                className="input3"
                id="text"
                name="text"
                placeholder="ابحث عن موقعك"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') handleSearch();
                }}
              />
              
              <button onClick={handleSearch} className="search" style={{ transform: "scale(1.0)" }}>
                <svg viewBox="0 0 512 512" className="searchIcon" width="20" height="20">
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </button>
            </div>

         
          </div>
        </div>
   {/* عرض نتائج البحث كقائمة */}
            {searchText && (
              <ul className="dropdown-menu show" style={{ display: 'block', position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 1000 }}>
                {filteredSites.length > 0 ? (
                  filteredSites.map((site, index) => (
                    <li key={index}>
                      <Link className="dropdown-item" to={site.link} onClick={() => setSearchText("")}>
                        {site.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="dropdown-item text-muted">لا يوجد نتائج</li>
                )}
              </ul>
            )}
        <ul className="navbar-nav d-flex flex-row align-items-center gap-4" style={{ listStyle: 'none', margin: 0 }}>
          <li className="nav-item">
            <Link className="nav-link active text-white fw-bold" to="/">Home</Link>
          </li>
          <li className="nav-item dropdown position-relative">
            <a
              className="nav-link dropdown-toggle text-white fw-bold"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sites
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ right: 0, left: 'auto', minWidth: '200px', zIndex: 9999 }}>
              {sites.map((site, index) => (
                <li key={index}><Link className="dropdown-item" to={site.link}>{site.name}</Link></li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
