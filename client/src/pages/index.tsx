import NavBar from "../components/NavBar";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useQuery } from "urql";

const POSTS_QUERY = `
{
  posts {
    id
    title
    updatedAt
    createdAt
  }
}
`;

const Index = () => {
  const [{ data }] = useQuery({ query: POSTS_QUERY });

  return (
    <>
      <div>
        <NavBar />
      </div>

      {!data ? (
        <div>Loading...</div>
      ) : (
        data.posts.map((p) => <div key={p.id}> {p.title} </div>)
      )}
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
