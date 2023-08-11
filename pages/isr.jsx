import SubLayout from '@/components/SubLayout';

function Isr(props) {

	// revalidate에 지정한 시간마다 revalidate하여 pre-render-page로 재빌드함.
	// 스태틱한 파일을 일정시간마다 데이터를 변경해서 새롭게 스태틱한 파일로 만들어줌
	// 얘도 새로고침 시 적용

	// 빌드 시점에 데이터요청하면 될듯??

	return (
		<SubLayout name={'ISR'}>
			<p>ISR 방식 테스트 페이지입니다.</p>
			<h1> {props.now} </h1>
		</SubLayout>
	);
}


export async function getStaticProps() {
	console.log('isr')
	return {
		props: { now: Math.round(performance.now()) },
		revalidate: 5, //5s
	}
}

export default Isr;
