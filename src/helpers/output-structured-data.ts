/**
 * This file isn't mandatory for generating the structured data and is purely
 * used to display it as raw JSON in the blog posts. Feel free to delete :)
 */

import type { CollectionEntry } from 'astro:content';

import { SITE_URL } from '@consts';

type Props = CollectionEntry<'blog'>;

export const createExampleStructuredData = ({ slug, data }: Props) => {
    const { title, description, createdAt, updatedAt, author, heroImage } =
        data;
    const pageUrl = new URL(slug, SITE_URL);

    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        datePublished: createdAt.toISOString(),
        dateModified: updatedAt?.toISOString() ?? undefined,
        url: pageUrl,
        thumbnailUrl: heroImage.url.src,
        image: {
            '@type': 'ImageObject',
            url: heroImage.url.src,
            width: heroImage.url.width,
            height: heroImage.url.height,
            caption: heroImage.alt,
        },
        author: {
            '@type': 'Person',
            name: author.name,
            description: author.bio,
            url: author.profileUrl,
        },
    };
};
