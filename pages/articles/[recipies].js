import { parseJSON } from "date-fns";
import Link from "next/link";
import Layout from "../../components/layout";
import { useState } from 'react'
// import Router from 'next/router';
import { useRouter } from 'next/router';

function articles({ data, page }) {

    const router = useRouter();
    console.log(router.query.recipies);

    return (
        <Layout>
            <ul>
                {data.data.map((article, i) =>(
                    <div key={i}>
                        <li>{article.title}</li>
                        <img src={article.image} />
                        {/* {id = id+1} */}
                    </div>
                    // 
                    
                ))}
            </ul>
            <button onClick={() => router.push(`/recipies/1?page=${page - 1}`)} disabled={page <= 1}>
                Previous</button>
            <button onClick={() => router.push(`/recipies/1?page=${page + 1}`)}>Next</button>
        </Layout>
    )
}

// const page = 2

export async function getServerSideProps({ query: {page=1 } }) {

    // const res = await fetch(`http://www.webservice.smartguy.com/api/article/category/best-businesses?page=${page}`)
    const res = await fetch(`http://www.webservice.smartguy.com/api/article/category/best-businesses`)
    const data = await res.json()

    /* if (!data) {
        return {
            notFound: true,
        }
    } */

    return {
        props:
        {
            data: data,
            page: +page
        }
    }
}

export default articles