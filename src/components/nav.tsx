"use client";

import Link from "next/link";
import { useState } from "react";
import React from "react";

interface NavProp {
  isAuth: boolean;
}

const Nav: React.FC<NavProp> = ({ isAuth }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const navItems = [
    { name: "Accounting", items: [] },
    { name: "Purchasing", items: [] },
    { name: "Supplier", items: [] },
  ];

  if (!isAuth) {
    return null;
  }

  return (
    <nav className="border-end p-3" style={{ width: "33.333%" }}>
      <h2 className="h5 fw-semibold mb-2">Navigation</h2>
      {navItems.map((item, index) => (
        <div key={index} className="py-2">
          <button
            className="btn btn-light w-100 text-start"
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
          >
            {item.name}
          </button>
          {activeIndex === index && (
            <div className="p-3 border-start border-primary border-4 bg-light mt-1 rounded">
              <Link href="/test" className="text-decoration-none">
                Test Page
              </Link>
            </div>
          )}
        </div>
      ))}

      <div className="py-2">
        <button
          className="btn btn-light w-100 text-start"
          onClick={() => toggleAccordion(4)}
          aria-expanded={activeIndex === 4}
        >
          Inventory
        </button>
        {activeIndex === 4 && (
          <div className="p-3 border-start border-primary border-4 bg-light mt-1 rounded">
            <Link
              href="/inventory/unitofmeasure"
              className="text-decoration-none"
            >
              Unit Of Measure
            </Link>
            <div className="ms-3 mt-2 border-start ps-2">
              <Link
                href="/inventory/unitofmeasure/lookup"
                className="text-decoration-none"
              >
                Lookup
              </Link>
            </div>
          </div>
        )}
        {activeIndex === 4 && (
          <div className="p-3 border-start border-primary border-4 bg-light mt-1 rounded">
            <Link
              href="/inventory/itemcategory"
              className="text-decoration-none"
            >
              Item Category
            </Link>
            {/* <div className="ms-3 mt-2 border-start ps-2">
              <Link
                href="/inventory/itemcategory/lookup"
                className="text-decoration-none"
              >
                Lookup
              </Link>
            </div> */}
          </div>
        )}
      </div>

      <div className="py-2 mt-4 pt-4 border-top">
        <Link
          href="/logout"
          className="btn btn-outline-danger w-100 text-start"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
