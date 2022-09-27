import { Button, Card, Text } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom';
import { IPost } from '../../../interface/post';

function CardComponent({
    id,
    title,
    visited
}: IPost) {
    const navigate = useNavigate()

    function goToDetail(id: string | number | undefined) {
        navigate(`/${id}`)
    }
    return (
        <Card css={{ mw: '15rem'}}>
            <Card.Body>
                <Text h3 color={visited}>{title}</Text>
                <Button onClick={() => goToDetail(id)}>Go to Detail</Button>
            </Card.Body>
        </Card>
    );
}

export default CardComponent