import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'


export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
                </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>
                        Back to home
                    </a>
                </Link>
            </h2>
            <img src="/next.jpg" alt="First Next Logo" className="logo" />

            <style jsx>{`
                h1{
                    color: Blue;
                }
            `}</style>
        </Layout>
    )
}