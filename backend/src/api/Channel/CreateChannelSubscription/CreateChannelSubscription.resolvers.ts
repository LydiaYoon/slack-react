const resolvers = {
  Subscription: {
    CreateChannelSubscription: {
      subscribe: (_, __, { pubSub }) => {
        return pubSub.asyncIterator("newChannel");
      } // subscribe
    } // CreateChannelSubscription
  } // Subscription
};

export default resolvers;