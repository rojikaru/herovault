import { connect } from "mongoose"
import constants from "src/constants"

const providers = [
    {
        provide: constants.db_connection,
        useFactory: async () => await connect(
            process.env[constants.database_url],
            { autoCreate: true }
        )
    },
]

export default providers
