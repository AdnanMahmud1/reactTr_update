import { useNavigate, useParams } from 'react-router-dom';

export default function Posts() {
    // const params = useParams();
    const { category, topic } = useParams();
    const navigate = useNavigate();
    console.log(navigate);
    return (
        <div>
            Posts about - {category} in {topic}
        </div>
    );
}
