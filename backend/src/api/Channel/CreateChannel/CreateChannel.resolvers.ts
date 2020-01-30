import { Resolvers } from "src/types/resolvers";
import { CreateChannelMutationArgs, CreateChannelResponse } from "../../../types/graphql"
import Channel from "../../../entities/Channel";

const resolvers: Resolvers = {
  Mutation: {
    CreateChannel: async(_, args: CreateChannelMutationArgs): Promise<CreateChannelResponse> => {
      try {
        const { channelName } = args;
        const existChannel = await Channel.findOne({channelName});
        
        if (existChannel) {
          return {
            ok: false,
            error: "이미 존재하는 채널입니다."
          }
        }

        await Channel.create({
          channelName
        }).save();
        // typeORM 규칙상 create를 한 후에는 반드시 save를 한다.

        return {
          ok: true,
          error: null
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message
        }
      } // try-catch

    } // CreateChannel
  } // Mutation
};

export default resolvers;