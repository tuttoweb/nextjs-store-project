import { Separator } from '@/components/ui/separator'


function SectionTitle({children}:{children?:React.ReactNode}) {
  return (
    <div>
      <h2 className='text-3xl font-medium tracking-wider capitalize mb-8'>
        {children || ''}
      </h2>
      <Separator />
    </div>
  )
}

export default SectionTitle