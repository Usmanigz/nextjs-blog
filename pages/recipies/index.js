import { parseJSON } from "date-fns";
import Link from "next/link";
import Layout from "../../components/layout";
import { useState } from 'react'
import Router from 'next/router';

function Page({ data }) {

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
        </Layout>
    )
}
const page = 2

function paginate(){

}

export async function getServerSideProps() {

    const res = await fetch(`http://www.webservice.smartguy.com/api/article/category/best-businesses?page=${page}`)
    const data = await res.json()

    /* if (!data) {
        return {
            notFound: true,
        }
    } */

    return {
        props:
        { data: data }
    }
}

export default Page