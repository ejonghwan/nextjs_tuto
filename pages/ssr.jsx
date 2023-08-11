import SubLayout from '@/components/SubLayout';
import data from '@/public/members.json';

function Ssr(props) {

	// 페이지 접속 시 호출 
	// 정적인 컴포넌트/태그는 재활용
	// 동적으로 서버에서 패칭한 부분만 변경 하이드레이션
	// 페이지가 렌더링 될떄마다 실행 (새로고침)


	return (
		<SubLayout name={'SSR'}>
			<p>SSR 방식 테스트 페이지입니다.</p>
			<h1> {props.now} </h1>

			<ul>
				{props.members.map((member, idx) => <li key={idx}>
					<h3>{member.name}</h3>
					<div>{member.position}</div>
				</li>)}
			</ul>
		</SubLayout>
	);
}

export async function getServerSideProps() {
	console.log('ssr')
	return {
		props: { 
			now: Math.round(performance.now()),
			members: data.members,
		}
	}
}

export default Ssr;
