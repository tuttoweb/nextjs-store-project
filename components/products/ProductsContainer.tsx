import ProductGrid from './ProductGrid';
import ProductList from './ProductList';
import { LuLayoutGrid, LuList } from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { fetchAllProducts } from '@/utils/actions';
import Link from 'next/link';

async function ProductsContainer({layout,search}:{layout:string, search:string}) {
  const products = await fetchAllProducts({search})
  const totalProduct = products.length

  const searchTerm = search?`&search=${search}`:''

  return (
    <>
    <section>
      <div className='flex justify-between item-center'>
        <h4 className='font-medium text-lg'>{totalProduct} product{totalProduct !== 1 && 's'}</h4>
        <div className='flex gap-x-4'>
          <Button variant={layout==='grid'?'default':'ghost'} asChild size='icon'>
            <Link href={`/products?layout=grid${searchTerm}`}>
              <LuLayoutGrid/>
            </Link>
          </Button>

          <Button variant={layout==='list'?'default':'ghost'} asChild size='icon'>
            <Link href={`/products?layout=list${searchTerm}`}>
              <LuList/>
            </Link>
          </Button>

        </div>
      </div>
    </section>

    <Separator className='mt-4' />
    
    <div>
      {totalProduct === 0?<h5 className='text-2xl mt-6'>Sorry, no products matched your search</h5>: 
      (layout==='grid'?<ProductGrid products={products}/>: <ProductList products={products}/>)}
    </div>
    </>
  )
}

export default ProductsContainer