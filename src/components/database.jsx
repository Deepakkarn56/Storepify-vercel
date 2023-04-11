import img1 from '../assets/images/image1.webp';
import img2 from '../assets/images/image2.webp';
import img3 from '../assets/images/image3.webp';
import img4 from '../assets/images/image4 .webp';
import img5 from '../assets/images/image5.webp';


const database = {
    totalImage: 5,
    cardData: [
        {
            id: 1,
            img: img1,
            title: 'Long Sleeve Rustic Shirt',
            desc: '$23',
            size: ['S', 'M', 'L', 'XL'],
            checkSize: {
                S: true,
                M: false,
                L: false,
                XL: false,
            },
            linkImg: {
                S : "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_799a42dc-c721-4679-a5d6-b79265250664.png?crop=center&height=1200&v=1663639898&width=900",
                M : "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/2_7456b82e-8491-4ade-93fb-fe4469307b23.png?crop=center&height=1200&v=1663639898&width=900",
                L : "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/3_944f9780-34e8-497c-a6d9-4f2968b291de.png?crop=center&height=1200&v=1663639898&width=900",
                XL : "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/4_848261eb-67a8-4ef9-9ac9-964be2e15741.png?crop=center&height=1200&v=1663639898&width=900",

            },
        },
        {
            id: 2,
            img: img2,
            title: 'Midi Dress With Side Slit',
            desc: '$65',
            size: ['S', 'M', 'L', 'XL'],
            checkSize: {
                S: true,
                M: false,
                L: false,
                XL: false,
            },
            linkImg: {
                S: "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_94fe575b-412c-4299-95c7-1d4d7c6eaf43.png?crop=center&height=1200&v=1663639889&width=900",
                M: "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/2_c377fcf9-c026-4388-afee-49acb151301d.png?crop=center&height=1200&v=1663639889&width=900",
                L : "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/3_b5915386-f52d-4cf1-b9e2-71f102a687a1.png?crop=center&height=1200&v=1663639889&width=900",
                XL : "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/4_feb0b9b2-ac59-450c-8a18-65f34be54790.png?crop=center&height=1200&v=1663639889&width=900",
            },
        },
        
        {
            id: 3,
            img: img3,
            title: 'Rustic Shorts',
            desc: '$34',
            size: ['S', 'M', 'L', 'XL'],
            checkSize: {
                S: true,
                M: false,
                L: false,
                XL: false,
            },
            linkImg: {
                S: "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_b412615d-ca13-4fd9-b6b0-3aadcc7638dd.png?crop=center&height=1200&v=1663639852&width=900",
                M: "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/2_d4c7211d-5141-4e6a-9f8a-586fd4203663.png?crop=center&height=1200&v=1663639852&width=900",
                L: "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/4_439c332d-59ae-4ad1-96cb-cf8627d947eb.png?crop=center&height=1200&v=1663639853&width=900",
                XL: "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/5_9ef214e8-2488-497c-a932-5eb38ef6f37f.png?crop=center&height=1200&v=1663639853&width=900",
            },
        },
        {
            id: 4,
            img: img4,
            title: 'Satin Wrap Shirt',
            desc: '$12',
            size: ['S', 'M', 'L', 'XL'],
            checkSize: {
                S: true,
                M: false,
                L: false,
                XL: false,
            },
            linkImg: {
                S: "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_a946f34d-d20e-468e-847a-0db6ec0cedcb.png?crop=center&height=1200&v=1663639838&width=900",
                M: "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/2_1efb87a8-2e6c-413b-8276-8e6b6e91a61e.png?crop=center&height=1200&v=1663639838&width=900",
                L: "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/3_31f3fece-a5ba-49c6-a814-97631f137b87.png?crop=center&height=1200&v=1663639838&width=900",
                XL: "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/4_1afe7b8e-70a9-40dc-9f43-cc0a37df05e6.png?crop=center&height=1200&v=1663639838&width=900",
            },
        },
        
        {
            id: 5,
            img: img5,
            title: 'Short Strappy Dress',
            desc: '$34',
            size: ['S', 'M', 'L', 'XL'],
            checkSize: {
                S: true,
                M: false,
                L: false,
                XL: false,
            },
            linkImg: {
                S: "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_dd2b2cc9-0fac-473d-a902-c2cc827b1dec.png?crop=center&height=1200&v=1663639815&width=900",
                M: "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/2_0ae7e333-fb26-447c-ba40-23c301ff92d2.png?crop=center&height=1200&v=1663639815&width=900",
                L: "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/4_a89a6820-eb47-4e56-af8a-29d5d9adfcc2.png?crop=center&height=1200&v=1663639815&width=900",
                XL: "https://cdn.shopify.com/s/files/1/0624/8638/0738/products/3_f2bf176e-c55e-4a0a-b88e-13bb769ac264.png?crop=center&height=1200&v=1663639815&width=900",
            },
        },
        

    ]
}

export default database;