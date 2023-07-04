
import { Component, OnInit , Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
// import PSPDFKit from 'pspdfkit';
@Component({
  selector: 'app-book-reader',
  templateUrl: './book-reader.component.html',
  styleUrls: ['./book-reader.component.css']
})
export class BookReaderComponent implements OnInit {
	
  @Input() pdfSrc:string ='';
  safePdf:any='';
  
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.pdfSrc = "https://books.mhouses.net/"+ window.history.state?.pdf; 
     this.safePdf = this.sanitizer.bypassSecurityTrustResourceUrl( this.pdfSrc);
    
		// PSPDFKit.load({
    //   baseUrl: location.protocol + "//" + location.host + "/assets/",
		// 	document: "/assets/sample.pdf",
		// 	container: "#pspdfkit-container",  
		// }).then((instance: any) => {
		// 	// For the sake of this demo, store the PSPDFKit for Web instance
		// 	// on the global object so that you can open the dev tools and
		// 	// play with the PSPDFKit API.
		// 	(window as any).instance = instance;
		// });
 
	}
}