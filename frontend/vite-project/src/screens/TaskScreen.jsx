import { useParams } from "react-router-dom";
import { useGetCollectionsByUserQuery } from '../slices/collections-slice';

export default function TaskScreen() {
    const { id } = useParams();
    console.log(id);
    const { data, isLoading, error } = useGetCollectionsByUserQuery(id);
    console.log(data);

    if (isLoading) {
        return <div>loading...</div>;
    }

    if (error) {
        return <div>{error.error}</div>;
    }

    if (!data || !Array.isArray(data)) {
        return (
            <h1>No Tasks apparently</h1>
        )
    }

    return (
        <div>
            {data.map((d) => (
                <div key={d.id}>
                    <h1>Task - {d.title}</h1>
                    <p>Description - {d.description}</p>
                </div>
            ))}
        </div>
    );
}
