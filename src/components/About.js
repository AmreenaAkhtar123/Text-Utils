import React from 'react';

export default function About({ darkMode }) {
  return (
    <div className={`container my-3 ${darkMode ? 'dark-mode' : ''}`}>
      <h1 className="about mb-3">
        About TextUtils
      </h1>

      <div className="accordion" id="accordionExample">
        {[1, 2, 3].map((item) => {
          let title = '';
          let content = '';

          if (item === 1) {
            title = 'Text Analysis Features';
            content = 'TextUtils provides various text manipulation utilities including word and character count, case conversion, whitespace removal, and estimated reading time. It is designed to help you clean and analyze your text quickly and efficiently.';
          } else if (item === 2) {
            title = 'Dark and Light Mode Support';
            content = 'You can switch between dark and light mode to enhance your reading and editing experience based on your preference. The background and text colors adapt accordingly to reduce eye strain.';
          } else if (item === 3) {
            title = 'Responsive and User-Friendly Design';
            content = 'TextUtils is built with a responsive layout using Bootstrap, making it accessible across all devices. Whether you are using a phone, tablet, or desktop, you will have a consistent and intuitive experience.';
          }

          return (
            <div className="accordion-item" key={item}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${item !== 1 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${item}`}
                  aria-expanded={item === 1}
                  aria-controls={`collapse${item}`}
                >
                  {title}
                </button>
              </h2>
              <div
                id={`collapse${item}`}
                className={`accordion-collapse collapse ${item === 1 ? 'show' : ''}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>{title}</strong> — {content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
