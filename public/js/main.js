window.onload = function(){
	let images_ = document.getElementsByClassName("çarousel-image");
	carousel = new Carousel(images_);
	carousel.play();
	
	FileView.load("https://calibre-ebook.com/downloads/demos/demo.docx", "docx");
	//FileView.load("http://www.africau.edu/images/default/sample.pdf", "docx");
	//FileView.load("http://localhost/pion19", "html");
	
}