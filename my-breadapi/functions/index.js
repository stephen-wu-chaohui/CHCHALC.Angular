const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));

const version = 'ChchALC database API v1.0';

app.get('/version', (req, res) => {
  return res.status(200).send(version);
});


function startCRUDEndpoints(controllerName)
{
	// create
	app.post(`/api/${controllerName}`, (req, res) => {
		(async () => {
				try {
					console.log(req.body);
					await db.collection(controllerName).doc(req.body.id)
							.create(req.body);
					return res.status(200).send();
				} catch (error) {
					console.log(error);
					return res.status(500).send(error);
				}
			})();
	});

	// read item
	app.get(`/api/${controllerName}/:item_id`, (req, res) => {
		(async () => {
				try {
						const document = db.collection(controllerName).doc(req.params.item_id);
						let item = await document.get();
						let response = item.data();
						return res.status(200).send(response);
				} catch (error) {
						console.log(error);
						return res.status(500).send(error);
				}
				})();
		});

	// read all
	app.get(`/api/${controllerName}`, (req, res) => {
		(async () => {
				try {
						let query = db.collection(controllerName);
						await query.get().then(querySnapshot => {
							let items = querySnapshot.docs.map(doc => doc.data());
							return res.status(200).send(items);
						});
				} catch (error) {
						console.log(error);
						return res.status(500).send(error);
				}
				})();
		});

	// update
	app.put(`/api/${controllerName}/:item_id`, (req, res) => {
	(async () => {
		try {
				const document = db.collection(controllerName).doc(req.params.item_id);
				req.body.id = req.params.item_id;
				await document.set(req.body);
				return res.status(200).send();
		} catch (error) {
				console.log(error);
				return res.status(500).send(error);
		}
		})();
	});

	// delete
	app.delete(`/api/${controllerName}/:item_id`, (req, res) => {
	(async () => {
		try {
				const document = db.collection(controllerName).doc(req.params.item_id);
				if (!document) {
					return res.status(404).send('404. deleted already?');
				}
				await document.delete();
				return res.status(200).send();
		} catch (error) {
				console.log(error);
				return res.status(500).send(error);
		}
		})();
	});
}

function startGetPutEndpoints(controllerName)
{
	// update
	app.put(`/api/${controllerName}`, (req, res) => {
		(async () => {
			try {
				const document = db.collection(controllerName).doc('singleton');
				await document.set(req.body);
				return res.status(200).send();
			} catch (error) {
				console.log(error);
				return res.status(500).send(error);
			}
		})();
	});

	// read item
	app.get(`/api/${controllerName}`, (req, res) => {
		(async () => {
				try {
					const document = db.collection(controllerName).doc('singleton');
					let item = await document.get();
					let response = item.data();
					return res.status(200).send(response);
				} catch (error) {
						console.log(error);
						return res.status(500).send(error);
				}
				})();
		});
}


async function readSermonList ()
{
	const youtube = 'https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLlZwsUoL6TOaEwk2wkvVrrZnsSiCl7VKb&part=snippet&key=AIzaSyDqyxV-9TUWmyVP27xwIuhV2lKLh8-gpas&maxResults=10';
	const request = require('request');
	const moment = require('moment');

	try {
		request(youtube, { json: true }, async (err, res, body) => {
			if (err) {
				console.log(err);
				return;
			}
			let result = body.items
				.map(item => ({
						image: (item.snippet.thumbnails.standard || item.snippet.thumbnails.default).url,
						timestamp: moment().unix(),
						title: {english: item.snippet.title, chinese: item.snippet.title},
						preacher: {english: 'Elijah Wong', chinese: '黃德賢'},
						categories: ['Jesus'],
						text: {english: item.snippet.description },
						link: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`
				}));
			const document = db.collection('sermons').doc('singleton');
			await document.set({ lastUpdated: new Date(), result});
		});
	} catch (err) {
			console.log(err);
	}
}


function startSermonsEndpoints()
{
	// read item
	app.get('/api/sermons', (req, res) => {
		(async () => {
				try {
					const document = db.collection('sermons').doc('singleton');
					let item = await document.get();
					let response = item.data().result;
					return res.status(200).send(response);
				} catch (error) {
					console.log(error);
					return res.status(500).send(error);
				}
				})();
		});

	// refresh item
	app.get('/api/sermons/refresh', (req, res) => {
		readSermonList();
		return res.status(200).send('OK');
	});
}


// var serviceAccount = require("./bread-key.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://bread-f3926.firebaseio.com"
// });
// const db = admin.firestore();




var serviceAccount = require("./chchalcKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://chchalc.firebaseio.com"
});
const db = admin.firestore();


startCRUDEndpoints('Pastors');
startCRUDEndpoints('Posts');
startCRUDEndpoints('News');
startCRUDEndpoints('Ministries');
startCRUDEndpoints('Testimonies');
startCRUDEndpoints('Activities');
startCRUDEndpoints('Hightlights');
startGetPutEndpoints('contactInfo');
startSermonsEndpoints();


exports.app = functions.https.onRequest(app);

