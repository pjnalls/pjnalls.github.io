import rss from '@astrojs/rss';
import { SITE_BLOG_TITLE, SITE_BLOG_DESCRIPTION } from '../config';

export const get = () =>
	rss({
		title: SITE_BLOG_TITLE,
		description: SITE_BLOG_DESCRIPTION,
		site: import.meta.env.SITE,
		items: import.meta.glob('./blog/**/*.md'),
	});
