import {connect} from "mongoose"
import constants from "src/constants"

const providers = [
    {
        provide: constants.db_connection,
        useFactory: async () => {
            return await connect(process.env.DATABASE_URL, {
                autoCreate: true,
            })
        }
    },
]

export default providers
