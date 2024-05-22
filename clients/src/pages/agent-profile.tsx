import { useOne } from "@pankod/refine-core"
import { useParams } from "@pankod/refine-react-router-v6";
import { Profile } from "components";


const AgentProfile = () => {
    // const { id } = useParams();
    const { id } = useParams();
    const { data, isLoading, isError } = useOne({
        resource: 'users',
        id: id as string,
    });

    console.log('apd',data);

    const myProfile = data?.data ?? [];

    console.log('mpd',myProfile);

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <Profile
            type="Agent"
            name={myProfile.name}
            email={myProfile.email}
            avatar={myProfile.avatar}
            properties={myProfile.allProperties}
        />
    );
};

export default AgentProfile;