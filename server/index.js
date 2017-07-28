import express from 'express';
import path from 'path';

let app = express();

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
	//res.send('Hello World');
})


app.listen(3000, () => console.log('Running on port 3000'));

