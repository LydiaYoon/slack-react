import { Resolvers } from "src/types/resolvers";
import { ModifyMessageMutationArgs, ModifyMessageResponse} from "../../../../src/types/graphql"
import Message from "../../../../src/entities/Message";


const resolvers: Resolvers = {
  Mutation: {
    ModifyMessage: async(_, args: ModifyMessageMutationArgs): Promise<ModifyMessageResponse> => {
      try {
        const { id, nextContents } = args;
        const existMessage = await Message.findOne({id});

        if (!existMessage) {
          return {
            ok: false,
            error: "존재하지 않는 메시지 입니다.",
            changedContents: null
          }
        }

        existMessage.contents = nextContents;
        existMessage.save();

        return {
          ok: true,
          error: null,
          changedContents: nextContents
        }

      } catch (error) {
        return {
          ok: false,
          error: error.message,
          changedContents: null
        }
      } // try-catch

    } //ModifyMessage
  } // Mutation
};

export default resolvers;