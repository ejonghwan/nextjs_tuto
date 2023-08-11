import SubLayout from '@/components/SubLayout';
import data from '@/public/members.json';

function Ssg(props) {
	
	// props는 getStaticProps 에서 넘겨준 값
	// 얘는 무조건 스태틱한 파일만. get 요청을 해도 그 빌드시점에만 요청을함.
	// 1년에 한번 바뀌는 그런 값들을 넣는게 좋음.
	// 얘는 빌드 후 npm run start로 실행해야됨

	return (
		<SubLayout name={'SSG'}>
			<p>SSG 방식 테스트 페이지입니다.</p>
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

export async function getStaticProps() {
	console.log('ssg')
	return {
		props: { 
			now: Math.round(performance.now()),
			members: data.members, 
		},
	}
}



export default Ssg;
