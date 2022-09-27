import { getPosts } from "../service/posts";
import { Grid, Loading, Text, Badge, useTheme } from '@nextui-org/react'
import { useQuery, useQueryClient } from "react-query";
import CardComponent from "../components/molecules/Card";
import Container from '../shared/styles'
import { IPost } from "../interface/post";

function HomePage() {
    const queryClient = useQueryClient();
    const nextTheme = useTheme()
    const { data: posts, error, isLoading, isFetching} = useQuery(["posts"], getPosts, {
        staleTime: Infinity
    });

    if (isLoading) return <Loading />

    return (
        <Container>
            {isFetching && <Loading />}
            <Grid.Container gap={2}>
                {posts.map(
                    (post: IPost) =>
                    <Grid>
                        <CardComponent
                            id={post.id}
                            title={post.title}
                            visited={
                                queryClient.getQueriesData(['posts', post.id]) ?
                                nextTheme.theme?.colors.green300.value : ''
                            }
                        />
                    </Grid> 
                )}
            </Grid.Container>
        </Container>
    );
}

export default HomePage;