import { Resolvers } from "src/types/resolvers";
import { ModifyChannelMutationArgs, ModifyChannelResponse } from "../../../../src/types/graphql"
import Channel from "../../../../src/entities/Channel";

const resolvers: Resolvers = {
  Mutation: {
    ModifyChannel: async(_, args: ModifyChannelMutationArgs): Promise<ModifyChannelResponse> => {
      try {
        const { id, nextName } = args;
        const existChannel = await Channel.findOne({id});

        if (!existChannel) {
          return {
            ok: false,
            error: "존재하지 않는 채널입니다.",
            changedName: null
          }
        } 

        existChannel.channelName = nextName;
        existChannel.save();
        // existChannel 객체에 typeORM과 매칭되는 정보가 있기 때문에, save 메소드를 호출하면 DB에 있는 값을 변경하여 저장함.

        return {
          ok: true,
          error: null,
          changedName: nextName
        }

      } catch (error) {
        return {
          ok: false,
          error: error.message,
          changedName: null
        }
      } // try-catch
    } // ModifyChannel
  } // Mutation
};

export default resolvers;