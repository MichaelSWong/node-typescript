import dotenv from 'dotenv';

import { app } from './app';

dotenv.config();

const Server_Port = process.env.SERVER_PORT || 5000;

// Start server
app.listen(Server_Port, () => console.log(`Server is listening on port ${Server_Port}!`));
