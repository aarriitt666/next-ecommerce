import { wixClientServer } from "@/lib/wixClientServer";
import Add from "../../components/Add";
import CustomizeProducts from "../../components/CustomizeProducts";
import ProductImages from "../../components/ProductImages";
import { notFound } from "next/navigation";
import DOMPurify from 'isomorphic-dompurify';

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  // console.log(params.slug)
  const wixClient = await wixClientServer();
  const products = await wixClient.products.queryProducts().eq("slug", params.slug).find();
  if (!products.items[0]) { return notFound }
  const product = products.items[0]
  // Inspect the entire product object and the variants
  console.log('Product:', JSON.stringify(product, null, 2));
  console.log('Product Variants:', JSON.stringify(product.variants, null, 2));
  return <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
    {/* IMG  */}
    <div className='w-full lg:w-1/2 lg:sticky top-0 h-max'>
      <ProductImages items={product.media?.items} />
    </div>
    {/* TEXTS */}
    <div className='w-full lg:w-1/2 flex flex-col gap-6'>
      <h1 className="text-4xl font-medium">{product.name}</h1>
      <div className="text-gray-500" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description || "This product has no description.") }} />
      <div className='h-[2px] bg-gray-100' />
      {product.priceData?.price === product.priceData?.discountedPrice ? (
        <h2 className="font-medium text-2xl">${product.priceData?.price}</h2>
      ) : (
        <div className='flex items-center gap-4'>
          <h3 className="text-xl text-gray-500 line-through">${product.priceData?.price}</h3>
          <h2 className="font-medium text-2xl">${product.priceData?.discountedPrice}</h2>
        </div>
      )}
      <div className='h-[2px] bg-gray-100' />
      {product.variants && product.productOptions && (<CustomizeProducts productId={product._id!} variants={product.variants} productOptions={product.productOptions} />)}
      <Add />
      <div className='h-[2px] bg-gray-100' />
      {product.additionalInfoSections?.map((section: any) => (
        <div className='text-sm' key={section.title}>
          <h4 className="font-medium mb-4">{section.title}</h4>
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section.description) || "" }} />
        </div>
      ))
      }
    </div >
  </div >;
};

export default SinglePage;
