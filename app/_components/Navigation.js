import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();

  return (
    <>
      <nav className="z-50 text-xl relative">
        <div className="flex items-center">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-16 items-center">
            <li>
              <Link
                href="/"
                className="hover:text-accent-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/cabins"
                className="hover:text-accent-400 transition-colors"
              >
                Cabins
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-accent-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              {session?.user ? (
                <Link href="/account" passHref>
                  <div className="hover:text-accent-400 transition-colors flex items-center gap-4 cursor-pointer">
                    {session.user.image && (
                      <img
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        className="h-8 w-8 rounded-full"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <span>{session.user.name || "Guest"}</span>
                  </div>
                </Link>
              ) : (
                <Link
                  href="/account"
                  className="hover:text-accent-400 transition-colors"
                >
                  Guest area
                </Link>
              )}
            </li>
          </ul>

          {/* Mobile Navigation Toggle Button */}
          <div className="md:hidden ml-auto">
            <button id="menu-toggle" className="cursor-pointer">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          id="mobile-menu"
          className="fixed inset-0 bg-gray-800 text-white z-[99999] flex flex-col items-center justify-center gap-6 transform -translate-y-full transition-transform duration-300 ease-in-out md:hidden"
        >
          {/* Close Button */}
          <button id="close-menu" className="absolute top-5 right-5 p-2">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="flex flex-col items-center gap-6 text-2xl">
            <li>
              <Link
                href="/"
                className="hover:text-accent-400 transition-colors menu-link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/cabins"
                className="hover:text-accent-400 transition-colors menu-link"
              >
                Cabins
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-accent-400 transition-colors menu-link"
              >
                About
              </Link>
            </li>
            <li>
              {session?.user ? (
                <Link href="/account" passHref>
                  <div className="hover:text-accent-400 transition-colors flex items-center gap-4 cursor-pointer menu-link">
                    {session.user.image && (
                      <img
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        className="h-10 w-10 rounded-full"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <span>{session.user.name || "Guest"}</span>
                  </div>
                </Link>
              ) : (
                <Link
                  href="/account"
                  className="hover:text-accent-400 transition-colors menu-link"
                >
                  Guest area
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {/* Inline script to handle menu toggling and link click */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menu-toggle');
            const closeMenu = document.getElementById('close-menu');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuLinks = document.querySelectorAll('.menu-link');

            function openMenu() {
              mobileMenu.classList.remove('-translate-y-full');
              document.body.classList.add('overflow-hidden'); // Prevent scrolling
            }

            function closeMenuHandler() {
              mobileMenu.classList.add('-translate-y-full');
              document.body.classList.remove('overflow-hidden');
            }

            // Open menu when clicking toggle button
            menuToggle.addEventListener('click', openMenu);

            // Close menu when clicking the close button
            closeMenu.addEventListener('click', closeMenuHandler);

            // Close menu when clicking any navigation link
            menuLinks.forEach(link => {
              link.addEventListener('click', function(event) {
                closeMenuHandler();
              });
            });
          });
        `,
        }}
      />
    </>
  );
}
