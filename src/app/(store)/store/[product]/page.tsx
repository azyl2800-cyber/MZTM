// TODO: IMPLEMENT PRODUCT DETAIL PAGE (FUTURE)

interface ProductPageProps {
  params: { product: string }
}

export default function ProductPage({ params }: ProductPageProps) {
  return <div>Product: {params.product}</div>
}
