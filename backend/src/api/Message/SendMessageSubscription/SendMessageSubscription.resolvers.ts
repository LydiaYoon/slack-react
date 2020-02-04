const resolvers = {
  Subscription: {
    SendMessageSubscription: {
      subscribe: (_, __, { pubSub }) => {
        return pubSub.asyncIterator("newMessage");
      } // subscribe
    } // SendMessageSubscription
  } // Subscription
};

export default resolvers;