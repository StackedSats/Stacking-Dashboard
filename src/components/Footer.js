import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Header Component                              */
/* -------------------------------------------------------------------------- */
function Footer() {
  return (
    <div className="flex items-center justify-center w-full py-3 text-white bg-white dark:bg-gray-800">
      <nav>
        <ul className="flex ml-auto list-none lg:flex-row">
          <li>
            <a
              className="flex items-center px-6 py-2 leading-snug text-gray-500 dark:text-white hover:opacity-75"
              href="https://www.stackedsats.com/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              className="flex items-center px-6 py-2 leading-snug text-gray-500 dark:text-white hover:opacity-75"
              href="https://www.stackedsats.com/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="flex items-center px-6 py-2 leading-snug text-gray-500 dark:text-white hover:opacity-75"
              href="https://twitter.com/stacked_sats"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              className="flex items-center px-6 py-2 leading-snug text-gray-500 dark:text-white hover:opacity-75"
              href="/"
            >
              Stacks Monitor
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
