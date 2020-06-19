const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const moment = require('moment');
const bodyParser = require("body-parser");

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
					if (!req.body.id) {
						req.body.id = moment().format();
          }
          const arr = req.body.path.split('/');
          arr.pop();
          const collectionPath = arr.join('/');
          console.log('collectionPath: ', collectionPath);
					await db.collection(collectionPath).doc(req.body.id)
							.set(req.body);
					return res.status(200).send(req.body);
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
						let query = db.collection(controllerName).orderBy('id', 'desc');
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
	const youtube = 'https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLlZwsUoL6TOaEwk2wkvVrrZnsSiCl7VKb&part=snippet&key=AIzaSyDqyxV-9TUWmyVP27xwIuhV2lKLh8-gpas&maxResults=50';
	const request = require('request');

	try {
		request(youtube, { json: true }, async (err, res, body) => {
			if (err) {
				console.log(err);
				return;
			}
			body.items.forEach(
				item => {
					let start = moment(item.snippet.publishedAt, moment.defaultFormat).startOf('day').add(10, 'hours');
					let docId = start.format();
					const document = db.collection('sermons').doc(docId);
					document.set({
						id: docId,
						image: (item.snippet.thumbnails.standard || item.snippet.thumbnails.default).url,
						title: {english: item.snippet.title, chinese: item.snippet.title},
						description: { english: item.snippet.description, chinese: item.snippet.description },
						host: {
							name: {english: 'Elijah Wong', chinese: '黃德賢'},
							title: {english: 'Major Pastor', chinese: '主任牧师'}
						},
            start: start.unix(),
            links: [{
              type: 'link',
              text: {english: 'Start video', chinese: '观看视频'},
              url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`
            }],
						videoURL: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`
				});
			});
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
					const query = db.collection('sermons').orderBy('id', 'desc');
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

	// refresh item
	app.get('/api/sermons/refresh', (req, res) => {
		readSermonList();
		return res.status(200).send('OK');
	});

}



var serviceAccount = require("./chchalcKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://chchalc.firebaseio.com"
});
const db = admin.firestore();
const storage = admin.storage();



startCRUDEndpoints('news');
startCRUDEndpoints('lifegroups');
startCRUDEndpoints('ministries');
startCRUDEndpoints('testimonies');
startCRUDEndpoints('activities');
startCRUDEndpoints('homeslides');
startGetPutEndpoints('contactInfo');

startSermonsEndpoints();
startCRUDEndpoints('persons');
startCRUDEndpoints('stories');

startCRUDEndpoints('g');

/////////////////////////////////////////////////////////////////
// Posts to Stories

function startPost2Story() {
	// refresh item
	app.get('/api/Post2Story', async (req, res) => {
		await doPost2Story();
		return res.status(200).send('OK');
	});
}


async function doPost2Story() {
	let origin = db.collection('Posts');
	await origin.get().then(querySnapshot => {
		let items = querySnapshot.docs.map(doc => doc.data());
		let changed = items.map(item => ({
			image: '/assets/images/' + item.image,
			start: item.date,
			comments: item.comments,
			description: item.text,
			title: item.text,

			id: item.id,
			lastUpdated: item.lastUpdated || 1587460963,
			deleted: item.deleted || false,

			belongs: [{ label: 'story'}],
			host: {
        title: {
					english: "Lead Pastor",
					chinese: "主任牧师"
        },
        name: {
					english: "Elijah Wong",
          chinese: "黄德贤"
        },
        id: "d58e9c64-6c77-490d-98c8-4a8737ff0510",
        image: "/assets/images/pastor_1.jpg",
    	},
			address: { chinese: '和平教室', english: 'Peace Classroom'},
			minutes: 120
		}));

		var collec = db.collection('stories');
		changed.forEach(v => collec.doc(v.id).set(v));
		return true;
	});
}


// startCRUDEndpoints('Posts');
// startPost2Story();



exports.app = functions.https.onRequest(app);

// exports.scheduledFunction = functions.pubsub.schedule('every 30 minutes').onRun(async (context) => {
//   await readSermonList();
//   console.log("await readSermonList()");
//   return 0;
// });
