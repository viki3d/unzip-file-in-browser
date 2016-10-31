<?php

	$zipfile = "javascript.zip";

	$fh = fopen($zipfile, "r");
	if ($fh===FALSE) {
		die("Failed to open stream to URL");
	}

	$fileContents = '';
	while (!feof($fh)) {
		$fileContents .= fread($fh, 8192);
	}
	fclose($fh);

	echo base64_encode($fileContents);

?>