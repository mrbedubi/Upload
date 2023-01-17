import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private sanitize: DomSanitizer) {
  }

  transform(url: any) {
    return this.sanitize.bypassSecurityTrustResourceUrl(url);
  }

}
