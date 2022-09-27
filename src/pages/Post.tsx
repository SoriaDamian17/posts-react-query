import { Button, Loading, Text } from '@nextui-org/react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostId } from '../service/posts';
import Container from '../shared/styles'

function PostPage() {
    const navigate = useNavigate()
    const { id } = useParams()
    const { data: post, isLoading, isFetching } = useQuery(['posts', id], () => getPostId(id))

    function goToList() {
        navigate('/')
    }

    if (isLoading) return <Loading />

    return (
        <Container>
            {isFetching && <Loading />}
            <Button onClick={() => goToList()}>Back to List</Button>
            <Text h1>{post.title}</Text>
            <Text h3>{post.body}</Text>
        </Container>
    );
}

export default PostPage;