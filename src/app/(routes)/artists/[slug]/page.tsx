// TODO: IMPLEMENT ARTIST DETAIL PAGE

interface ArtistPageProps {
  params: { slug: string }
}

export default function ArtistPage({ params }: ArtistPageProps) {
  return <div>Artist: {params.slug}</div>
}
