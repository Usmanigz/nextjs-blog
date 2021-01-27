import { parseJSON } from "date-fns";
import Link from "next/link";
import Layout from "../../components/layout";
import { useState } from 'react'
// import Router from 'next/router';
import { useRouter } from 'next/router';
function Page({ data, page }) {

    const router = useRouter();
    console.log(router.query.recipies);

    // var id = 1

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
            <div align="center">
                <button onClick={() => router.push(`/articles?page=${page - 1}`)} hidden={page <= 1} className="pag-btn">
                Previous</button>
                <button disabled className="mar-left pag-btn">#{page}</button>
                <button onClick={() => router.push(`/articles?page=${page + 1}`)} className="mar-left pag-btn">Next</button>
            </div>

            
        </Layout>
    )
}
// const page = 2

function paginate(){

}

export async function getServerSideProps({ query: {page=1 } }) {

    const res = await fetch(`http://www.webservice.smartguy.com/api/article/category/best-businesses?page=${page}`)
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

export default Page