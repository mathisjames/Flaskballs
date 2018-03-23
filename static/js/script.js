
// Flaskballs main routine //
function flaskballs() {

	// link to canvas on webpage //
	var canvas = document.getElementById('myCanvas');

	// link to canvas API //
	var ctx = canvas.getContext('2d');

	// create new image object for flaskballs //
	var img = new Image();

	// add flaskball image source //
	img.src = "static/gfx/ball.png";

	// setup vectors x and y //
	var vx = 0;
	var vy = 0;

	// store canvas width and height /2 for radius //
	var vxs = (canvas.width - 40) / 2; 
	var vys = (canvas.height - 40) / 2; 

	// setup vector x/y add or index //
	var vax = 0.05;
	var vay = 0.05; 

	// setup interval refresh cycle //
	setInterval(function(){

		// clear canvas for new frame //
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// store temp vectors x/y //
		var tvx = vx;
		var tvy = vy;

		// loop for 20 flaskballs //
		for( x = 0; x < 20; x++ ) {
	
			// generate flaskball x axis //
			var ax = vxs + Math.sin(tvx * (Math.PI * 2)) * vxs; 

			// generate flaskball y axis //
                	var ay = vys + Math.sin(tvy * (Math.PI * 2)) * vys;

			// draw flaskball with new vector points //
			ctx.drawImage(img, ax, ay, 40, 40);

			// add vector indexes //
			tvx += vax;
			tvy += vay;

		}

		// move original vector points so all flaksballs move //
	  	vx += 0.02;
		vy -= 0.03;

	// refresh flaskball page //
	},1000/15);

}


