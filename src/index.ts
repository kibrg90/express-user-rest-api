const PORT = 3000;
import server from './server';

server.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});
