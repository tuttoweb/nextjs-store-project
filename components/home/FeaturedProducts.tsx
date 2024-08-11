import { fetchFeaturedProduct } from "@/utils/actions"
import EmptyList from "../global/EmptyList"
import SectionTitle from "../global/SectionTitle"
import ProductGrid from "../products/ProductGrid"


async function FeaturedProducts() {

  const products = await fetchFeaturedProduct()

  if (products.length === 0) return <EmptyList />


  return (
    <section className="pt-24">
      <SectionTitle>
        Featured products
      </SectionTitle>


      <ProductGrid products={products}/>
      
    </section>
  )
}

export default FeaturedProducts