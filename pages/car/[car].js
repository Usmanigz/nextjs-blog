import { useRouter } from 'next/router';

export default function Page() {
    const router = useRouter();
    console.log(router.query.car);
    return(
        <div>abc</div>
    )
}