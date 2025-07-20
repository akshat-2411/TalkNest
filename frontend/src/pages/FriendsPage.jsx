import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserFriends } from '../lib/api';
import PageLoader from '../components/PageLoader';
import FriendCard from '../components/FriendCard';

const FriendsPage = () => {
  const { data: friends = [], isLoading, isError } = useQuery({
    queryKey: ['userFriends'],
    queryFn: getUserFriends,
  });

  if (isLoading) return <PageLoader />;
  if (isError) return <div className="text-center mt-10 text-red-500">Failed to load friends</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Friends</h2>
      {friends.length === 0 ? (
        <p>You have no friends yet. 😢</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {friends.map(friend => (
            <FriendCard key={friend._id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsPage;
