import SubLayout from '@/components/SubLayout';
import { useState, useEffect } from 'react';

function Csr() {

    const [ Now, setNow ] = useState('');

    useEffect(() => {
        setNow(Math.round(performance.now()))
    }, [])

	return (
		<SubLayout name={'Csr'}>
			<p>Csr 방식 테스트 페이지입니다.</p>
            <h1> {Now} </h1>
		</SubLayout>
	);
}



export default Csr;
