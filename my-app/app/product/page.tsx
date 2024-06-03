interface Product {
    id: number;
    title: string;
}

async function productList() {
    let response = await fetch('https://fakestoreapi.com/products');
    return await response.json();
}

export default async function Product() {
    let products = await productList();
    console.log(products);

    return (
        <div>
            <h1>Product List of my company</h1>
            {
                products.map((item: Product) => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        
                    </div>
                ))
            }
        </div>
    )
}
