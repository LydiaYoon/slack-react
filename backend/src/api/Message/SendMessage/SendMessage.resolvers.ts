import { Resolvers } from "src/types/resolvers";
import { SendMessageMutationArgs, SendMessageResponse } from "src/types/graphql";
import Channel from "../../../../src/entities/Channel";
import Message from "../../../../src/entities/Message";

const resolvers: Resolvers = {
  Mutation: {
    SendMessage: async(_, args: SendMessageMutationArgs): Promise<SendMessageResponse> => {

      try {
        const { nickname, contents, thumbnail, innerChannelId } = args;
        const isExistChannel = await Channel.findOne({id: innerChannelId});
        // Channel : TypeORM으로 끌어온 엔티티
        // fineOne : DB의 SELECT
        if (!isExistChannel) {
          return {
            ok: false,
            error: "채널이 존재하지 않습니다."
          }
        }

        await Message.create({
          nickname,
          contents,
          thumbnail,
          innerChannelId
        }).save();
        // create : DB의 INSERT

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

    } // SendMessage
  } // Mutation
};

export default resolvers;
