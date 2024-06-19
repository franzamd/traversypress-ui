import PostsTable from '@/components/posts/PostsTable';
import BackButton from '@/components/BackButton';
import PostPagination from '@/components/posts/PostsPagination';

const PostsPage = () => {
  return (
    <div>
      <BackButton text='Go Back' link='/' />
      <PostsTable />
      <PostPagination />
    </div>
  );
};

export default PostsPage;
