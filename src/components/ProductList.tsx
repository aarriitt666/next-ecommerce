import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from 'isomorphic-dompurify';
import Pagination from "./Pagination";

const PRODUCTS_PER_PAGE = 20;

const ProductList = async ({ categoryId, limit, searchParams }: { categoryId: string; limit?: number; searchParams?: any; }) => {

    const wixClient = await wixClientServer();

    if (!categoryId) {
        console.error("categoryId is null or undefined.");
        return <div>No category selected</div>;
    }

    const productQuery = wixClient.products
        .queryProducts()
        .startsWith("name", searchParams?.name || "")
        .eq("collectionIds", categoryId)
        .hasSome("productType", searchParams?.type ? [searchParams.type] : ["physical", "digital"])
        .gt("priceData.price", searchParams?.min || 0)
        .lt("priceData.price", searchParams?.max || 9999999999)
        .limit(limit || PRODUCTS_PER_PAGE)
        .skip(searchParams?.page ? parseInt(searchParams.page) * (limit || PRODUCTS_PER_PAGE) : 0);

    const res = await productQuery.find();  // First, get the result

    if (searchParams?.sort) {
        const [sortType, sortBy] = searchParams.sort.split(" ");

        if (sortBy === "price") {
            console.log("Manually sorting by price.");

            res.items.sort((a: products.Product, b: products.Product) => {
                const aPrice = a.priceData?.price || 0;
                const bPrice = b.priceData?.price || 0;
                return sortType === "asc" ? aPrice - bPrice : bPrice - aPrice;
            });
        } else if (sortBy === "lastUpdated") {
            console.log("Manually sorting by lastUpdated.");

            res.items.sort((a: products.Product, b: products.Product) => {
                const aDate = a.lastUpdated ? new Date(a.lastUpdated).getTime() : 0; // Handle undefined case
                const bDate = b.lastUpdated ? new Date(b.lastUpdated).getTime() : 0; // Handle undefined case
                return sortType === "asc" ? aDate - bDate : bDate - aDate;
            });
        }
    }

    console.log("Products Retrieved:", res.items.length);
    res.items.forEach((product: products.Product) => {
        console.log("Product Name:", product.name, "Price:", product.priceData?.price, "Last Updated:", product.lastUpdated);
    });

    return (
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            {res.items.map((product: products.Product) => (
                <Link href={"/" + product.slug} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]" key={product._id} >
                    <div className='relative w-full h-80'>
                        <Image src={product.media?.mainMedia?.image?.url || "/product.png"} alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500" />
                        {product.media?.items && <Image src={product.media?.items[1]?.image?.url || "/product.png"} alt="" fill sizes="25vw" className="absolute object-cover rounded-md" />}
                    </div>
                    <div className='flex justify-between'>
                        <span className="font-medium">{product.name}</span>
                        <span className="font-semibold">${product.priceData?.price}</span>
                    </div>
                    {product.additionalInfoSections && <div
                        className='text-sm text-gray-500'
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.additionalInfoSections?.find((section: any) => section.title === "shortDesc")?.description || "") }}
                    />}
                    <button className="rounded-2xl ring-1 ring-haodepink text-haodepink py-2 px-4 text-xs hover:bg-haodepink hover:text-white w-max">Add to Cart</button>
                </Link>
            ))}
            <Pagination currentPage={res.currentPage || 0} hasPrev={res.hasPrev()} hasNext={res.hasNext()}/>
        </div >
    );
};

export default ProductList;
