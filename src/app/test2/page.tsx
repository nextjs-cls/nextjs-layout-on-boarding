import Link from 'next/link';

export default function Page() {
    const photos = Array.from({ length: 6 }, (_, i) => i + 1);

    return (
        <section className="cards-container">
            {photos.map((id) => (
                <Link className="card" key={id} href={`test2/photos/${id}`} >
                    {id}
                </Link>
            ))}
        </section>
    );
}
