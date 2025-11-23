import { useState } from 'react';
import '../styles/navbar.css';
import type { CollectionEntry } from 'astro:content';

type Props = CollectionEntry<'blog'>;

const Navbar = ({ blog }: { post: Props; blog: Props[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const lang = 'en';
  return (
    <>
      <nav className={`navbar flex md:hidden`}>
        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          id="hamburger"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        {/* <ul className="flex flex-row gap-2">
          {post?.filePath
            ?.split('/')
            .slice(2, -1)
            .map((folder, index) => (
              <span
                key={`${folder}-${index}`}
                className="flex flex-row gap-2 justify-center items-center"
              >
                <li>
                  <span className="text-sm">
                    {folder
                      .split(' ')
                      .map((word) =>
                        word
                          .split('-')
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(' ')
                      )
                      .join(' ')}
                  </span>
                </li>
                <li className="text-sm">
                  <span>&gt;</span>
                </li>
              </span>
            ))}
          <li>
            <a
              href={`/blog/${post.slug}`}
              className="dark:!text-pink-100 text-sm"
            >
              {post?.data?.title.length >= 36
                ? `${post?.data?.title.slice(
                    0,
                    27
                  )}...${post?.data?.title.slice(-6)}`
                : post?.data?.title}
            </a>
          </li>
        </ul> */}
      </nav>

      <div
        className={`md:hidden block invisible h-screen w-full bg-[#262c4c] fixed z-10 opacity-0 transition-all duration-300 ease-in-out ${
          isOpen && '!opacity-60 !visible !z-10'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
        <ul
          className={`w-[240px] p-2 m-0 bg-[#d6dcfd] dark:bg-[#262c4c] z-20 block md:hidden h-screen fixed overflow-y-auto translate-x-[-240px] transition-transform duration-300 ease-in-out ${
            isOpen && 'translate-x-[0px]'
          }`}
        >
          <h2 className="text-lg font-normal">Posts</h2>
          {blog
            .sort(
              (a, b) => a?.data?.pubDate.getTime() - b?.data?.pubDate.getTime()
            )
            .reverse()
            .map((post, index) => (
              post?.filePath?.includes(`/${lang}/`) && (
              <a
                key={`sidenav-${index}-${post.slug}`}
                href={`/blog/${post.slug}/`}
                className="!text-[#aa4acf] dark:!text-[#d0a0ff]"
              >
                  <li className="text-sm">• {post.data.title}</li>
                </a>
              )
            ))}
        </ul>
    </>
  );
};

export default Navbar;
