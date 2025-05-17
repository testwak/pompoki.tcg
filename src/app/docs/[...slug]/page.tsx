import { source } from '@/lib/source';
import { DocsPage, DocsBody, DocsDescription, DocsTitle, } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';

export default async function Page(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    const MDXContent = page.data.body;

    return (
        <DocsPage toc={page.data.toc} full={page.data.full} tableOfContent={{style: 'clerk'}}>
            <DocsTitle className='font-1' style={{fontSize: "2.5em"}}>{page.data.title}</DocsTitle>
            <DocsDescription>{page.data.description}</DocsDescription>
            <DocsBody>
                <MDXContent
                    components={getMDXComponents({
                        // this allows you to link to other pages with relative file paths
                        a: createRelativeLink(source, page),
                    })}
                />
                <main className="container flex flex-col items-center py-16 text-center z-[2]">
                    <div className="absolute inset-0 z-[-1] overflow-hidden duration-1000 animate-in fade-in [perspective:2000px]">
                        <div
                        className="absolute bottom-[0%] left-1/2 size-[1200px] origin-bottom bg-fd-primary/30 opacity-10"
                        style={{
                            transform: 'rotateX(25deg) translate(-50%, 600px)',
                            backgroundImage:
                            'radial-gradient(50% 50% at center,transparent,#2b2d31), repeating-linear-gradient(to right,var(--color-fd-primary),var(--color-fd-primary) 1px,transparent 2px,transparent 100px), repeating-linear-gradient(to bottom,var(--color-fd-primary),var(--color-fd-primary) 2px,transparent 3px,transparent 100px)',
                        }}
                        />
                    </div>

                </main>


            </DocsBody>
        </DocsPage>

        
    );
}

export async function generateStaticParams() {
    return source.generateParams();
}

export async function generateMetadata(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    return {
        title: page.data.title,
        description: page.data.description,
    };
}


