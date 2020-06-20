function upgradeImage(object) {
	// After load low res image, remove onload listener.

	// Remove onload listener.
	$(image).prop("onload", null);

	// Load high resolution image.
	// $(image).attr('src', 'https://s3-ap-southeast-1.amazonaws.com/wheredat/banner/banner_20180725_123048.jpeg');

	// Simulate slow network, after 1.5s, the high res image loads.
	sleep(1500).then(() => {
		// Do something after the sleep!

		// Load a high resolution image.
		$(image).attr('src', 'https://s3-ap-southeast-1.amazonaws.com/wheredat/banner/banner_20180725_123048.jpeg');
	});	
}
