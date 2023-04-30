import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    // url parameter를 이용하여, details page에 이동하였을 때 어떤 id를 가져오는지 확인할 수 있음
    // useParams

    // useParams는 url에 두었던 id 변수명과 그 값을 객체 형태로 가져오는 역할을 한다.
    const { id } = useParams();
    console.log(id);

    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    };

    useEffect(() => {
        getMovie();
    }, [])

    return <h1>Detail</h1>
}

export default Detail;