import { useState } from 'react';
import '../styles/navbar.css';
import type { CollectionEntry } from 'astro:content';

type Props = CollectionEntry<'blog'>;

const Navbar = ({ post, blog }: { post: Props; blog: Props[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className={`navbar flex md:hidden`}>
        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          id="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className="flex flex-row gap-2">
          {post?.filePath
            ?.split('/')
            .slice(2, -1)
            .map((folder, index) => (
              <span key={`${folder}-${index}`} className="flex flex-row gap-2">
                <li>
                  <span>
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
                <li>
                  <span>&gt;</span>
                </li>
              </span>
            ))}
          <li>
            <a href={`/blog/${post.slug}`} className="dark:!text-pink-100">
              {post?.data?.title}
            </a>
          </li>
        </ul>
      </nav>
            
      <div
        className={`md:hidden hidden h-screen w-full bg-[#173458] fixed z-10 opacity-0 transition-opacity duration-300 ease-in-out ${isOpen && '!opacity-60 block'}`}
      ></div>
      <ul
        className={`w-[240px] p-2 m-0 bg-[#61dbfb] dark:bg-[#173458] z-20 block md:hidden h-screen fixed overflow-y-auto translate-x-[-240px] transition-transform duration-300 ease-in-out ${isOpen && 'translate-x-[0px]'}`}
      >
        <h2 className="text-lg font-normal">osts</h2>
        {blog.map((post, index) => (
          <a
            key={`sidenav-${index}-${post.slug}`}
            href={`/blog/${post.slug}/`}
            className="!text-[#aa4acf] dark:!text-[#d0a0ff]"
          >
            <li className="text-sm">• {post.data.title}</li>
          </a>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
