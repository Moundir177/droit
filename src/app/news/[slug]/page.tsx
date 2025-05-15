import { getNewsItem, getNewsItems } from '@/lib/tina';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export async function generateStaticParams() {
  try {
    const newsItems = await getNewsItems();
    return newsItems.map((item: any) => ({
      slug: item._sys.filename,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

interface NewsPageProps {
  params: {
    slug: string;
  };
}

export default async function NewsArticlePage({ params }: NewsPageProps) {
  try {
    const newsItem = await getNewsItem(`${params.slug}.mdx`);
    
    if (!newsItem) {
      notFound();
    }

    return (
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-3xl mx-auto">
          {newsItem.image && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={newsItem.image}
                alt={newsItem.title_fr}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          )}
          
          <div className="mb-6">
            <span className="inline-block bg-[#8FD694] text-black px-3 py-1 text-sm font-semibold rounded-full mb-3">
              {newsItem.category_fr}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{newsItem.title_fr}</h1>
            
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(newsItem.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              <span className="mx-2">•</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {newsItem.author_fr}
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <TinaMarkdown content={newsItem.body_fr} />
          </div>
        </article>
      </div>
    );
  } catch (error) {
    console.error('Error fetching news item:', error);
    notFound();
  }
} 