import { serverPort } from './env';
import app from './start/app';

app.listen(serverPort, () => {
    console.log(`server is running at http://localhost:${serverPort}`);
});
