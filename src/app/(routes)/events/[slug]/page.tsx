// TODO: IMPLEMENT EVENT DETAIL PAGE

interface EventPageProps {
  params: { slug: string }
}

export default function EventPage({ params }: EventPageProps) {
  return <div>Event: {params.slug}</div>
}
