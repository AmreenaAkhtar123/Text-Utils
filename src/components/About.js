import React from 'react';

export default function About({ darkMode }) {
  return (
    <div className={`container my-3 ${darkMode ? 'dark-mode' : ''}`}>
      <h1 className="about mb-3">
        About Us
      </h1>

      <div className="accordion" id="accordionExample">
        {[1, 2, 3].map((item) => (
          <div className="accordion-item" key={item}
            >
            <h2 className="accordion-header">
              <button className={`accordion-button ${item !== 1 ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${item}`}
                aria-expanded={item === 1}
                aria-controls={`collapse${item}`}
                >
                Accordion Item #{item}
              </button>
            </h2>
            <div
              id={`collapse${item}`}
              className={`accordion-collapse collapse ${item === 1 ? 'show' : ''}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the item {item}’s accordion body.</strong> It is {item === 1 ? 'shown' : 'hidden'} by default...
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
