import React from 'react';
import { useRouter } from 'next/router';

const Detail = () => {

    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <p>post page intro { id }</p>
        </div>
    );
};

export default Detail;