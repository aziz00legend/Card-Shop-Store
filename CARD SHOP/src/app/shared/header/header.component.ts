import { Component ,OnInit , Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.createSnowballs();
  }

  private createSnowballs(): void {
    setInterval(() => {
      this.createSnowball();
    },150); // Create a new snowball every second
  }

  private createSnowball(): void {
    const snowball = this.renderer.createElement('div');
    this.renderer.addClass(snowball, 'snowball');
    this.renderer.setStyle(snowball, 'left', `${Math.random() * window.innerWidth}px`);
    this.renderer.appendChild(this.el.nativeElement, snowball);

    snowball.addEventListener('animationiteration', () => {
      this.renderer.removeChild(this.el.nativeElement, snowball);
    });
  }
}
